import Navigation from "@/components/shared/Navigation";
import Image from "next/image";

function page() {
  return (
    <div className="bg-[#FFFEFA] h-full px-5">
      <div className="container px-0 ">
        <Navigation name="about" />
        <section className="flex items-center mt-24 justify-center">
          <div className="w-[600px] text-center relative">
            <Image
              src={"/elements/element1.png"}
              alt=""
              width={250}
              height={450}
              className="absolute bottom-[-100px] right-[-200px] max-[940px]:hidden"
            />

            <h2 className="text-[#4F7853] font-bold text-[45px]">About Us</h2>
            <p className="text-[#4F7853] text-[22px]">
              At ArchiTech, we offer top-notch courses in Computer Systems
              Architecture to help you succeed and innovate in technology.
            </p>
          </div>
        </section>
        <section className="flex items-center mt-24 justify-center">
          <div className="w-[600px] text-center relative">
            <Image
              src={"/elements/element2.png"}
              alt=""
              width={250}
              height={450}
              className="absolute bottom-[-60px] left-[-200px] max-[940px]:hidden"
            />

            <h2 className="text-[#4F7853] font-bold text-[45px]">Mission</h2>
            <p className="text-[#4F7853] text-[22px]">
              At ArchiTech, we offer top-notch courses in Computer Systems
              Architecture to help you succeed and innovate in technology.
            </p>
          </div>
        </section>
        <section className="flex items-center mt-24 justify-center">
          <div className="w-[600px] text-center relative">
            <Image
              src={"/elements/element1.png"}
              alt=""
              width={250}
              height={450}
              className="absolute bottom-[-100px] right-[-200px] max-[940px]:hidden"
            />

            <h2 className="text-[#4F7853] font-bold text-[45px]">About Us</h2>
            <p className="text-[#4F7853] text-[22px]">
              At ArchiTech, we offer top-notch courses in Computer Systems
              Architecture to help you succeed and innovate in technology.
            </p>
          </div>
        </section>
        <section className="flex items-center mt-24 justify-center">
          <div className="w-[600px] text-center relative">
            <Image
              src={"/elements/element2.png"}
              alt=""
              width={250}
              height={450}
              className="absolute bottom-[-60px] left-[-200px] max-[940px]:hidden"
            />

            <h2 className="text-[#4F7853] font-bold text-[45px]">Mission</h2>
            <p className="text-[#4F7853] text-[22px]">
              At ArchiTech, we offer top-notch courses in Computer Systems
              Architecture to help you succeed and innovate in technology.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
