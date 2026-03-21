import { HashRouter as Router, Route, Routes } from "react-router";
import MarkdownPageRender from "./md-setup/MarkdownPageRender";
import Layout from "./components/Layout";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />} >
					<Route path="/" element={<MarkdownPageRender />} />
					<Route path=":slug" element={<MarkdownPageRender />} />
					<Route path=":direction/:slug" element={<MarkdownPageRender />} />
				</Route>
			</Routes>
		</Router>
	)
}