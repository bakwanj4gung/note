/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />
declare module "*.md" {
  const content: string;
  export default content;
}