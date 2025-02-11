import { Routes, Route } from "react-router";
import Breadcrumbs from "./components/BreadCrumbs";
import AddImages from "./components/components/AddImagesModal";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  


function App() {
  return (
    <div>
      <Routes>
        <Route path="template-firm" />
      </Routes>
      <Breadcrumbs
        maintitle="Template Firm"
        title="Dashboard"
        subtitle="Template Firm"
        modal="#add_user"
        name="Add Images"
      />
      <AddImages></AddImages>
    </div>
  );
}

export default App;
