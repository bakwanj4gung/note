import Navbar from "./components/Navbar"
import Markdown from 'react-markdown'
import markdown from './pages/EXAMPLE.md';
import rehypeRaw from "rehype-raw";

function App() {
	return (
		<div className="size-full min-h-screen px-8 md:px-16 lg:px-32 xl:px-48">
			<div className="size-full min-h-screen p-2 text-dark dark:text-light font-noto transition-color">
				<Navbar />
				<main className="py-4 space-y-8">
					<div dir="rtl" className="content">
						<Markdown rehypePlugins={[rehypeRaw]}>
							{markdown}
						</Markdown>
					</div>
				</main>
			</div>
		</div>
	)
}

export default App
