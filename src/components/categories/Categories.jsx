import React from "react";

function Categories({ data }) {
  return (
    <div>
      {data.map((category) => (
        <div key={category.name}>
            <h2>{category.name}</h2>
            <p></p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
