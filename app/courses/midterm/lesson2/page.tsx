import React from "react";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";

function page() {
  return (
    <div className="bg-[#FFFEFA] h-[100vh]">
      <div className="container px-5">
        <Navigation name="courses" />
        <div className="border-4 border-[#4F7853] rounded-[35px] p-10">
          <h1 className="text-3xl font-bold text-[#4F7853] mb-4">
            Midterm Lesson 2
          </h1>

          <div className="font-bold text-[#4F7853] text-6xl mb-4 text-center">
            Memory
          </div>

          <div className="border-[1px] border-[#4F7853] mb-5"></div>

          <div className="font-bold text-[#4F7853] text-4xl mt-12 ml-4 mb-3">
            Computer Memory
          </div>

          <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc mx-4 p-4">
            It is used to store data/information and instructions. It is a data
            storage unit or a data storage device where data is to be processed
            and instructions required for processing are stored. It can store
            both the input and output can be stored here. The efficient
            management and accessibility of memory are crucial for the rapid
            processing and retrieval of data, underpinning the performance and
            functionality of the computer system.
          </p>

          <div className="bg-[#FAF6F9] mt-10 mb-[10px] rounded-[20px] p-8 shadow-xl">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Types of Computer Memory
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

            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              <li className="mt-5">
                <span className="font-bold">Primary Memory</span> It is also
                known as the main memory of the computer system. It is used to
                storedata and programs or instructions during computer
                operations. It uses semiconductor technology and hence is
                commonly called semiconductor memory.
                <br />
                Example: (Semiconductors – RAM & ROM)
              </li>
              <li className="mt-5">
                <span className="font-bold">Secondary Memory</span> It is also
                known as auxiliary memory and backup memory. It is a
                non-volatile memory and used to store a large amount of data or
                information. The data or information stored in secondary memory
                is permanent, and it is slower than primary memory.
                <br />
                Example: (HDD, SSD, Flash, Tape, Disk & Optical Drives, etc.)
              </li>
              <li className="mt-5">
                <span className="font-bold">Cache Memory</span> It is a type of
                high-speed semiconductor memory that can help the CPU run
                faster.Between the CPU and the main memory, it serves as a
                buffer. It is used to store the data and programs that the CPU
                uses the most frequently.
                <br />
                Example: (L1, L2, and L3 Cache)
              </li>
            </ul>
          </div>

          <div className="font-bold text-[#4F7853] text-4xl mt-20 ml-4 mb-3 text-center">
            Semiconductor Technologies
          </div>

          <div className="flex justify-center mt-10">
            <div className="relative w-[70%]">
              <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
              <div className="flex justify-center relative">
                <Image
                  src="/midterm-img/volatile.jpg"
                  width={3000}
                  height={100}
                  alt=""
                  className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="font-bold text-[#4F7853] text-3xl mt-20 ml-5 mb-3">
            Types of Semiconductor memory
          </div>
          <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-x-[50px] gap-y-[20px] w-[100%] h-full p-2 mt-4 px-6">
            <p className="text-[#4F7853] text-xl p-2">
              {" "}
              <span className="font-bold text-[#4F7853] text-2xl">
                Volatile memory
              </span>
              <br />
              is a type of computer memory that needs power to keep the data
              stored in it. When the power is turned off, all the data in
              volatile memory is lost. This kind of memory is mainly used for
              temporary storage while a computer is running. Example: (RAM and
              Cache Memory).
            </p>
            <p className="text-[#4F7853] text-xl p-2">
              {" "}
              <span className="font-bold text-[#4F7853] text-2xl">
                Non-Volatile memory
              </span>
              <br />
              is a type of computer memory that retains stored data even when
              the power is turned off. Unlike volatile memory, which loses its
              contents when power is no longer supplied, non-volatile memory
              preserves information permanently until it is intentionally erased
              or overwritten. Example: (ROM, Flash Memory, Magnetic Storage).
            </p>
          </div>

          <div className="bg-[#FAF6F9] mt-20 mb-[10px] rounded-[20px] p-8 shadow-xl">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Random Access Memory Card (RAM)
            </div>
            <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              This is a volatile type of memory. It is called “random access”
              because any storage location can be accessed directly.
            </p>

            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 pr-8">
              <li className="mt-5 ml-7">
                The data bus allows the passage of data in or out the RAM.
              </li>
              <li className="mt-5 ml-7">
                The address bus is used to select a memory location.
              </li>
              <li className="mt-5 ml-7">
                The read signal activates when reading data from RAM.
              </li>
              <li className="mt-5 ml-7">
                The write line activates when writing to the RAM.
              </li>
              <li className="mt-5 ml-7">
                RAM Operations: Read, Write, and Chip Select.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-[40px] mx-4 mt-20">
            <div className="flex justify-center mt-10">
              <div className="relative w-[70%]">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="flex justify-center relative">
                  <Image
                    src="/midterm-img/ramconnectivity.jpg"
                    width={3000}
                    height={100}
                    alt=""
                    className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <div className="relative w-[70%]">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="flex justify-center relative">
                  <Image
                    src="/midterm-img/ramoperation.jpg"
                    width={3000}
                    height={100}
                    alt=""
                    className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="font-bold text-[#4F7853] text-3xl mt-[100px] mb-10">
            Random Access Memory Card (RAM)
          </div>

          <div className="grid grid-cols-1 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[30px]">
            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/staticram.jpg"
                    width={9999}
                    height={9999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full px-8">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Static RAM
                </p>
                <p className="text-[#4F7853] text-xl text-justify">
                  is computer main memory in which specific contents can be
                  accessed (read or written) directly by the central processing
                  unit (CPU) in a very short time regardless of the sequence
                  (and hence location) in which they were recorded. SRAM
                  consists of flip-flops, bistable circuits composed of four to
                  six transistors. Once a flip-flop stores a bit, it keeps that
                  value until the opposite value is stored in it. SRAM is used
                  primarily for small amounts of memory called registers in a
                  computer’s CPU and for fast “cache” memory.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/dynamicram.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full px-8">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Dynamic RAM
                </p>
                <p className="text-[#4F7853] text-xl text-justify">
                  is a type of random-access memory used in computing devices
                  (primarily PCs). DRAM stores each bit of data in a separate
                  passive electronic component that is inside an integrated
                  circuit board. Each electrical component has two states of
                  value in one bit called 0 and 1. This captivator needs to be
                  refreshed often otherwise information fades. DRAM has one
                  capacitor and one transistor per bit as opposed to static
                  random access memory (SRAM) that requires 6 transistors. The
                  capacitors and transistors that are used are exceptionally
                  small. There are millions of capacitors and transistors that
                  fit on one single memory chip.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/fpmram.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full px-8">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Fast Page Modem RAM (FPMRAM)
                </p>
                <p className="text-[#4F7853] text-xl text-justify">
                  Improved memory access speeds by allowing multiple consecutive
                  accesses without re- specifying the memory address for each
                  access. This technique, known as page mode, increased
                  efficiency & reduced access latency.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/edoram.jpg"
                    width={9999}
                    height={999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="w-[60%] p-4 max-[700px]:w-full px-8">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Extended Data Output RAM (EDORAM)
                </p>
                <p className="text-[#4F7853] text-xl text-justify">
                  is an early type of dynamic random access memory (DRAM) chip
                  which was designed to improve the performance of fast page
                  mode DRAM (FPM DRAM) that was used in the 1990s. Its main
                  feature was that it eliminated wait times by allowing a new
                  cycle to start while retaining the data output buffer from the
                  previous cycle active, which allows a degree of pipelining
                  (overlap in operation) that improved performance.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/sdram.jpg"
                    width={9999}
                    height={9999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full px-8">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Synchronous Dynamic RAM (SDRAM)
                </p>
                <p className="text-[#4F7853] text-xl text-justify">
                  It synchronizes data transfers with the computer’s clock
                  speed, resulting in faster and more efficient performance.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/rdram.jpg"
                    width={9999}
                    height={9999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full px-8">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Rambus Dynamic RAM (RDRAM)
                </p>
                <p className="text-[#4F7853] text-xl text-justify">
                  is a type of memory technology that Rambus Inc developed. It
                  was designed to provide faster data transfer rates than
                  traditional memory technologies of its time.
                </p>
              </div>
            </div>

            <div className="border-[0px] rounded-[20px] bg-[#DDEEDF] w-full mb-5 flex max-[700px]:flex-col shadow-xl">
              <div className="border-[0px] w-[40%] max-[700px]:w-full">
                <div className="h-full">
                  <Image
                    src="/midterm-img/ddrsdram.jpg"
                    width={9999}
                    height={9999}
                    alt=""
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="w-[60%] p-4 max-[700px]:w-full px-8">
                <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">
                  Double Data Rate Synchronous Dynamic RAM (DDR SDRAM)
                </p>
                <p className="text-[#4F7853] text-xl text-justify">
                  is a type of memory technology used in computers and other
                  electronic devices to increase performance. DDR, a.k.a DDR
                  SDRAM (Synchronous Dynamic Random Access Memory), stands for
                  Synchronous Dynamic Random Access Memory, which means that the
                  memory is synchronized with the system clock and can access
                  any memory location in a random order. Technological
                  advancements and innovations demand more extensive and faster
                  memories to write, store, and retrieve large amounts of data.
                  DDR has evolved over the years to meet the insatiable demands
                  for performance and speed. It has significantly increased
                  storage density and speed and reduced cost.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-20 mb-[10px] rounded-[20px] p-8 shadow-xl">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Types of RAM Packaging
            </div>

            <ul className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-6 pr-8">
              <li className="mt-5 ml-7">
                Single In-line Memory Module (SIMM) is a small circuit board
                where one (1) side of the board holds several chips.
              </li>
              <li className="mt-5 ml-7">
                Dual In-line Memory Module (DIMM) is a circuit board, in which
                both sides of the board hold several memory chips but has a
                64-bit data bus.
              </li>
              <li className="mt-5 ml-14">
                SO-DIMMM (Small Outline) – It is a small version of DIMM used
                commonly in notebook computers.
              </li>
              <li className="mt-5 ml-14">
                Micro-DIMM – It is a competing memory used on laptops and mostly
                supports 144 and 172pins.
              </li>
              <li className="mt-5 ml-7">
                Rambus In-line Memory Module (RIMM) is similar to a DIMM package
                but uses different pin settings in which it contains 184 or 232
                pins.
              </li>
            </ul>
          </div>

          <div className="font-bold text-[#4F7853] text-4xl mt-[150px] mb-3 text-center">
            Read Only Memory
          </div>
          <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc mt-6 px-8">
            From the term, information can be “read” only from this type of
            memory. It holds information permanently even while there is no
            power to the ROM. It is a nonvolatile type of memory
          </p>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3">
              Types of ROM
            </div>

            <ul className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-3 pr-8">
              <li className="mt-5 ml-4">
                <strong>Programmable ROM (PROM) </strong>
                is a memory chip that allows data to be written just once. The
                PROM is a sensitive material that is easily destroyed, leaving
                it unusable if the information is stored incorrectly.
                Programming ROM, also known as burning ROM, uses a specialized
                equipment known as a ROM burner or ROM programmer.
              </li>
              <li className="mt-5 ml-4">
                <strong>Erasable PROMs (EPROMs) </strong>
                can be erased with ultraviolet light and reprogrammed using an
                EPROM programmer.
              </li>
              <li className="mt-5 ml-14">
                <strong>Ultraviolet Erasable PROM (UV-EPROM) </strong>A popular
                form of EPROM. To erase the contents of a UV-EPROM, it needs to
                be exposed to UV rays for 5-20 minutes through a window on the
                chip. However, the problem with UV-EPROM is that it cannot be
                deleted or written when on the system board. EEPROM was designed
                to address this issue.
              </li>
              <li className="mt-5 ml-4">
                <strong>Electrically EPROM (EEPROM) </strong>
                can be erased by applying specific voltage to one of its pins
                and can be reprogrammed with an EPROM programmer. EEPROM has
                various advantages over EPROM, including the fact that it erases
                electrically and hence instantly, as opposed to UV-EPROM's
                20-minute erasing period. Furthermore, unlike UV-EPROM, which
                erases the full contents of the ROM, EEPROM allows the user to
                decide which byte to erase. Example: NAND Flash Memory and BIOS
              </li>
              <li className="mt-5 ml-14">
                <strong>Flash Memory </strong>
                Flash ROM was originally designed to allow changes to the
                contents of PROM after it has been burned. It is a nonvolatile
                memory that has a wide range of applications such as flash
                drive, solid-state drive, memory card, and embedded system. It
                is a type of EEPROM that allows multiple memory location to be
                written or erased on one (1) operation. The main difference
                between EEPROM and Flash memory is that when the contents of
                Flash memory are erased, the entire device is deleted, as
                opposed to EEPROM, which allows one to erase only a specified
                byte. There are two (2) types of technology used for flash
                memory: NAND and NOR flash memories. NAND flash memory has less
                access time than NOR flash memory. Most flash memories use NAND
                technology.
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-10">
            <div className="relative w-[70%]">
              <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
              <div className="flex justify-center relative">
                <Image
                  src="/midterm-img/1.png"
                  width={3000}
                  height={100}
                  alt=""
                  className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div className="relative w-[70%]">
              <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
              <div className="flex justify-center relative">
                <Image
                  src="/midterm-img/image2.png"
                  width={3000}
                  height={100}
                  alt=""
                  className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-8 mb-3">
              What is Bottlenecking?
            </div>

            <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[20px] w-[100%] h-full p-2 mt-8">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Insufficient Memory
                </span>
                <br />
                If your RAM (Random Access Memory) is too small, it can slow
                down overall performance.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Slow Hard Drive
                </span>
                <br />A slow storage drive (HDD) can bottleneck data transfer
                speeds.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Weak Processor (CPU)
                </span>
                <br />
                If your CPU can’t keep up with demanding tasks, it becomes a
                bottleneck.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Weak Graphics Card (GPU)
                </span>
                <br />
                An underpowered GPU can limit graphical performance, especially
                in gaming.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-20 mb-[10px] rounded-[20px] p-8 shadow-xl">
            <p className="font-bold text-[#4F7853] text-3xl  mb-3">
              Memory Partitioning
            </p>
            <ul className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5">
              <p>
                A partition is a defined area in memory that stores a program to
                be executed. The partition size defines the processes that could
                be executed in the specific partition. The number of partitions
                defined determines the number of processes that could run
                concurrently.
              </p>
              <li className="mt-2">
                <span className="font-bold ">Fixed Partitioning</span> Divides
                the main memory into many static partitions during system
                construction. A process can be loaded into a partition of the
                same or larger size. Compared to different memory allocation
                algorithms, fixed partitioning boasts several advantages. For
                starters, using it is simple and straightforward. Second, it is
                predictable, allowing the operating system to allocate the
                optimal amount of RAM to each task. Third, it improves system
                security and stability by preventing processes from accessing
                each other's memory area.
              </li>
              <li className="mt-2">
                <span className="font-bold">Dynamic Partitioning</span> The
                partitions vary in length and number. When a process is brought
                into main memory, it is assigned only the amount of memory it
                needed. Dynamic Partitioning allocates space in main memory
                strictly based on the needs of the process, hence there is no
                internal fragmentation. There will be no unused space remaining
                in the division. More processes can be accommodated due to the
                lack of internal fragmentation, each process can be loaded until
                the memory is depleted. The process size cannot be controlled
                because the partition size is determined by the process size. -
                Possible outcomes: Small gaps in memory and external
                fragmentation
              </li>
            </ul>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3">
              Virtual Memory
            </div>
            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5">
              Virtual memory transformed computer systems by solving the
              limitation of physical memory via secondary memory utilization. It
              is used to store application data and instructions not currently
              being processed by the CPU. Virtual memory remains critical for
              multitasking and performance enhancement. This feat is
              accomplished by transferring data between RAM and disk storage,
              essentially treating primary and secondary memory as one. It also
              enables a system to run applications larger than the main memory.
              However, operating at slower speeds than RAM can cause system
              slowdowns, known as 'thrashing.' Despite its shortcomings, virtual
              memory remains an important component for executing
              resource-intensive programs and providing multitasking
              capabilities.
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-20 mb-[10px] rounded-[20px] p-8 shadow-xl">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Caching
            </div>
            <p className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5">
              Caching is a concept in system architecture that involves keeping
              frequently requested data in a location that is conveniently
              accessible. The idea behind this is to reduce access times and
              increase system efficiency and performance. The name was used to
              symbolize the memory hierarchy level that exists between the main
              memory and the CPU. Any storage able to benefit from locality of
              reference is also called "caching." Its characteristics include
              increased capacity, decreased latency, and cache availability.
              Caching thus becomes a vital component in maximizing system
              responsiveness and functionality.
            </p>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3">
              Types of Cache Memory
            </div>

            <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[20px] w-[100%] h-full p-2 mt-8">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  L1 Cache (Primary Cache)
                </span>
                <br />
                This cache level is as fast as the processor because it is
                embedded in the processor.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  L2 Cache (External Cache)
                </span>
                <br />
                This cache level is used to catch recent data access from the
                processor not caught by Level 1.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  L3 Cache (Shared Cache)
                </span>
                <br />
                This cache catches the recent data all across CPU cores; this is
                usually slower than L1 and L2.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mt-20 mb-[10px] rounded-[20px] p-8 shadow-xl">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Locality of Reference
            </div>

            <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-x-[50px] gap-y-[20px] w-[100%] h-full p-2 mt-8">
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Temporal Locality
                </span>
                <br />A resource that is referenced at one (1) point in time is
                referenced again soon after.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Spatial Locality
                </span>
                <br />
                The likelihood of referencing a storage location is greater if a
                storage location near it has been recently referenced.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Cache Hit
                </span>
                <br />
                looking for the same piece of data again.
              </p>
              <p className="text-[#4F7853] text-xl p-2">
                {" "}
                <span className="font-bold text-[#4F7853] text-2xl">
                  Cache Miss
                </span>
                <br />
                data that isn’t in the cache; it causes latency and delay.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-20 pb-10">
            <div className="relative w-[70%]">
              <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
              <div className="flex justify-center relative">
                <Image
                  src="/midterm-img/image3.png"
                  width={3000}
                  height={100}
                  alt=""
                  className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
