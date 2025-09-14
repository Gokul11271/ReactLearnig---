import React, { useState, useEffect } from "react";

const useeffect = () => {
  const [Food, SetFood] = UseState(null);
  const [Loading, SetLoading] = UseState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        SetFood(data), SetLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        SetLoading(false);
      });
  }, []);

  if (Loading) return <h1>Loading.......</h1>;
  return (
    <>
      <h1>hello</h1>
      <p>{SetFood}</p>
    </>
  );
};

export default useeffect;
