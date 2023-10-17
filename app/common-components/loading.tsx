import React from "react";

const LoadingComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>Loading...</h1>
      {/* You can also use a loading spinner or any other loading animation here */}
    </div>
  );
};

export default LoadingComponent;
