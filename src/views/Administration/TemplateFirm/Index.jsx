import React from "react";
import Breadcrumbs from "../../../components/BreadCrumbs";
import AddImages from "../../../components/ImageModals/AddImagesModal";

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
      <AddImages />
    </>
  );
}

export default TemplateFirm;
