import { Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import TemplateFirm from "./components/TemplateFirm";


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
