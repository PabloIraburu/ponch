import './App.css'

function App() {

  return (
    <>
      <div>
          <a href="https://vitejs.dev" target="_blank">
            <svg fill="#646cff" height="160px" width="160px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 470 470" enableBackground="new 0 0 470 470">
                  <g>
                      <path
                          d="m301.398,245.215c-4.143,0-7.5,3.358-7.5,7.5v28.749h-125.297c-4.143,0-7.5,3.358-7.5,7.5 0,40.748 33.151,73.899 73.899,73.899s73.898-33.151 73.898-73.899v-36.249c0-4.142-3.357-7.5-7.5-7.5zm-66.398,102.649c-29.936,0-54.728-22.452-58.424-51.399h116.847c-3.696,28.947-28.487,51.399-58.423,51.399z"/>
                      <path
                          d="m462.5,175.208h-153.602v-117.698c0-6.416 5.22-11.636 11.636-11.636s11.636,5.22 11.636,11.636c0,4.142 3.357,7.5 7.5,7.5s7.5-3.358 7.5-7.5c0-14.687-11.949-26.636-26.636-26.636s-26.636,11.949-26.636,26.636v117.699h-286.398c-4.143,0-7.5,3.358-7.5,7.5 0,52.199 16.754,101.624 48.451,142.932 26.22,34.17 61.773,60.705 101.658,76.231-8.937,6.86-14.714,17.643-14.714,29.755 0,4.142 3.357,7.5 7.5,7.5h184.208c4.143,0 7.5-3.358 7.5-7.5 0-12.112-5.777-22.894-14.714-29.755 39.885-15.525 75.439-42.06 101.659-76.231 31.698-41.309 48.452-90.734 48.452-142.933 0-4.142-3.357-7.5-7.5-7.5zm-166.475,218.918h-46.025c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5h47.076c9.815,0.007 18.149,6.274 21.243,15h-166.638c3.096-8.73 11.437-15 21.215-15h47.104c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-46.026c-91.248-26.29-155.603-109.349-158.845-203.918h278.77v25.006h-252.891c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5h387.977c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-120.087v-25.006h145.973c-3.242,94.569-67.597,177.627-158.846,203.918z"/>
                  </g>
              </svg>
          </a>
      </div>
        <h1>Ponche</h1>
        <p>Categories</p>
        <a href="/juegos" target="_blank" rel="noopener noreferrer">
            Juegos
        </a>
        <a href={"/juegos"}>
            Juegos
        </a>
    </>
  )
}

export default App
