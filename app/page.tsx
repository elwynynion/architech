import Navigation from "@/components/shared/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#FAF6E9] h-[100vh]">
        <div className="container">
          <Navigation />
          <div className="flex justify-center items-center mt-auto h-[80vh] gap-4 container">
            <Image
              src="/architech-image/big-architech-logo.png"
              alt="Architech-Big Icon"
              width={90}
              height={90}
              className="max-[600px]:w-[60px]"
            />
            <img
              src="/architech-image/architech-typography.png"
              alt="Architech-Big Icon"
              className="max-[600px]:w-[350px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
