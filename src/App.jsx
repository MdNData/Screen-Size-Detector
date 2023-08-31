import useDetectScreenSize from "./assets/components/useDetectScreenSize";

function App() {
  const { height, width } = useDetectScreenSize();
  return (
    <>
      <main>
        <header>
          <h1>Screen Size Detector Hook</h1>
        </header>
        <section>
          <p>
            Height: <span>{height}px</span>
          </p>
          <p>
            Width: <span>{width}px</span>
          </p>
        </section>
      </main>
      {}
    </>
  );
}

export default App;
