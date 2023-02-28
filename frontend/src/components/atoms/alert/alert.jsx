import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function successMessage(message) {
  return toast.success(message);
}
function errorMessage(message) {
  return toast.error(message);
}

export { successMessage, errorMessage };
