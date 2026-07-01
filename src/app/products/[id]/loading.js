import { SkeletonCard } from "@/components/LodaingCard";
import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center">
      <SkeletonCard />
    </div>
  );
}

export default loading;
