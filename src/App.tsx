import { HashRouter, Route, Routes } from "react-router";
import MarkdownPageRender from "./md-setup/MarkdownPageRender";
import Layout from "./components/Layout";

export default function App() {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Layout />} >
					<Route path="/note/" element={<MarkdownPageRender />} />
					<Route path="/note/:slug" element={<MarkdownPageRender />} />
					<Route path="/note/:direction/:slug" element={<MarkdownPageRender />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}