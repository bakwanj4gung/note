import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="size-full min-h-screen px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="size-full min-h-screen p-2 text-dark dark:text-light font-noto transition-color">
        <Navbar />
        <main className="py-4 space-y-8">
          <header className="space-y-4">
            <p className="text-sm">Last update: 21 March 2027 22:10:10</p>
            <h1 className="text-center text-5xl md:text-6xl">Foolan</h1>
          </header>
          <div className="space-y-4 [&_ul]:list-disc [&_ol]:list-decimal [&_ul,&_ol]:list-inside content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure, fugiat at consectetur iste natus debitis omnis! Reprehenderit enim odit quisquam, quidem perferendis sed veniam dignissimos eveniet quibusdam iure saepe asperiores magni adipisci debitis cumque, ea libero voluptate aliquid molestiae itaque natus error ex. Iusto repudiandae libero excepturi sunt error pariatur, explicabo optio non, porro, labore asperiores natus suscipit? Ducimus repellendus fugit delectus perferendis dolor, corrupti iusto ipsum molestiae, odio suscipit temporibus eius culpa explicabo, possimus quibusdam voluptatem quidem? Odio quae est voluptates qui facilis, nemo tempora magni, rem iure illum unde tempore iusto tenetur laboriosam exercitationem quo odit earum!</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <ul>
              <li>a</li>
              <li>s</li>
              <li>s</li>
              <li>s</li>
            </ul>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <ol>
              <li>a</li>
              <li>s</li>
              <li>s</li>
              <li>s</li>
            </ol>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <ol className="list-[lower-alpha]!">
              <li>a</li>
              <li>s</li>
              <li>s</li>
              <li>s</li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
