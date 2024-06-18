import Navigation from "@/components/shared/Navigation";
import Image from "next/image";

function page() {
  return (
    <div className="bg-[#FFFEFA] h-full px-5 overflow-hidden">
      <div className="container px-0 mb-10">
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
            <h2 className="text-[#4F7853] font-bold text-[45px]">Vision</h2>
            <p className="text-[#4F7853] text-[22px] z-10">
              Our vision is to be the leading platform for computer science
              education, offering innovative learning experiences that prepare
              students for the challenges and opportunities of the digital age.
            </p>
            <Image
              src={"/elements/element2.png"}
              alt=""
              width={250}
              height={450}
              className="absolute bottom-[-60px] left-[-200px] max-[940px]:hidden"
            />
          </div>
        </section>
        <section className="flex items-center mt-24 justify-center">
          <div className="w-[600px] text-center relative">
            <Image
              src={"/elements/element3.png"}
              alt=""
              width={250}
              height={450}
              className="absolute bottom-[-100px] right-[-200px] max-[940px]:hidden"
            />

            <h2 className="text-[#4F7853] font-bold text-[45px]">Mission</h2>
            <p className="text-[#4F7853] text-[22px]">
              At ArchiTech, our mission is to empower computer science students
              with the knowledge and skills they need to excel in the
              ever-evolving field of technology. We are committed to building
              tomorrow&apos;s foundations by architecting the future of computer
              systems.
            </p>
          </div>
        </section>
        <section className="flex items-center mt-24 justify-center">
          <div className="w-[600px] text-center relative">
            <Image
              src={"/elements/element4.png"}
              alt=""
              width={250}
              height={450}
              className="absolute bottom-[-60px] left-[-200px] max-[940px]:hidden"
            />

            <h2 className="text-[#4F7853] font-bold text-[45px]">
              Core Values
            </h2>
            <p className="text-[#4F7853] text-[22px]">
              At ArchiTech, we provide high-quality, innovative education,
              fostering a supportive community and offering flexible,
              personalized learning experiences to help students excel and grow
              in the tech industry.
            </p>
          </div>
        </section>
        <section className="flex items-center mt-24 justify-center">
          <div className="w-[600px] text-center relative">
            <Image
              src={"/elements/element5.png"}
              alt=""
              width={250}
              height={450}
              className="absolute bottom-[-100px] right-[-200px] max-[940px]:hidden"
            />

            <h2 className="text-[#4F7853] font-bold text-[45px]">
              What We Offer
            </h2>
            <p className="text-[#4F7853] text-[22px]">
              At ArchiTech, access resources, hands-on projects, quizzes, and a
              vibrant community to master computer systems architecture.
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
              className="absolute bottom-[-60px] left-[-200px] max-[940px]:hidden"
            />
            <h2 className="text-[#4F7853] font-bold text-[45px]">
              Why Choose ArchiTech?
            </h2>
            <p className="text-[#4F7853] text-[22px]">
              Stay ahead with ArchiTech&apos;s up-to-date curriculum and
              expert-led courses on computer systems. Learn anytime, anywhere,
              at your own pace with our flexible platform.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
