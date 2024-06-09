import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

async function Page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return <div></div>;
}

export default Page;
