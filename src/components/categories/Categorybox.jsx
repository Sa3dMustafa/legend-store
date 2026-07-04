"use client";

export default function Categorybox({ categories, value, onValueChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="border-2 rounded-lg p-2"
    >
      {categories.map((category) => (
        <option key={category.slug} value={category.slug}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
