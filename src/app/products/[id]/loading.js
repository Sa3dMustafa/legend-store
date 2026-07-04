import { LodaingCard } from "@/components/products/LodaingCard";
import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center">
      <LodaingCard />
    </div>
  );
}

export default loading;
