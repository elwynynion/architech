import React from "react";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";

function page() {
  return (
    <main className="bg-white h-lvh">
      <div className="container">
        <Navigation name="prelim 1" />
        <div className="border-2 border-[#4f7853] rounded-xl p-3">
          <h1 className="flex font-bold text-[#4f7853] text-lg">
            Prelim
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3.0"
              stroke="currentColor"
              className="size-6 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Lesson 1
          </h1>

          <h2 className="textflex font-black text-center text-[#4f7853] text-4xl lg:text-6xl border-b-2 border-[#4f7853] mb-6">
            Architecture Basics
          </h2>
          <div className="p-5">
            <div className="grid lg:grid-cols-2 gap-6 mb-14">
              <div className="">
                <h1 className="text-4xl font-bold text-[#4f7853] text-center">
                  Computer System
                </h1>
                <p className="text-lg flex text-justify text-[#4f7853] mt-6">
                  A computer is an electronic device that can compute the
                  desired information through entering information. It can be
                  used to accomplish a variety of tasks such as basic
                  calculations to complex operations. A system, on the other
                  hand, can be defined as many elements working as one. It is a
                  working procedure or method to which a process is formed.
                </p>
                <p className="text-lg flex text-justify text-[#4f7853] mt-6">
                  A computer system, therefore, is a system that comprises
                  elements that process raw data and instruction.
                </p>
              </div>
              <div className="p-5 rounded-xl shadow-xl mb-5">
                <Image
                  className="rounded-xl lg:h-full object-cover"
                  src={"/prelim-image/computer system.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mb-20">
              <div className="p-5 rounded-xl shadow-xl mb-5">
                <Image
                  className="rounded-xl lg:h-full object-cover"
                  src={"/prelim-image/data.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
              <div className="">
                <h1 className="text-4xl font-bold text-[#4f7853] text-center mb-10">
                  Elements of a Computer System
                </h1>
                <h2 className="text-2xl font-bold text-[#4f7853] text-right mr-6 ">
                  Data
                </h2>
                <p className="text-lg flex text-justify text-[#4f7853] mt-6">
                  It is the fundamental representation of facts and
                  observations. It is processed by a computer system to provide
                  information, which is the very reason for the computer’s
                  existence. It can also take on a number of different forms:
                  numbers, text, images, and sounds. However, it’s all numbers
                  on the computer. Data serves as the foundation of the digital
                  world that we have built. All data is translated to binary
                  which is the fundamental language of computers.
                </p>
                <h2 className="text-2xl font-bold text-[#4f7853] text-right mr-6 mt-6">
                  Software
                </h2>
                <p className="text-lg flex text-justify text-[#4f7853] mt-6">
                  It consists of system and application programs that define the
                  instructions executed by the hardware. It has an application
                  programming interface (API) that acts as an interface for
                  application programs and utilities to access the internal
                  services provided by the operating system. It also has a
                  kernel that contains the most important operating system
                  processing functions.
                </p>
              </div>
            </div>

            <h3 className="textflex font-black text-center text-[#4f7853] text-4xl lg:text-3xl border-b-2 border-[#4f7853]">
              Examples of Software
            </h3>
            <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60"
                    src={"/prelim-image/system software.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  System software
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/application software.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Application software
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/hardware.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Hardware
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/microprocessor.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Microprocessor
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/primary storage.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Primary Storage
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/secondary storage.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Secondary Storage
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/hdd.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  HDD (Hard Disk Drive)
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/flash drive.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Flash Drive
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/sdd.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  SSD (Solid State Drive)
                </h4>
              </div>
            </div>

            <h3 className="textflex font-black text-center text-[#4f7853] text-4xl lg:text-3xl border-b-2 border-[#4f7853] mt-20">
              Input Devices
            </h3>
            <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/keyboard.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Keyboard
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/mouse.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Mouse
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/microphone.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Microphone
                </h4>
              </div>
            </div>

            <h3 className="textflex font-black text-center text-[#4f7853] text-4xl lg:text-3xl border-b-2 border-[#4f7853] mt-20">
              Output Devices
            </h3>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 h-40"
                    src={"/prelim-image/monitor.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Monitor
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 h-40"
                    src={"/prelim-image/printer.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Printer
                </h4>
              </div>
              <div>
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 h-40"
                    src={"/prelim-image/speaker.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Speaker
                </h4>
              </div>
              <div className="md:col-start-2 md:col-span-1 col-span-1">
                <div className="rounded-xl shadow-xl mb-5">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 h-40"
                    src={"/prelim-image/communication.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Communication
                </h4>
              </div>
            </div>

            <h2 className="textflex font-black lg:text-center md:text-center text-center text-[#4f7853] text-4xl lg:text-6xl  mt-20">
              Architecture
            </h2>
            <div className="">
              <p className="text-base sm:text-lg flex text-justify sm:text-justify text-[#4f7853] mt-6">
                Architecture in computer systems is the design of computer
                components in hardware being used, in the flow of data
                input-process-storage-output within the system, in algorithms
                being implemented, and more. The design can be distinguished
                into two (2): by form and by function.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 mb-14 mt-14">
              <div className="border-4 border-white rounded-xl shadow-xl p-5">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center">
                  Design by Form: Classification of Computers
                </h1>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Design by form refers to the structure and size of a system.
                  From the structure of the system, computer systems can be
                  classified by form to distinguish form factor. It refers to
                  the principle of designing a system based on the standard
                  dimensions and layout of components within the system, while
                  also allowing for compatibility and flexibility of different
                  computer parts.
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-12 sm:text-center text-center">
                  Microcomputers
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-9">
                  Are usually small, low cost, and intended for one (1) user or
                  one (1) device. They typically consist of a microprocessor,
                  memory, input/output ports, and storage devices. These are
                  used for a large variety of applications, from network access
                  to business, educational, and entertainment applications and
                  even games. (e.g., PC, PDA, gadgets, and console)
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-right mt-12 sm:text-center text-center">
                  Minicomputers
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-9">
                  Are generally used in a multiuser environment. These servers
                  act as a platform for a specific application, such as a print
                  server that manages all printers and handles all print tasks
                  or a mail server that manages all the organization’s mail.
                  (e.g., single rack server [print, Web, file])
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-12 sm:text-center text-center">
                  Mainframes
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-9">
                  Are large organizational computer systems that act as the main
                  computational infrastructure. These are usually very powerful
                  and support many concurrent users. These systems host an
                  organization’s databases and provide applications to support
                  all business processes. (e.g., server farms [data centers])
                </p>
              </div>

              <div className="border-2 border-white shadow-xl rounded-xl p-3">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center">
                  Design by Function: Computer Operations
                </h1>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Design by function pertains to the specific instruction or
                  process that a computer system must have to meet criteria and
                  application. It refers to the principle of selecting
                  components and software based on the tasks and functions that
                  are needed for the computer to perform. These are the simplest
                  functions of a computer:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                  <div className=" p-2">
                    <h2 className="text-lg md:text-2xl font-bold text-[#5C715E] text-left mt-2">
                      Input/Output
                    </h2>
                    <p className="text-base md:text-lg text-left text-[#4f7853] mt-3 md:mt-11 mb-5">
                      Pertains to the placing of data in or out of the computer
                      system.
                    </p>
                  </div>
                  <div className=" p-2">
                    <h2 className="text-lg md:text-2xl font-bold text-[#5C715E] text-left mt-2">
                      Basic arithmetic and logical calculations
                    </h2>
                    <p className="text-base md:text-lg text-left text-[#4f7853] mt-3 mb-5">
                      Pertains to mathematical calculations and comparison.
                    </p>
                  </div>
                  <div className=" p-2">
                    <h2 className="text-lg md:text-2xl font-bold text-[#5C715E] text-left mt-2">
                      Data transformation or translation
                    </h2>
                    <p className="text-base md:text-lg text-left text-[#4f7853] mt-3 mb-5">
                      Pertains to the data that changes from one form to another
                      due to instruction or need.
                    </p>
                  </div>
                  <div className=" p-2">
                    <h2 className="text-lg md:text-2xl font-bold text-[#5C715E] text-left mt-2">
                      Data sorting
                    </h2>
                    <p className="text-base md:text-lg text-left text-[#4f7853] mt-3 md:mt-11 mb-5">
                      Pertains to arrangement of data by a list or specific
                      criterion or criteria.
                    </p>
                  </div>
                  <div className=" p-2">
                    <h2 className="text-lg md:text-2xl font-bold text-[#5C715E] text-left mt-2">
                      Searching for data matches
                    </h2>
                    <p className="text-base md:text-lg text-left text-[#4f7853] mt-3 mb-5">
                      Pertains to the comparison of data to sufficient
                      conditions
                    </p>
                  </div>
                  <div className=" p-2">
                    <h2 className="text-lg md:text-2xl font-bold text-[#5C715E] text-left mt-2">
                      Data storage and retrieval
                    </h2>
                    <p className="text-base md:text-lg text-left text-[#4f7853] mt-3 mb-5">
                      Pertains to getting and/or placing data in a non-volatile
                      storage.
                    </p>
                  </div>
                  <div className=" p-2 col-span-1 md:col-span-2">
                    <h2 className="text-lg md:text-2xl font-bold text-[#5C715E] text-left mt-2">
                      Data movement
                    </h2>
                    <p className="text-base md:text-lg text-left text-[#4f7853] mt-3 mb-5">
                      Pertains to the placement of data from one memory location
                      to the other.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-white shadow-xl rouned-xl p-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5C715E] text-left">
                Design by Function: Moore’s Law
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3 md:mt-5 mb-3 sm:mb-4 md:mb-5">
                In addition to function, Moore’s Law can be included as a design
                by function due to the rapid influx of technology in today’s
                standards. From the semiconductor industry perspective, this law
                represents designing for rapid change of hardware. Thus, new
                architecture and emerging technology arise and are much better
                than the first one. It also states that integrated circuit
                resources double every 18–24 months. This law relies on
                “Transistor count” as a basis for the advancement of integrated
                circuits.
              </p>
              <div className=" sm:p-5 md:p-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5C715E] text-left mt-1 sm:mt-2">
                  Architecture Complexity
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  As technology arises, computers become more advanced to the
                  point of designing complex computer systems for a specific
                  purpose. Thus, this results in the complexity of computer
                  design. Through the complexity of computer architecture, the
                  design and understanding of computer systems become harder.
                </p>
              </div>
            </div>

            <div className=" p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="grid gap-6 mt-6 sm:mt-8 md:mt-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5C715E] text-center mt-1 sm:mt-2">
                  Solutions to Architecture Complexity
                </h1>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5">
                  <div className="border-2 border-white shadow-xl rounded-xl p-5">
                    <h1 className="text-lg sm:text-xl font-bold text-[#5C715E] text-center mt-1 sm:mt-2">
                      Abstraction
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                      It is used to characterize a certain object at different
                      levels of representation offering models. Basically, it is
                      an ideal model put into a representation. Abstractions can
                      help us, as software creators, explain complexities in
                      simpler ways, getting the message across to many audiences
                      and allowing us to move faster from cohesive
                      understanding.
                    </p>
                  </div>
                  <div className="border-2 border-white shadow-xl rounded-xl p-5">
                    <h1 className="text-lg sm:text-xl font-bold text-[#5C715E] text-center mt-1 sm:mt-2">
                      Computer Hierarchy
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                      It is a structure that has a predetermined ordering from
                      high to low. It refers to systems that are organized in
                      the shape of a pyramid, with each row of objects linked to
                      objects directly beneath it.
                    </p>
                  </div>
                </div>

                <div className="border-2 border-white shadow-xl rounded-xl p-2 mt-4 sm:mt-5">
                  <h1 className="text-lg sm:text-xl font-bold text-[#5C715E] text-center mt-1 sm:mt-2">
                    Decomposition
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-center text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                    It is a process of splitting the system in smaller chunks;
                    people can work better by working on smaller separate tasks.
                    Once the system is decomposed, it does the following:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 mb-3 sm:mb-4 md:mb-5 p-2">
                    <div className=" p-2 mt-4">
                      <p className="text-sm sm:text-base md:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                        Work on each chunk in different times (prioritizing
                        important chunks)
                      </p>
                    </div>
                    <div className=" p-2 mt-4">
                      <p className="text-sm sm:text-base md:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                        Give each chunk to a different person/team (work can be
                        done in parallel).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mt-10 border-white rounded-xl shadow-xl">
                  <div className=" p-2 mt-4 col-span-1 lg:col-span-2">
                    <h1 className="lg:text-2xl sm:text-xl font-bold text-[#5C715E] text-center mt-1 sm:mt-2">
                      Five Levels of Memory Hierarchy
                    </h1>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 mt-2">
                      <Image
                        className="h-full w-full"
                        src={"/prelim-image/memory heirarchy.png"}
                        width={200}
                        height={200}
                        alt="Computer System"
                      />
                      <div className="lg:pt-20 md:pt-10 sm:pt-5">
                        <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                          <strong>Level 0:</strong> CPU registers
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                          <strong>Level 1:</strong> Cache memory
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                          <strong>Level 2:</strong> Primary memory or main
                          memory
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                          <strong>Level 3:</strong> Secondary memory or magnetic
                          disks or solid-state storage
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                          <strong>Level 4:</strong> Tertiary memory or optical
                          disks or magnetic tapes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="lg:text-2xl sm:text-xl font-bold text-[#5C715E] text-center mt-16">
                  Characteristics of Memory Hierarchy
                </h1>

                <div className=" p-5 mt-2 grid lg:grid-cols-2 gap-5 border-white shadow-xl rounded-xl">
                  <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                    <strong>Capacity</strong> the volume of information that a
                    memory device can store. As we move down the memory pyramid,
                    the capacity or memory size increases.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                    <strong>Access time</strong> Access time is the time
                    interval from when a read/write request is made and when the
                    data actually becomes available. It increases as we move
                    from the top to the bottom of the memory hierarchy
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                    <strong>Performance</strong> Without a memory hierarchy,
                    there is a speed gap between CPU registers and the main
                    memory. This increases access time and directly impacts the
                    system's performance.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                    <strong>Cost per bit:</strong> The cost per bit is
                    calculated by dividing the total cost of the memory by the
                    total number of accessed bits. As we move from the top of
                    the memory hierarchy to the bottom, the cost per bit
                    decreases. This is because internal memory is costlier than
                    external memory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
