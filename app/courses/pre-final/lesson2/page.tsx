import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <div className="bg-[##FFFEFA]">
      <div className="container">
        <Navigation name="pre-final" />
        <div
          className="border-4 border-[#4F7853] rounded-lg p-6 
        "
        >
          <p className="text-[#4F7853] font-bold text-[22px]">
            Pre-Final &gt; Lesson 2
          </p>
          <h1 className="text-[#4F7853] font-bold text-[54px] text-center">
            I/O Architecture
          </h1>
          <div className="relative">
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-l-[10px] border-t-transparent border-r-0 border-b-transparent left-0 absolute top-[-8px]"></div>
            <hr className="border-[2px] border-[#4F7853]" />
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-r-[10px] border-t-transparent border-l-0 border-b-transparent right-0 absolute top-[-8px]"></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">
                I/O Architecture
              </h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
                <li>
                  The peripheral devices are the main vehicle for obtaining the
                  benefits from the system since they are responsible for the
                  input/output (I/O) and for connecting the system to the
                  outside world. Some devices have a dual role, such as mass
                  storage, networks, and so on—these are both I/O devices.
                </li>
                <li>
                  In general, these peripheral devices can be divided into the
                  following:
                </li>
                <li className="ml-[14px]">
                  Input peripherals – This allows user input from the outside
                  world to the computer.
                </li>
                <li className="ml-[14px]">
                  Output peripherals – This allows information output from the
                  computer to the outside world.
                </li>
                <li className="ml-[14px]">
                  Input-output peripherals – This allows information to be sent
                  through input and output.
                </li>
                <li className="ml-[14px]">
                  Storage – This allows the usage of I/O for storing and
                  fetching of information.
                </li>
              </ul>
            </div>
            <div>
              <Image
                className="ml-auto mr-auto"
                src="/pre-final-image/Picture1.png"
                alt=""
                width={410}
                height={410}
              />
            </div>
            <div className="col-span-3">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">
                I/O Characteristics
              </h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
                <li>
                  These are the following characteristics to consider in dealing
                  with I/O devices and controllers:
                </li>
                <li className="ml-[14px]">
                  Computer usefulness ultimately depends on its I/O
                  capabilities.
                </li>
                <li className="ml-[14px]">
                  I/O devices are incredibly diverse with respect to the
                  following:
                </li>
                <li className="ml-[28px]">
                  Behavior – input, output, or storage purposes
                </li>
                <li className="ml-[28px]">
                  Partner – human or machine interaction
                </li>
                <li className="ml-[28px]">
                  Data rate – the amount of data transferred to or from the I/O
                  device in a period. It is typically measured in bits per
                  second
                </li>
                <li className="ml-[14px]">I/O considerations:</li>
                <li className="ml-[28px]">
                  Performance – This refers to how fast the device is.
                </li>
                <li className="ml-[28px]">
                  Expandability – This refers to the expansion of the I/O
                  device.
                </li>
                <li className="ml-[28px]">
                  Dependability – This refers to the capability of the range and
                  control of an I/O device.
                </li>
                <li className="ml-[28px]">
                  Cost – This refers to the cost (how cheap or expensive) of an
                  I/O module or device.
                </li>
                <li className="ml-[28px]">
                  Size and Weight – These refer to the dimensions of an I/O
                  device.
                </li>
              </ul>
            </div>
            <div className="col-span-3">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">
                I/O Performance
              </h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
                <li>
                  Below are the parameters used in checking the performance of
                  each I/O device or controller.
                </li>
                <li className="ml-[14px]">
                  I/O bandwidth (throughput) – This is the amount of information
                  that can be input (output) and communicated across an
                  interconnect (say, for example, a bus) to the processor or
                  memory (I/O device) per unit time.
                </li>
                <li className="ml-[28px]">
                  How much data can be moved through the system at a certain
                  time?
                </li>
                <li className="ml-[28px]">
                  How many I/O operations can be done per unit time?
                </li>
                <li className="ml-[14px]">
                  I/O response time (latency) – This is the total elapsed time
                  to accomplish by an input or output operation. This is also an
                  especially important performance metric in real-time systems.
                </li>
              </ul>
            </div>
            <div className="col-span-3">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">
                Modes of I/O Data Transfer
              </h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
                <li>
                  Data transfer between the central unit and I/O devices can be
                  handled in three (3) types of modes:
                </li>
                <li className="ml-[14px]">
                  Programmed I/O – These instructions are the result of I/O
                  instructions written in a computer program. The instruction in
                  the program initiates each data item transfer. Usually, the
                  program controls data transfer to and from the CPU and
                  peripheral. Transferring data under programmed I/O requires
                  constant monitoring of the peripherals by the CPU.
                </li>
                <li className="ml-[14px]">
                  The CPU has the following pair of registers to interface with
                  an I/O device:
                </li>
                <li className="ml-[28px]">
                  Data register for holding I/O data
                </li>
                <li className="ml-[28px]">
                  Address register for addressing the I/O device.
                </li>
                <li className="ml-[14px]">
                  Interrupt Initiated I/O – The interface determines when the
                  peripheral is ready for data transfer, then it generates an
                  interrupt. After receiving the interrupt signal, the CPU stops
                  the task it processes and service the I/O transfer. Then, it
                  returns to its previous processing task. Interrupts require
                  CPU immediate attention (e.g., keyboard input, power failure,
                  completion of I/O, etc.).
                </li>
                <li className="ml-[14px]">
                  These are the following uses of interrupts:
                </li>
                <li className="ml-[28px]">
                  as an external event notifier. This process periodically
                  checks for external events (ex. checking keyboard input).
                </li>
                <li className="ml-[28px]">
                  as a completion signal. It can be a notifier when a process is
                  complete.
                </li>
                <li className="ml-[28px]">
                  as a means of allocating CPU time. The time between interrupt
                  pulses is known as a quantum, which represents the time that
                  each program or process will have allotted to it.
                </li>
                <li className="ml-[28px]">
                  the interrupt as an abnormal event indicator. It uses traps or
                  exceptions to avoid errors or illegal instructions.
                </li>
                <li className="ml-[28px]">
                  Software interrupts. Programs or applications with higher
                  priority and privileges (depending on the user’s and system’s
                  grant) can request a special interrupt if prompted.
                </li>
                <li className="ml-[14px]">
                  Direct Memory Access (DMA) – It is a technique of removing the
                  CPU from the path and letting the peripheral devices manage
                  the memory buses directly to improve the speed of transfer. A
                  DMA controller manages the transfer of data between
                  peripherals and memory unit. Much hardware systems use DMA,
                  such as disk drive controllers, graphic cards, network cards,
                  sound cards, etc. In DMA, the CPU initiates the transfer, does
                  other operations while the transfer is in progress, and
                  receives an interrupt from the DMA controller when the
                  transfer has been completed.
                </li>
                <li className="ml-[14px]">
                  The three (3) main conditions to meet for a DMA to work are as
                  follows:
                </li>
                <li className="ml-[28px]">
                  Method to connect the I/O module and the memory
                </li>
                <li className="ml-[28px]">
                  the I/O module must be able to read from and write to the
                  memory
                </li>
                <li className="ml-[28px]">
                  Method to avoid conflict between the CPU and the I/O module
                  writing to memory at the same time.
                </li>
                <li className="ml-[42px]">
                  There are different DMA methods of execution:
                </li>
                <li className="ml-[56px]">Buffer Chaining</li>
                <li className="ml-[70px]">
                  It handles multiple transfers without the processor.
                </li>
                <li className="ml-[70px]">
                  The device gives a linked list of buffers.
                </li>
                <li className="ml-[70px]">
                  The device hardware uses the next buffer on the list
                  automatically.
                </li>
                <li className="ml-[56px]">Operation Chaining</li>
                <li className="ml-[70px]">
                  Further optimization for smart device
                </li>
                <li className="ml-[70px]">
                  The processor gives a series of commands to the device,
                  sometimes called a channel program.
                </li>
                <li className="ml-[70px]">
                  The device carries out successive commands automatically
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">
                I/O Controller
              </h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify mr-[14px]">
                <li>
                  The I/O controller serves as an intermediary interface between
                  the CPU and a specific device that accepts commands from the
                  CPU and controls the exact device after. Most of the I/O
                  controllers are device controllers that serve as direct
                  interfaces between a general system bus and each of the
                  system’s peripheral devices. In general, I/O controllers
                  simplify the task of interfacing peripheral devices to a CPU.
                </li>
                <li>
                  I/O controllers offload a considerable amount of work from the
                  CPU. They make it possible to control I/O to a peripheral with
                  a few simple I/O commands from the CPU. They also support DMA
                  so the CPU may be free to perform other tasks. Device
                  controllers provide the specialized circuitry required to
                  interface several types of peripherals to the computer. I/O
                  controllers allow the processing of each instruction to
                  progress in parallel.
                </li>
                <li>These are the following functions of an I/O controller:</li>
                <li className="ml-[14px]">
                  Interface translation – It includes the connection, voltage
                  supply, protocol enactor, clocking.
                </li>
                <li className="ml-[14px]">
                  Addressing – It can process memory locations or addresses for
                  the function of processing.
                </li>
                <li className="ml-[14px]">
                  Multiplexing – It can combine multiple signals over the bus to
                  reduce multiple bus usage.
                </li>
                <li className="ml-[14px]">
                  Buffering – It gives data transfer a boost by preloading data
                  into memory before processing.
                </li>
                <li className="ml-[14px]">
                  Error detection and correction – It can detect errors and
                  correction.
                </li>
                <li className="ml-[14px]">
                  Control of multiple steps – This reduces CPU workload due to
                  I/O controller being the one that processes I/O instructions.
                </li>
              </ul>
            </div>
            <div>
              <Image
                className="ml-auto mr-auto"
                src="/pre-final-image/Picture2.png"
                alt=""
                width={570}
                height={570}
              />
            </div>
            <div className="col-span-2">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">
                Computer Drivers
              </h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify mr-[14px]">
                <li>
                  A device driver is a small piece of software that tells the
                  operating system and other software how to communicate with a
                  piece of hardware. Device drivers are like translators between
                  a program being used and a device that the program wants to
                  utilize somehow. In other words, a software program can
                  provide information to a driver to explain what it wants a
                  piece of hardware to do, information the device driver
                  understands and can fulfill with the hardware.
                </li>
              </ul>
            </div>
            <div>
              <Image
                className="ml-auto mr-auto"
                src="/pre-final-image/Picture3.png"
                alt=""
                width={570}
                height={570}
              />
            </div>
          </div>
          <div className="w-full flex mt-8">
            <Link
              href={"/courses/finals"}
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
