// write your CatList component here

import React from "react";

function CatList({ cats = [] }) {
  return (
    <div>
      {cats.map((pic) => (
        <img key={pic.id} src={pic.url} alt="cat" />
      ))}
    </div>
  );
}

export default CatList;
