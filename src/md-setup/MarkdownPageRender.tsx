import { useEffect, useState } from "react";
import MarkdownPageSetup from "./MarkdownPageSetup";
import { useParams } from "react-router";

const pages = import.meta.glob("../pages/*.md", { query: "?raw", import: "default", eager: true });

export default function MarkdownPageRender() {
    const { direction, slug = "HOME" } = useParams();
    const isRtl = direction === "rtl";
    const path = `../pages/${slug}.md`;
    const content = (pages[path] as string) || "# 404 Not Found";

    return <MarkdownPageSetup content={content} rtl={isRtl} />
}
