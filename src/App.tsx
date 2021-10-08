import * as React from "react";
import useLocalStorageState from "use-local-storage-state";

import DemoPage from "./pages/demo";
import FinalPage from "./pages/final";
import SpritesPage from "./pages/sprites";

type Page = "demo" | "final" | "sprites";

const App = () => {
  const [page, setPage] = useLocalStorageState<Page>("page", "final");

  return (
    <>
      <div>
        <button onClick={() => setPage("demo")}>Demo</button>
        <button onClick={() => setPage("final")}>Demo Final</button>
        <button onClick={() => setPage("sprites")}>Components</button>
      </div>

      {page === "demo" && <DemoPage />}
      {page === "final" && <FinalPage />}
      {page === "sprites" && <SpritesPage />}
    </>
  );
};

export default App;
