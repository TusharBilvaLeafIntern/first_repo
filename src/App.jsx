import { Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TemplateFirm from "./views/Administration/TemplateFirm/Index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="template-firm" element={<TemplateFirm />} />
      </Routes>
    </div>
  );
}

export default App;
