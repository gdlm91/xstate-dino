import * as React from "react";

import DemoPage from "./pages/demo";
import FinalPage from "./pages/final";
import ComponentsPage from "./pages/components";

type Page = "demo" | "final" | "components";

const App = () => {
  const [page, setPage] = React.useState<Page>("components");

  return (
    <>
      <div>
        <button onClick={() => setPage("demo")}>Demo</button>
        <button onClick={() => setPage("final")}>Demo Final</button>
        <button onClick={() => setPage("components")}>Components</button>
      </div>

      {page === "demo" && <DemoPage />}
      {page === "final" && <FinalPage />}
      {page === "components" && <ComponentsPage />}
    </>
  );
};

export default App;
