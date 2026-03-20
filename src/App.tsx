import Navbar from "./components/Navbar"
import Markdown from 'react-markdown'
import markdown from './pages/EXAMPLE.md';
import remarkIns from 'remark-ins';

export default function App() {
	return (
		<div className="size-full min-h-screen px-8 md:px-16 lg:px-32 xl:px-48">
			<div className="size-full min-h-screen p-2 text-dark dark:text-light font-noto transition-color">
				<Navbar />
				<main className="py-4 space-y-8">
					<div dir="rtl" className="content">
						<Markdown 
							remarkPlugins={[remarkIns]}
							components={{ blockquote({ children }) {
								const type = blockquoteType(children);
								const sanitizedChildren = sanitizeBlockquote(children);
								return (
									<blockquote className={`blockquote-${type}`}>{sanitizedChildren}</blockquote>
								)
							}}}
						>
							{markdown}
						</Markdown>
					</div>
				</main>
			</div>
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
		console.log(objectChild?.props?.children);
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