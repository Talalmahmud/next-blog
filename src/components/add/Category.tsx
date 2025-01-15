"use client";
import { addCategory } from "@/utils/actions";
import React, { useState } from "react";

type Props = {};

const Category = (props: Props) => {
  const [categoryName, setCategoryName] = useState<string>("");

  const addNewCategory = async () => {
    try {
      if (categoryName !== "") {
        const res = await addCategory(categoryName);
        setCategoryName("");
        alert(`Category Name ${categoryName} is created`);
      }
    } catch (error) {
      alert(`Category Name ${categoryName} is created`);
    }
  };
  return (
    <div>
      Category
      <input
        type="text"
        value={categoryName}
        placeholder="Add category"
        className=" p-2 outline-none"
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button
        onClick={addNewCategory}
        className=" bg-blue-800 text-white px-4 py-2"
      >
        Submit
      </button>
    </div>
  );
};

export default Category;
