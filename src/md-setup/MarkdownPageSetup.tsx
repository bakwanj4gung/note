import Markdown from 'react-markdown';
import remarkIns from 'remark-ins';
import remarkGfm from 'remark-gfm';


export default function MarkdownPageSetup({ content, rtl = false }: { content: string, rtl?: boolean }) {
    return (
		<div className='content' dir={rtl ? "rtl" : "ltr"}>
			<Markdown 
				remarkPlugins={[remarkIns, remarkGfm]}
				components={{ blockquote({ children }) {
					const type = blockquoteType(children);
					const sanitizedChildren = sanitizeBlockquote(children);
					return (
						<blockquote className={`blockquote-${type}`}>{sanitizedChildren}</blockquote>
					)
				}}}
			>
				{content}
			</Markdown>
		</div>
    )
}

function blockquoteType(children: any) {
	try {
		const objectChild = children?.[1];
		const text = objectChild?.props?.children?.[0];
		// info & default are same
		if (text.includes("[INFO]")) return "info";
		if (text.includes("[IMPORTANT]")) return "important";
		if (text.includes("[WARNING]")) return "warning";
		if (text.includes("[OK]")) return "ok";
		return "default";
	} catch (e) {
		return "default";
	}
}

function sanitizeBlockquote(children: any) {
	try {
		const objectChild = children?.[1];
		const text = objectChild?.props?.children?.[0];
		const removeText = /\[IMPORTANT\]|\[INFO\]|\[WARNING\]|\[OK\]/;
		if (typeof text === "string" && removeText.test(text)) {
			const newChildren = objectChild.props.children.slice(3);
			const newChild = {
				...objectChild,
				props: {
				...objectChild.props,
				children: newChildren,
				},
			};
			return [children[0], newChild];
		}
		return children;
	} catch (e) {
		return children;
	}
}