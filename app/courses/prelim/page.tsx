import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
function page() {
  return (
    <div className="bg-[##FFFEFA]">
      <div className="container">
        <Navigation name="pre-final" />
        <div className="border-4 border-[#4F7853] rounded-lg p-6">Prelim</div>
      </div>
    </div>
  );
}

export default page;
