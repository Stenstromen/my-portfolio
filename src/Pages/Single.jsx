import React, { lazy } from "react";

function Single() {
  const Home = lazy(() => import("./Home"));
  return (
    <>
      <Home />
    </>
  );
}

export default Single;
