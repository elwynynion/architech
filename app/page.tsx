import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("/home");
  } else {
    return (
      <>
        <div className="bg-[#FAF6E9] h-[100vh] px-5">
          <div className="container p-0">
            <Navigation name="home" />
            <div className="flex justify-center items-center mt-auto h-[80vh] gap-4 container">
              <Image
                src="/architech-image/big-architech-logo.png"
                alt="Architech-Big Icon"
                width={90}
                height={90}
                className="max-[600px]:w-[60px]"
              />
              <Image
                src="/architech-image/architech-typography.png"
                alt="Architech-Big Icon"
                width={350}
                height={350}
                className="max-[600px]:w-[250px]"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
