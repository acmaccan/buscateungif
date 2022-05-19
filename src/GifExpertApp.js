import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = ["Mononoke"] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>BuscateUnGif</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
