import React from "react";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="bg-[#FFFEFA] h-[100vh]">
      <div className="container px-5">
        <Navigation name="courses" />

        <div className="border-4 border-[#4F7853] rounded-[35px] p-10  max-[460px]:border-none max-[460px]:p-2">
          <h1 className="text-3xl font-bold text-[#4F7853] mb-4 max-[460px]:text-[15px]">
            Midterm Lesson 1
          </h1>

          <div className="font-bold text-[#4F7853] text-6xl mb-4 text-center max-[460px]:text-[25px]">
            Hardware Architecture
          </div>

          <div className="border-[1px] border-[#4F7853] mb-5"></div>

          <div className="font-bold text-[#4F7853] text-4xl mt-10 mb-2 max-[450px]:text-[22px]">
            Computer Hardware
          </div>
          <p className="text-[#4F7853] text-2xl text-justify max-[460px]:text-[19px]">
            These are physical components of computer system (external and
            internal devices and equipment) that performs major functions such
            as input, output, storage, communication, transfer of digital data
            and processing.
          </p>

          <div className="font-bold text-[#4F7853] text-4xl mt-10 mb-10 text-center max-[460px]:text-[20px] ">
            Internal Computer Hardware
          </div>

          <div className="grid grid-cols-2 max-[1330px]:grid-cols-1 gap-x-[50px] gap-y-[30px]">
            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/cpu.jpeg"
                    width={9999}
                    height={9999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Central Processing Unit (CPU)
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  The Brain of a computer. It is the Primary processing unit
                  responsible for executing and performing calculations. It
                  handles tasks for running programs, managing system resources,
                  and processing user inputs.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] border-[#4F7853] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/motherboard.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Motherboard
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  The backbone of the computer. It is the main circuit board
                  inside a computer that connects and holds together all the
                  essential components together. It provides communication
                  channels and power distribution.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] border-[#4F7853] w-[40%] max-[700px]:w-full ">
                <div className="h-full">
                  <Image
                    src="/midterm-img/ram.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Random Access Memory Card (RAM)
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  Computer’s short-term memory. It’s the temporary memory space
                  inside a computer that allows it to stores data and
                  instructions that the CPU needs to access quickly. RAM loses
                  data when the computer is turned off..
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] border-[#4F7853] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/gpu.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Graphics Processing Unit (GPU)
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  It is designed to handle graphics-related tasks. GPU focuses
                  on processing graphical data efficiently and quickly. It helps
                  make your visual experience on a computer more vivid and
                  immersive by rendering images, videos, and animations.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-w-[700px] max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] border-[#4F7853] w-[40%] max-[700px]:w-full">
                <Image
                  src="/midterm-img/psu.jpg"
                  width={350}
                  height={999}
                  alt=""
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Power Supply Unit (PSU)
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  The heart of a computer. It provides electrical power that the
                  computer needs. PSU distributes the power through cables to
                  components in order to ensure that they receive the right
                  amount of electricity to operate.
                </p>
              </div>
            </div>
          </div>

          <div className="font-bold text-[#4F7853] text-4xl mt-6 mb-10 text-center">
            Storage Drives
          </div>

          <div className="grid grid-cols-2 max-[1330px]:grid-cols-1 gap-x-[50px] gap-y-[30px]">
            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/hdd.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Hard Disk Drive (HDD)
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  It stores and retrieve digital data. HDD are relatively large
                  storage capacities and affordable pricing compared to other
                  storage technologies. However, they tend to be slower than SDD
                  due to mechanical components.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/ssd.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Solid State Drive (SSD)
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  It stores and retrieve digital data. It uses flash memory
                  chips to store data. SSDs allows to access and transfer data
                  much faster than HDDs, that results quicker boot times, faster
                  file transfers, and overall snappier performance for the
                  computer.
                </p>
              </div>
            </div>
          </div>

          <div className="font-bold text-[#4F7853] text-4xl mt-6 mb-10 text-center">
            External Computer Hardware
          </div>

          <div className="grid grid-cols-2 max-[1330px]:grid-cols-1 gap-x-[50px] gap-y-[30px]">
            <div className="border-[1px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/monitor.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Monitor
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  Screens used to display visual output information for
                  computers. It allows users to view and interact with software
                  applications, websites, videos, and other digital content. It
                  is essential peripherals for computers, providing visual
                  interference that enables user to see and interact with the
                  output.
                </p>
              </div>
            </div>

            <div className="border-[1px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/mouse.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Mouse
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  It is a handheld input device used to control the cursor on a
                  computer screen. By moving it across a surface, users can
                  interact with software applications, selecting, clicking,
                  dragging, and performing various actions within graphical user
                  interfaces.
                </p>
              </div>
            </div>

            <div className="border-[1px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/keyboard.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Keyboard
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  It is a fundamental tool for interacting with computers,
                  enabling users to input information and navigate through
                  various tasks efficiently. Keyboards may include additional
                  features such as multimedia controls, programmable keys, and
                  ergonomic designs for enhanced comfort during typing.
                </p>
              </div>
            </div>

            <div className="border-[1px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:w-full max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/speakers.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Speakers
                </p>
                <p className="text-[#4F7853] text-xl text-justify">
                  It is an output devices for computers, converting audio
                  signals into sound waves. They allow users to listen to music,
                  watch videos, play games, and engage in voice calls with clear
                  audio output.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="border-[1px] rounded-[20px] bg-[#DDEEDF] max-w-[700px] w-full mb-5 flex max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <Image
                  src="/midterm-img/microphone.jpg"
                  width={9999}
                  height={999}
                  alt=""
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4 max-[460px]:text-[22px]">
                  Microphone
                </p>
                <p className="text-[#4F7853] text-xl text-justify max-[460px]:text-[18px]">
                  It captures audio, converting it into digital signals for
                  computer processing and recording. It's widely used for voice
                  calls, video conferencing, recording, speech recognition, and
                  other audio tasks, enabling communication and interaction with
                  software requiring audio input.
                </p>
              </div>
            </div>
          </div>

          <div className="font-bold text-[#4F7853] text-4xl mt-12 mb-10 text-center">
            Generation and Advancements
          </div>
          <div className="border-[1px] border-[#4F7853] w-full rounded-[20px] overflow-hidden shadow-xl">
            <div className="h-full w-full flex">
              <div className="grid grid-cols-2 max-[700px]:grid-cols-1">
                <div className="grid grid-cols-2 gap-x-[10px] max-[1330px]:grid-cols-1">
                  <div className="h-full">
                    <Image
                      src="/midterm-img/vacuum.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full">
                    <Image
                      src="/midterm-img/fleming.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                    1st Generation (Vacuum Tube)
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify">
                    <span className="font-bold">Inventor </span>Sir John Ambrose
                    Fleming, a British electrical engineer, is credited with
                    inventing the first practical vacuum tube called the
                    "Fleming valve" in 1904. This device was essentially a
                    diode, allowing current to flow in only one direction.
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">History </span>After Fleming's
                    invention, Lee De Forest, an American inventor, further
                    developed the vacuum tube by introducing the "audion" in
                    1906. The Audion was the first device capable of amplifying
                    electrical signals, paving the way for numerous applications
                    in radio communication, broadcasting, and early computing.
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">Uses </span>Vacuum tubes were
                    used for a number of things like amplifying signals that
                    allowed them to be used in equipments like audio amplifiers,
                    TV sets, radio reception (AM and FM), radio transmitters,
                    radar, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-10 mb-[10px] rounded-[20px] p-4 pb-20 shadow-xl">
            <div className="font-bold text-[#4F7853] text-4xl mt-10  mb-3 ">
              Advantages
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Amplification
                </span>
                <br />
                They amplify signals with relatively low distortion, making them
                suitable for audio applications like amplifiers and
                high-fidelity equipment.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  High Voltage Handling
                </span>
                <br />
                It can handle high voltage levels, making them suitable for
                high-power applications such as radio transmitters and power
                amplifiers.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Durability
                </span>
                <br />
                Vacuum tubes are relatively robust and less susceptible to
                damage from electrical surges compared to semiconductor devices.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Warm Sound
                </span>
                <br />
                Audiophiles often prefer the sound produced by vacuum tube
                amplifiers, which is described as warm and pleasant.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  High-Temperature Operation
                </span>
                <br />
                Vacuum tubes can operate at high temperatures without
                significant degradation in performance, which is advantageous in
                certain applications.
              </p>
            </div>

            <div className="font-bold text-[#4F7853] text-4xl mt-14  mb-3">
              Disadvantages
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Size and Weight
                </span>
                <br />
                Vacuum tubes are large and heavy, making them impractical for
                portable devices and contributing to larger overall system
                sizes.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Power Consumption
                </span>
                <br />
                It Require significant power to operate and generate heat,
                leading to higher energy consumption and the need for additional
                cooling measures.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Limited Lifespan
                </span>
                <br />
                Vacuum tubes have a finite lifespan and can degrade over time,
                requiring periodic replacement and maintenance.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Fragility
                </span>
                <br />
                Vacuum tubes are relatively fragile and can be damaged by
                physical shocks or vibrations, making them less suitable for
                rugged environments.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">Cost</span>
                <br />
                They can be expensive to manufacture and procure, especially for
                specialized or high-performance variants, contributing to higher
                equipment costs.
              </p>
            </div>
          </div>

          <div className="border-[1px] border-[#4F7853] w-full rounded-[20px] overflow-hidden mt-[90px] shadow-xl">
            <div className="h-full w-full flex">
              <div className="grid grid-cols-2 max-[700px]:grid-cols-1">
                <div className="grid grid-cols-2 gap-x-[10px] max-[1330px]:grid-cols-1">
                  <div className="h-full">
                    <Image
                      src="/midterm-img/earlytransistor.png"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full">
                    <Image
                      src="/midterm-img/transistorpeeps.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                    2nd Generation (Transistors)
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify">
                    <span className="font-bold">Inventor </span>The transistor
                    was co-invented by John Bardeen, Walter Brattain, and
                    William Shockley in 1947 at Bell Laboratories. Their
                    ground-breaking invention marked the beginning of the
                    semiconductor era and revolutionized the field of
                    electronics.
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">History </span>The invention of
                    transistors revolutionized electronics, leading to smaller,
                    more efficient devices such as radios, televisions, and
                    computers. Over time, transistors evolved from point-contact
                    to junction and then to silicon-based transistors, driving
                    advancements in technology and shaping the digital age.
                    Today, transistors are ubiquitous in electronic devices,
                    powering everything from smartphones to satellites, and
                    remain essential to modern technology.
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">Uses </span>Transistors act as a
                    switch or a gate for electronic signals, opening and closing
                    an electronic gate many times per second. It serves as
                    amplifiers and switching apparatuses. It ensures that the
                    circuit is on if the current is flowing and switched off if
                    it isn’t. Transistors are used in complex switching circuits
                    that compromise all modern telecommunications systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-10 mb-[10px] rounded-[20px] p-4 pb-20 shadow-xl">
            <div className="font-bold text-[#4F7853] text-4xl mt-10  mb-3">
              Advantages
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Size
                </span>
                <br />
                Transistors are significantly smaller than vacuum tubes,
                allowing for miniaturization and integration into compact
                electronic devices.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Low Power Consumption
                </span>
                <br />
                Transistors consume less power than vacuum tubes, leading to
                increased energy efficiency and longer battery life in portable
                devices.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Reliability
                </span>
                <br />
                Transistors have longer lifespan and are more reliable than
                vacuum tubes due to their solid-state construction and absence
                of moving parts.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Faster Operation
                </span>
                <br />
                They can switch on and off faster than vacuum tubes, enabling
                high-speed digital circuits and faster data processing.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Lower Cost
                </span>
                <br />
                Mass production and advancements in semiconductor technology
                have led to lower production costs for transistors, making
                electronic devices more affordable.
              </p>
            </div>

            <div className="font-bold text-[#4F7853] text-4xl mt-14  mb-3">
              Disadvantages
            </div>
            <div className="grid grid-cols-2 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Heat Generation
                </span>
                <br />
                Transistors can generate heat during operation, requiring heat
                sinks or cooling systems to prevent overheating and maintain
                reliability.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Voltage and Temperature Sensitivity
                </span>
                <br />
                Transistor performance can be affected by variations in voltage
                and temperature, requiring careful design considerations in
                electronic circuits.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Sensitivity to Static Electricity
                </span>
                <br />
                Transistors are sensitive to electrostatic discharge (ESD) and
                can be damaged by static electricity, necessitating proper
                handling procedures during manufacturing and assembly.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Complexity of Manufacturing
                </span>
                <br />
                Fabricating transistors involves complex semiconductor
                manufacturing processes, leading to higher initial setup costs
                and technical expertise requirements.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">Noise</span>
                <br />
                Transistors can introduce noise and distortion in electronic
                circuits, impacting the quality of audio and signal processing
                applications.
              </p>
            </div>
          </div>

          <div className="border-[1px] border-[#4F7853] w-full rounded-[20px] overflow-hidden mt-[90px] shadow-xl">
            <div className="h-full w-full flex">
              <div className="grid grid-cols-2 max-[700px]:grid-cols-1">
                <div className="grid grid-cols-3 gap-x-[10px] max-[1330px]:grid-cols-1">
                  <div className="h-full">
                    <Image
                      src="/midterm-img/integratedcircuit.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full">
                    <Image
                      src="/midterm-img/jack.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full">
                    <Image
                      src="/midterm-img/robert.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                    3rd Generation (Integrated Circuits)
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify">
                    <span className="font-bold">Inventors </span>
                    <br />
                    <span className="font-bold">Jack Kilby </span>
                    In 1958, Jack Kilby, an engineer at Texas Instruments,
                    invented the first working integrated circuit. His invention
                    consisted of a single piece of germanium with several
                    electronic components, including resistors and capacitors,
                    connected on a single chip. Kilby's integrated circuit laid
                    the foundation for modern semiconductor technology.
                    <br />
                    <span className="font-bold">Robert Noyce </span>
                    Also in 1958, Robert Noyce, a physicist and co-founder of
                    Fairchild Semiconductor, independently developed his version
                    of the integrated circuit. Noyce's integrated circuit used
                    silicon as the substrate material and incorporated multiple
                    transistors and other components on a single chip. His
                    design was more practical for mass production and became the
                    basis for the integrated circuits used in modern
                    electronics.
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">History </span>
                    The integrated circuit (IC), invented in 1958 by Jack Kilby
                    and Robert Noyce, revolutionized electronics by allowing for
                    smaller, more reliable devices. Their innovations, using
                    germanium and silicon, laid the groundwork for modern
                    technology, with ICs now powering everything from gadgets to
                    industrial systems.
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">Uses </span>Integrated Circuits
                    are microchips that refers to an assembly of electronic
                    components embedded in thin silicon wafers. Integrated
                    Circuits perform various functions such as processing and
                    storing information. It can also be categorized as either
                    analog or digital and can work as a timer, amplifier,
                    counter, oscillator, or computer memory.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-10 mb-[10px] rounded-[20px] p-4 pb-20 shadow-xl">
            <div className="font-bold text-[#4F7853] text-4xl mt-10  mb-3">
              Advantages
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Reliability
                </span>
                <br />
                Integrated circuits are more reliable than discrete electronic
                components because they have fewer connections and are less
                prone to mechanical failure..
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Low Power Consumption
                </span>
                <br />
                ICs consume less power than discrete components, making them
                ideal for battery-powered devices and energy-efficient
                applications..
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Cost-Effective Manufacturing
                </span>
                <br />
                Mass production of integrated circuits using semiconductor
                fabrication processes allows for cost-effective manufacturing,
                resulting in lower production costs per unit..
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Higher Performance
                </span>
                <br />
                Integrated circuits can achieve higher levels of performance,
                speed, and functionality compared to discrete components,
                enabling advanced features and capabilities in electronic
                devices..
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Versatility
                </span>
                <br />
                Integrated Circuits are versatile and can be designed for a wide
                range of applications, from simple logic gates to complex
                microprocessors and system-on-chip (SoC) solutions.
              </p>
            </div>

            <div className="font-bold text-[#4F7853] text-4xl mt-14 mb-3">
              Disadvantages
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Complex Manufacturing Process
                </span>
                <br />
                Fabricating integrated circuits involves complex semiconductor
                manufacturing processes, requiring specialized equipment and
                expertise, which can result in high initial setup costs.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Sensitivity to Environmental Factors
                </span>
                <br />
                Integrated circuits can be sensitive to environmental factors
                such as temperature, humidity, and electrostatic discharge
                (ESD), requiring careful handling and protection during
                manufacturing, assembly, and operation.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Limited Repairability
                </span>
                <br />
                Integrated circuits are difficult to repair or modify once they
                are fabricated, as they are typically encapsulated within
                protective packaging, making it challenging to access and repair
                individual components.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Potential for Obsolescence
                </span>
                <br />
                Rapid advancements in semiconductor technology can lead to the
                rapid obsolescence of integrated circuits, as newer, more
                advanced components are developed, making older ICs obsolete.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Supply Chain Vulnerabilities
                </span>
                <br />
                Reliance on a global supply chain for semiconductor
                manufacturing can result in supply chain disruptions and
                shortages, impacting the availability and cost of integrated
                circuits.
              </p>
            </div>
          </div>

          <div className="border-[1px] border-[#4F7853] w-full rounded-[20px] overflow-hidden mt-[90px] shadow-xl">
            <div className="h-full w-full flex">
              <div className="grid grid-cols-2 max-[700px]:grid-cols-1">
                <div className="grid grid-cols-3 gap-x-[10px] max-[1330px]:grid-cols-1">
                  <div className="h-full">
                    <Image
                      src="/midterm-img/cpu2.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full">
                    <Image
                      src="/midterm-img/ted.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full">
                    <Image
                      src="/midterm-img/faggin.jpg"
                      width={9999}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                    4th Generation (Microprocessors)
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify">
                    <span className="font-bold">Inventors </span>
                    <br />
                    <span className="font-bold">Ted Hoff </span>
                    In 1968, Ted Hoff, an engineer at Intel Corporation,
                    conceived the idea of a single-chip microprocessor while
                    working on a project for a Japanese calculator manufacturer.
                    Hoff proposed the concept of integrating the functions of a
                    computer's central processing unit (CPU) onto a single
                    semiconductor chip.
                    <br />
                    <span className="font-bold">Federico Faggin </span>
                    Federico Faggin, also an engineer at Intel, led the team
                    responsible for designing and implementing the first
                    commercially viable microprocessor. Faggin, along with other
                    engineers at Intel, developed the Intel 4004 microprocessor,
                    which was released in 1971. The Intel 4004 was the world's
                    first microprocessor, paving the way for the development of
                    modern computing technology.
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">History </span>
                    Microprocessors began in 1971 with the Intel 4004, the first
                    commercial microprocessor, developed by a team led by
                    Federico Faggin at Intel. Driven by Moore's Law,
                    microprocessors have rapidly improved in performance and
                    efficiency. They are now integral to personal computers,
                    servers, mobile devices, and more, fundamentally
                    transforming how we work and live..
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">Uses </span>
                    The microprocessor is the CPU of a computer or electronic
                    device, acting as its "brain." It handles data processing,
                    instruction execution, control, arithmetic, logic
                    operations, interrupt handling, and clock synchronization,
                    ensuring efficient system operation..
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-10 mb-[10px] rounded-[20px] p-4 pb-20 shadow-xl">
            <div className="font-bold text-[#4F7853] text-4xl mt-10 mb-3">
              Advantages
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Processing Power
                </span>
                <br />
                Microprocessors offer high-speed processing capabilities,
                allowing for rapid execution of instructions and efficient data
                processing.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Versatility
                </span>
                <br />
                Microprocessors are versatile and can be programmed to perform a
                wide range of tasks, making them suitable for various
                applications across different industries.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Miniaturization
                </span>
                <br />
                Microprocessors enable the miniaturization of electronic devices
                due to their compact size and integration of multiple functions
                onto a single chip.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Cost-Effectiveness
                </span>
                <br />
                Mass production of microprocessors using semiconductor
                fabrication processes has led to cost-effective manufacturing,
                making electronic devices more affordable for consumers.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Energy Efficiency
                </span>
                <br />
                Microprocessors consume relatively low power compared to
                alternative technologies, contributing to energy efficiency and
                longer battery life in portable devices.
              </p>
            </div>

            <div className="font-bold text-[#4F7853] text-4xl mt-14 mb-3">
              Disadvantages
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Complexity
                </span>
                <br />
                Microprocessors are complex electronic components that require
                specialized knowledge and expertise for design, programming, and
                troubleshooting..
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Heat Generation
                </span>
                <br />
                Microprocessors can generate heat during operation, requiring
                heat sinks or cooling systems to dissipate heat and prevent
                overheating, which adds to the complexity and cost of electronic
                devices.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Limited Processing Capacity
                </span>
                <br />
                While microprocessors offer high-speed processing capabilities,
                they have limitations in terms of processing capacity and may
                struggle with extremely demanding computational tasks.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Security Risks
                </span>
                <br />
                Microprocessors are vulnerable to security threats such as
                malware, viruses, and hacking attacks, which can compromise the
                integrity and confidentiality of data processed by electronic
                devices.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Dependency on Supply Chain
                </span>
                <br />
                The manufacturing of microprocessors relies on a global supply
                chain for semiconductor materials and manufacturing equipment,
                making it susceptible to disruptions and shortages that can
                impact production and availability of electronic devices.
              </p>
            </div>
          </div>

          <div className="border-[1px] border-[#4F7853] w-full rounded-[20px] overflow-hidden mt-[90px] shadow-xl">
            <div className="h-full w-full flex">
              <div className="grid grid-cols-2 max-[700px]:grid-cols-1">
                <div className="grid grid-cols-2 gap-x-[10px] max-[1330px]:grid-cols-1">
                  <div className="h-full">
                    <Image
                      src="/midterm-img/ai.jpg"
                      width={400}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full">
                    <Image
                      src="/midterm-img/alan.jpg"
                      width={400}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                    5th Generation (Artificial Intelligence (AI))
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify">
                    <span className="font-bold">Inventor </span>
                    Alan Turing, a British mathematician and computer scientist,
                    made significant contributions to the theory of computation
                    and is widely regarded as one of the founding figures of AI.
                    In 1950, Turing proposed the "Turing Test" in his paper
                    titled "Computing Machinery and Intelligence," which was
                    published in the journal Mind. The Turing Test is a
                    criterion for evaluating a machine's ability to exhibit
                    intelligent behavior equivalent to, or indistinguishable
                    from, that of a human. While Turing's work laid the
                    theoretical groundwork for AI, the practical development of
                    AI technologies involved contributions from numerous
                    researchers and continues to evolve to this day.
                  </p>
                  <p className="text-[#4F7853] text-xl text-justify mt-4">
                    <span className="font-bold">Uses </span>Transistors act as a
                    switch or a gate for electronic signals, opening and closing
                    an electronic gate many times per second. It serves as
                    amplifiers and switching apparatuses. It ensures that the
                    circuit is on if the current is flowing and switched off if
                    it isn’t. Transistors are used in complex switching circuits
                    that compromise all modern telecommunications systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-2xl mt-8">
              History
            </div>
            <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Origins (Mid-20th Century)
                </span>
                <br />
                The roots of computer AI can be traced back to the mid-20th
                century when researchers began exploring the possibility of
                creating machines that could exhibit intelligent behavior.
                Pioneers like Alan Turing, Warren McCulloch, and Walter Pitts
                laid the theoretical groundwork for AI, proposing models of
                artificial neurons and exploring the concept of machine
                intelligence.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Early Developments (1950s-1960s)
                </span>
                <br />
                The 1950s and 1960s saw significant advancements in AI research,
                with Alan Turing proposing the Turing Test in 1950 as a
                criterion for machine intelligence. John McCarthy coined the
                term "artificial intelligence" in 1956 and developed the first
                AI programming language, LISP, in the 1960s. Early AI systems
                focused on rule-based approaches and symbolic reasoning.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  AI Winter (1970s-1980s)
                </span>
                <br />
                Despite initial optimism, the field of AI faced challenges and
                setbacks during the 1970s and 1980s, leading to a period known
                as the "AI winter." Progress was slower than anticipated, and
                funding for AI research declined due to unrealistic expectations
                and disappointments with early AI systems.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Resurgence (1990s-Present)
                </span>
                <br />
                The 1990s saw a resurgence of interest in AI fueled by advances
                in computing power and machine learning techniques. Researchers
                developed more sophisticated algorithms for tasks such as
                pattern recognition, data mining, and natural language
                processing. Recent years have witnessed exponential growth in AI
                applications, driven by advancements in deep learning, which
                uses artificial neural networks to process complex data
                structures.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-10 mb-[10px] rounded-[20px] p-4 pb-4 shadow-xl">
            <div className="font-bold text-[#4F7853] text-4xl mt-10 mb-3">
              Advantages
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Automation
                </span>
                <br />
                AI enables automation of repetitive tasks, leading to increased
                efficiency and productivity in various industries. It can
                perform tasks faster and more accurately than humans, reducing
                the need for manual intervention.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Data Analysis
                </span>
                <br />
                AI algorithms can analyze large volumes of data quickly and
                extract valuable insights, enabling data-driven decision-making
                and predictive analytics in areas such as finance, healthcare,
                and marketing.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Personalization
                </span>
                <br />
                AI-powered systems can personalize user experiences by analyzing
                individual preferences and behavior, delivering tailored
                recommendations, content, and services to users.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  24/7 Availability
                </span>
                <br />
                AI systems can operate continuously without fatigue or breaks,
                providing round-the-clock support and services to users, such as
                chatbots and virtual assistants.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Problem Solving
                </span>
                <br />
                AI can tackle complex problems and challenges that are beyond
                the capabilities of human intelligence, such as medical
                diagnosis, weather prediction, and autonomous driving.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Innovation
                </span>
                <br />
                AI fosters innovation by enabling the development of new
                products, services, and solutions that improve quality of life,
                drive economic growth, and address societal challenges.
              </p>
            </div>

            <div className="font-bold text-[#4F7853] text-4xl mt-14  mb-3">
              Disadvantages
            </div>
            <div className="grid grid-cols-2 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full p-2">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Job Displacement
                </span>
                <br />
                AI automation may lead to job displacement and changes in the
                workforce, particularly in industries that rely heavily on
                manual labor or repetitive tasks. It raises concerns about
                unemployment and the need for retraining and reskilling workers.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Bias and Fairness
                </span>
                <br />
                AI algorithms can perpetuate biases present in training data,
                leading to unfair or discriminatory outcomes, particularly in
                areas such as hiring, lending, and criminal justice. Addressing
                bias and ensuring fairness in AI systems is a significant
                challenge.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Privacy Concerns
                </span>
                <br />
                AI systems often rely on vast amounts of personal data to
                function effectively, raising concerns about privacy, data
                security, and the potential for misuse or unauthorized access to
                sensitive information.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Ethical Dilemmas
                </span>
                <br />
                AI raises ethical dilemmas and questions about accountability,
                transparency, and decision-making responsibility, particularly
                in autonomous systems such as self-driving cars and military
                drones.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Dependency and Reliability
                </span>
                <br />
                Overreliance on AI systems can lead to dependency issues and
                vulnerabilities, particularly in critical infrastructure and
                systems where failures or malfunctions can have serious
                consequences.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Unintended Consequences
                </span>
                <br />
                AI systems may produce unintended consequences or unforeseen
                outcomes, particularly when operating in complex and dynamic
                environments where human judgment and context are crucial.
              </p>
            </div>
          </div>

          <div className="font-bold text-[#4F7853] text-4xl mt-20 mb-10 text-center">
            Microprocessors
          </div>

          <div className="grid grid-cols-1 max-[1330px]:grid-cols-1">
            <div className="grid grid-cols-1 md:grid-cols-[55%,40%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center mt-4 p-4">
              <p className="text-[#4F7853] text-xl tracking-wide text-justify pl-4 pr-4">
                The microprocessor is the central processing unit (CPU) of a
                computer or electronic device, responsible for performing
                essential functions such as data processing, instruction
                execution, control, addressing, arithmetic and logic operations,
                interrupt handling, and clock synchronization. It acts as the
                "brain" of the system, executing instructions, processing data,
                and coordinating the operation of the entire system to achieve
                desired functionality efficiently and effectively.
              </p>

              <div className="relative">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="w-full relative">
                  <Image
                    src="/midterm-img/cpu.jpeg"
                    width={700}
                    height={10}
                    alt=""
                    className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-[40%,55%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center p-4">
              <div className="relative">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="w-full relative">
                  <Image
                    src="/midterm-img/components.jpg"
                    width={900}
                    height={10}
                    alt=""
                    className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>

              <div className="text-[#4F7853] text-xl tracking-wide">
                <p className="font-bold text-[#4F7853] text-3xl text-center">
                  Microprocessor Components
                </p>
                <br />
                <p className="text-justify">
                  The microprocessor is the central processing unit (CPU) of a
                  computer or electronic device, responsible for performing
                  essential functions such as data processing, instruction
                  execution, control, addressing, arithmetic and logic
                  operations, interrupt handling, and clock synchronization. It
                  acts as the "brain" of the system, executing instructions,
                  processing data, and coordinating the operation of the entire
                  system to achieve desired functionality efficiently and
                  effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-4 shadow-xl">
            <p className="font-bold text-[#4F7853] text-3xl mb-3">
              Central Processing Unit (CPU)
            </p>
            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-4">
              <p>
                The CPU, or Central Processing Unit, is the primary component of
                a computer responsible for executing instructions, performing
                calculations, and controlling the overall operation of the
                system. It is often referred to as the "brain" of the computer.
                The CPU interprets and executes instructions fetched from the
                computer's memory, processes data, and coordinates input and
                output operations. It consists of various components, including
                arithmetic logic units (ALUs), control units, and registers, all
                integrated onto a single chip.
              </p>
              <li className="mt-2">
                <span className="font-bold">Arithmetic Logic Unit (ALU)</span>{" "}
                The ALU, or Arithmetic Logic Unit, is a fundamental component of
                a computer's central processing unit (CPU) responsible for
                performing arithmetic and logical operations on binary data. It
                is one of the key functional units within the CPU and is
                designed to execute operations such as addition, subtraction,
                multiplication, division, AND, OR, and NOT operations. The ALU
                consists of multiple logic gates and circuits that perform these
                operations on binary numbers represented in the form of
                electrical signals. It takes input from the CPU's registers or
                memory, processes the data according to the instructions
                provided by the CPU's control unit, and produces output results.
              </li>
              <li className="mt-2">
                <span className="font-bold">Control Unit (CU)</span> The Control
                Unit (CU) is a vital component of a computer's Central
                Processing Unit (CPU), serving as its "traffic controller." Its
                primary functions include fetching instructions from memory,
                decoding them to determine operations, coordinating instruction
                execution, managing data movement within the CPU and between
                memory and input/output devices, and generating control signals
                to synchronize CPU operations. Essentially, the CU ensures that
                instructions are executed correctly and efficiently,
                orchestrating the CPU's operation.
              </li>
            </ul>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3 max-[460px]:text-[20px]">
              Registers
            </div>
            <div className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8 max-[460px]:text-[18px]">
              Computer registers are small, high-speed storage locations within
              the CPU that hold temporary data, instructions, and memory
              addresses needed for program execution. They include the Program
              Counter (PC) for storing the next instruction address, Instruction
              Register (IR) for holding the current instruction, Memory Address
              Register (MAR) for storing memory addresses, Memory Data Register
              (MDR) for holding data read from or written to memory,
              General-Purpose Registers for temporary data storage, and Status
              Register for holding flags indicating the outcome of arithmetic
              and logical operations. Registers play a crucial role in
              facilitating efficient execution of programs by the CPU.
            </div>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-6 shadow-xl">
            <p className="font-bold text-[#4F7853] text-3xl mb-3">
              Main Memory
            </p>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              Main memory, also known as primary memory or RAM (Random Access
              Memory), is a vital component of a computer system that stores
              data and instructions actively used by the CPU. It is volatile,
              meaning data is lost when the computer is powered off, and
              random-access, allowing the CPU to access any memory location
              directly. Main memory serves as temporary storage for program
              instructions and data during active processing, facilitating quick
              access by the CPU. Its size and speed directly impact computer
              performance, with larger and faster memory leading to improved
              system responsiveness. Overall, main memory is essential for the
              smooth operation of a computer system.
            </p>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3">
              Clock
            </div>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-4">
              In a microprocessor, the clock signal is a regular electrical
              pulse that coordinates the timing of operations within the CPU and
              the entire system. It regulates the flow of data and instructions,
              ensuring that they are processed in the correct sequence and at
              the appropriate speed. The clock signal synchronizes the
              activities of different CPU components, such as instruction
              execution and data transfer, by dividing time into fixed intervals
              known as clock cycles. Overall, the clock signal plays a crucial
              role in maintaining the orderly operation of the microprocessor
              and facilitating efficient processing of instructions and data.
            </p>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-4 shadow-xl">
            <p className="font-bold text-[#4F7853] text-3xl mb-3">
              Input/Output Devices
            </p>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              Input/output (I/O) devices are peripherals connected to a computer
              system that facilitate the input and output of data. Input devices
              allow users to send data to the computer, such as keyboards and
              mice, while output devices provide users with processed data from
              the computer, such as monitors and printers. These devices serve
              as the interface between users and the computer system, enabling
              interaction and communication.
            </p>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3">
              Input/Output Interfaces
            </div>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              Input/output (I/O) interfaces serve as connectors between
              input/output devices and the computer system, enabling data
              exchange. Hardware interfaces include ports and connectors, while
              software interfaces consist of device drivers and APIs. These
              interfaces facilitate communication, manage data flow, and ensure
              compatibility between devices and the computer system. Overall,
              I/O interfaces play a crucial role in enabling the functionality
              of input/output devices and simplifying the interaction between
              software and hardware components.
            </p>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-4 shadow-xl">
            <p className="font-bold text-[#4F7853] text-3xl mb-3">
              Direct Memory Access
            </p>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              Direct Memory Access (DMA) is a feature in computer systems that
              enables peripherals to transfer data directly to or from the
              computer's memory without CPU involvement. It enhances system
              performance by reducing CPU overhead and enabling concurrent data
              transfers. DMA is used in various devices such as hard disk
              controllers, network interface cards, and graphics cards to
              facilitate efficient data transfer.
            </p>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3">
              Bus
            </div>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              Bus is a communication system that allows different components
              within the CPU and the computer system to exchange data and
              instructions. It consists of various types of buses, including the
              data bus, address bus, and control bus, each serving specific
              functions. The bus width determines the amount of data transferred
              simultaneously, while bus speed and bandwidth affect overall
              system performance. Bus arbitration mechanisms are used in
              multi-master systems to manage access to the bus.
            </p>
          </div>

          <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc mx-6 px-8">
            <li className="mt-5">
              <span className="font-bold">Data Bus</span> The Data Bus transfers
              data between a computer’s memory and its CPU, which operates as
              the device’s “engine”. It carries the data between the processor
              and other components. Bus controllers manage component information
              interchange speed and the data being carried on a data bus might
              be parallel or serial.
            </li>
            <li className="mt-5">
              <span className="font-bold">Address Bus</span> It carries memory
              addresses from the processor to other components such as primary
              storage and input/output devices. It identifies the address of the
              location in cache or main memory that is to be read from or
              written to.
            </li>
            <li className="mt-5">
              <span className="font-bold">Control Bus</span> the control bus
              carries control signals from the processor to other components. It
              manages the communication between the computer’s CPU and its other
              components. The signal ensures that the operations are carried out
              in the correct sequence and at the right time. The control bus
              also carries the clock’s pulses, and the Control bus is
              unidirectional.
            </li>
          </ul>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-4 shadow-xl">
            <div className="font-bold text-[#4F7853] text-4xl mb-10 text-center max-[460px]:text-[22px]">
              Registers
            </div>
            <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc ml-6 pr-8 max-[460px]:text-[18px]">
              In computer architecture, a processor register provides the
              fastest way for a CPU to access data. Modern computer
              architectures operate on the principle of moving data from the
              main memory into registers, and vice versa. A register is composed
              of multiple flip-flops, which are electronic circuits capable of
              storing a single bit of information, which is represented through
              binary data, either a 0 or a 1. By combining multiple flip-flops,
              registers can store larger binary values, such as bytes or words.
            </p>
            <br />
            <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc ml-6 pr-8 max-[460px]:text-[18px]">
              Registers also contain control logic circuitry, which allows it to
              coordinate the flow of data and instructions within the CPU. This
              can include operations such as decoding control signals,
              performing data manipulation like data loading, storing, or
              arithmetic operations, and using multiplexers to route data to a
              specific location within the register. Together, flip-flops and
              control logic work in partnership within registers. Flip-flops
              provide the storage capacity, while control logic facilitates the
              coordination of data transfer, manipulation, and synchronization
              with other components of the CPU. This enables registers to store
              and process data efficiently during the execution of instructions.
            </p>
          </div>

          <div className="font-bold text-[#4F7853] text-3xl mt-20 ml-5 mb-3">
            Sizes of CPU Registers
          </div>
          <p className="text-[#4F7853] text-xl mx-6 px-8">
            The number and size of registers in a CPU are determined by the
            processor design and can have a significant impact on its
            performance and capabilities. Most modern computer processers
            include:
          </p>

          <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[20px] w-[100%] h-full p-6 mt-8">
            <p className="text-[#4F7853] text-xl p-2">
              {" "}
              <span className="font-bold text-[#4F7853] text-2xl">
                8-bit registers
              </span>
              <br />
              These registers can store 8 bits of data (1 byte). They are often
              used for basic arithmetic operations and data manipulation.
            </p>
            <p className="text-[#4F7853] text-xl p-2">
              {" "}
              <span className="font-bold text-[#4F7853] text-2xl">
                16-bit registers
              </span>
              <br />
              These registers can store 16 bits of data (2 bytes). They are
              commonly found in older processors or in specific architectures
              that require 16-bit operations.
            </p>
            <p className="text-[#4F7853] text-xl p-2">
              {" "}
              <span className="font-bold text-[#4F7853] text-2xl">
                32-bit registers
              </span>
              <br />
              These registers can store 32 bits of data (4 bytes). They are
              widely used in many processors and are capable of handling larger
              data sizes and more complex calculations.
            </p>
            <p className="text-[#4F7853] text-xl p-2">
              {" "}
              <span className="font-bold text-[#4F7853] text-2xl">
                64-bit registers
              </span>
              <br />
              These registers can store 64 bits of data (8 bytes). They are
              prevalent in modern processors and offer increased computational
              power and memory addressing capabilities.
            </p>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-4 shadow-xl">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Kinds of Registers
            </div>
            <p className="text-[#4F7853] text-xl ml-6 pr-8">
              Registers assist in a particular transfer of data or an
              instruction to be processed. Depending on the CPUs architecture
              and design, the type and number of registers can vary. Common
              types of registers found in a CPU may include:
            </p>

            <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[40px] w-[100%] h-full mt-8 px-8">
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Program Counter (PC)
                </span>
                <br />
                The Program Counter keeps track of the memory address of the
                next instruction to be fetched and executed.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Instruction Register (IR)
                </span>
                <br />
                The Instruction Register holds the currently fetched instruction
                being executed.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Accumulator (ACC)
                </span>
                <br />
                The Accumulator is a general-purpose register used for
                arithmetic and logical operations. It stores intermediate
                results during calculations.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  General-Purpose Registers (R0, R1, R2...)
                </span>
                <br />
                These registers are used to store data during calculations and
                data manipulation. They can be accessed and utilized by the
                programmer for various purposes.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Address Registers (AR)
                </span>
                <br />
                Address Registers store memory addresses for data access or for
                transferring data between different memory locations.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Stack Pointer (SP)
                </span>
                <br />
                The Stack Pointer points to the top of the stack, which is a
                region of memory used for temporary storage during function
                calls and other operations.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Data Registers (DR)
                </span>
                <br />
                These registers store data fetched from memory or obtained from
                input/output operations.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Status Register/Flags Register (SR)
                </span>
                <br />
                The Status Register or Flags Register contains individual bits
                that indicate the outcome of operations, such as carry,
                overflow, zero result, and others. These flags help in making
                decisions and controlling program flow based on the results of
                previous operations.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                <span className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Control Registers (CR)
                </span>
                <br />
                Control Registers manage various control settings and parameters
                related to the CPU's operation, such as interrupt handling,
                memory management, and system configuration.
              </p>
            </div>
          </div>

          <div className="font-bold text-[#4F7853] text-4xl mt-20 mb-10 text-center">
            CPU Architecture
          </div>
          <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc mx-6 px-12">
            Generally, an architecture defines what an object looks like,
            behaves, processes, and responds. In the aspect of computers, it
            defines how a processor operates through hardware/software and how
            it is being handled by the user.
          </p>

          <div className="flex justify-center mt-20">
            <div className="relative w-[45%]">
              <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
              <div className="flex justify-center relative">
                <Image
                  src="/midterm-img/components.jpg"
                  width={4000}
                  height={100}
                  alt=""
                  className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-4 shadow-xl">
            <p className="font-bold text-[#4F7853] text-3xl mb-3">
              Von Neumann Architecture
            </p>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              The von Neumann architecture, named after the Hungarian-American
              mathematician and physicist John von Neumann, is a conceptual
              framework used in the design of computers. It describes a computer
              architecture where the program instructions and data share the
              same memory and bus system for communication. The key components
              of the von Neumann architecture include:
            </p>

            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8  ">
              <li className="mt-4">
                <span className="font-bold">
                  Central Processing Unit (CPU):{" "}
                </span>{" "}
                This is the core component responsible for executing
                instructions. It performs arithmetic and logical operations,
                controls the flow of data, and manages the execution of
                programs.
              </li>
              <li className="mt-4">
                <span className="font-bold">Memory: </span> In von Neumann
                architecture, both program instructions and data are stored in
                the same memory. This memory is accessed by the CPU to fetch
                instructions and data for processing.
              </li>
              <li className="mt-4">
                <span className="font-bold">Control Unit: </span> The control
                unit is responsible for fetching instructions from memory,
                decoding them, and executing them in the CPU.
              </li>
              <li className="mt-4">
                <span className="font-bold">Arithmetic Logic Unit (ALU): </span>{" "}
                The ALU performs arithmetic and logical operations on the data
                fetched from memory.
              </li>
              <li className="mt-4">
                <span className="font-bold">Input/Output (I/O) devices: </span>{" "}
                These devices facilitate the interaction between the computer
                and the external world. They include peripherals such as
                keyboards, mice, displays, printers, and network interfaces.
              </li>
            </ul>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 pr-8 mb-3">
              Harvard Architecture
            </div>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              Harvard architecture, which is another computer architecture
              design distinct from the von Neumann architecture. In the Harvard
              architecture, program instructions and data are stored in separate
              memory units, which allows for simultaneous access to instructions
              and data. This separation helps overcome some of the limitations
              of the von Neumann architecture, such as the bottleneck caused by
              having a single memory for both instructions and data.
            </p>

            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc mt-8 ml-6 pr-8">
              <li className="mt-2">
                <span className="font-bold">Instruction Memory: </span> This
                memory unit stores program instructions separately from data
                memory. The CPU fetches instructions from this memory for
                execution.
              </li>
              <li className="mt-2">
                <span className="font-bold">Data Memory: </span> Data used by
                the program is stored in a separate memory unit. The CPU
                accesses this memory for reading and writing data during program
                execution.
              </li>
              <li className="mt-2">
                <span className="font-bold">Control Unit: </span> Similar to von
                Neumann architecture, the control unit manages the execution of
                instructions fetched from the instruction memory.
              </li>
              <li className="mt-2">
                <span className="font-bold">Arithmetic Logic Unit (ALU): </span>{" "}
                The ALU performs arithmetic and logical operations on data
                fetched from the data memory.
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-4 shadow-xl">
            <div className="font-bold text-[#4F7853] text-4xl mb-10 text-center">
              Instruction Set Architecture
            </div>
            <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc ml-6 pr-8">
              It allows communication between the hardware component and the
              software component of a computer. It is a group of commands for a
              CPU in a machine language.
            </p>
            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc mt-6 ml-6 pr-8">
              <li className="mt-2">
                <span className="font-bold">Instruction Memory: </span> This
                memory unit stores program instructions separately from data
                memory. The CPU fetches instructions from this memory for
                execution.
              </li>
              <li className="mt-2">
                <span className="font-bold">Data Memory: </span> Data used by
                the program is stored in a separate memory unit. The CPU
                accesses this memory for reading and writing data during program
                execution.
              </li>
            </ul>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-16 mb-3">
              Two (2) Types of ISA
            </div>
            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              <li className="mt-2">
                <span className="font-bold">
                  Complex Instruction Set Computer{" "}
                </span>{" "}
                It is a computer where single instructions can execute several
                low-level operations (such as a load from memory, an arithmetic
                operation, and a memory store) or can do multi-step operations
                or address modes within single instructions. Example: x86-x64
                processors (Intel).
              </li>
              <li className="mt-2">
                <span className="font-bold">
                  Reduced Instruction Set Computer{" "}
                </span>{" "}
                It is a computer which only uses simple instructions that can be
                divided into multiple instructions and perform low-level
                operations within a single clock cycle. Example: ARM (iPhone)
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-10">
            <div className="relative w-[800px]">
              <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
              <div className="flex justify-center relative">
                <Image
                  src="/midterm-img/risccisc.jpg"
                  width={1200}
                  height={100}
                  alt=""
                  className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3 p-6">
            Microprosessor Operations
          </div>
          <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
            <li className="mt-2">
              <span className="font-bold">Fetch </span> – It is designed to
              fetch several instructions at a time in parallel
            </li>
            <li className="mt-2">
              <span className="font-bold">Decode </span> – It identifies the
              opcode in which it determines the type of instruction.
            </li>
            <li className="mt-2">
              <span className="font-bold">Execute </span> – It executes the
              part/s for each different instruction.
            </li>
          </ul>

          <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-[55%,40%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center mt-4 p-4">
              <div className="flex flex-col items-start justify-start">
                <div className="font-bold text-[#4F7853] text-3xl text-center mb-4 w-full">
                  Parallel Processing
                </div>
                <p className="text-[#4F7853] text-xl tracking-wide text-justify">
                  It is a method of simultaneously breaking up and running
                  program tasks on multiple microprocessors, thereby reducing
                  processing time. It can be accomplished via a computer with
                  two (2) or more processors or via a computer network. It
                  induces problems resulting in not being synchronized.
                </p>
              </div>

              <div className="relative">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="w-full relative">
                  <Image
                    src="/midterm-img/parallel.jpg"
                    width={700}
                    height={10}
                    alt=""
                    className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-[40%,55%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center p-4">
              <div className="relative">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="w-full relative">
                  <Image
                    src="/midterm-img/pipelining.jpg"
                    width={900}
                    height={10}
                    alt=""
                    className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>

              <div className="text-[#4F7853] text-xl tracking-wide">
                <div className="font-bold text-[#4F7853] text-3xl text-center">
                  Pipelining
                </div>
                <br />
                <p className="text-justify">
                  It is the process of accumulating and executing computer
                  instructions and tasks from the processor via a logical
                  pipeline. It allows storing, prioritizing, managing, and
                  executing tasks and instructions in an orderly process.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex mt-8">
            <Link
              href={"/courses/midterm/lesson2"}
              className="bg-[#4F7853] p-2 text-[white] font-bold rounded-md w-[200px] text-center ml-auto"
            >
              Next Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
