import React from "react";
import Breadcrumbs from "./BreadCrumbs";
import AddImages from "./components/AddImagesModal";

function TemplateFirm() {
  return (
    <>
      <Breadcrumbs
        maintitle="Template Firm"
        title="Dashboard"
        subtitle="Template Firm"
        modal="#add_user"
        name="Add Images"
      />
      <AddImages></AddImages>
    </>
  );
}

export default TemplateFirm;
