import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <React.Fragment>
      Woups!
      <br />
      The requested page doesn't exist !<br />
      <Link>Go back to home page please</Link>
    </React.Fragment>
  );
}
