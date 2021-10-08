import * as React from "react";
import useLocalStorageState from "use-local-storage-state";

import DemoPage from "./pages/demo";
import FinalDemo from "./pages/final";
import SpritesPage from "./pages/sprites";

type Page = "sprites" | "demo" | "final";

const App = () => {
  const [page, setPage] = useLocalStorageState<Page>("page", "final");

  return (
    <>
      <div>
        <button onClick={() => setPage("sprites")}>Sprites</button>
        <button onClick={() => setPage("demo")}>Demo</button>
        <button onClick={() => setPage("final")}>Demo Final</button>
      </div>

      {page === "sprites" && <SpritesPage />}
      {page === "demo" && <DemoPage />}
      {page === "final" && <FinalDemo />}
    </>
  );
};

export default App;
