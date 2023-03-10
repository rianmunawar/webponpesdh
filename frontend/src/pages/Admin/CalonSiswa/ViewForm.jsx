import React from "react";
import { useParams } from "react-router-dom";

function ViewForm() {
  const { slug } = useParams();
  return (
    <>
      <div>
        <h1>Detail Form</h1>
        detail form {slug}
      </div>
    </>
  );
}

export default ViewForm;
