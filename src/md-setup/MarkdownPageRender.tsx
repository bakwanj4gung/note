import { useEffect, useState } from "react";
import MarkdownPageSetup from "./MarkdownPageSetup";
import { useParams } from "react-router";

const pages = import.meta.glob("../pages/*.md", { query: "?raw", import: "default" });

export default function MarkdownPageRender() {
    const [content, setContent] = useState<string>("Loading...");
    const { direction, slug = "HOME" } = useParams();
    const isRtl = direction === "rtl";

    useEffect(() => {
        const load = async () => {
            const path = `../pages/${slug}.md`;

            if (pages[path]) {
                const md = await pages[path]();
                setContent(md as string);
            } else {
                setContent("# 404 Not Found");
            }
        }
        load();
    }, [slug]);

    return <MarkdownPageSetup content={content} rtl={isRtl} />
}
