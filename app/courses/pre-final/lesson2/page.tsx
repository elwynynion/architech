import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import Link from "next/link";
async function page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="bg-[##FFFEFA]">
      <div className="container">
        <Navigation name="pre-final" />
        <div
          className="border-4 border-[#4F7853] rounded-[35px] p-6 text-[#4F7853]
        max-[450px]:border-0 max-[450px]:p-0"
        >
          <p className="text-[#4F7853] font-bold text-[22px]">
            Pre-Final &gt; Lesson 2
          </p>
          <h1 className="text-[#4F7853] font-bold text-[54px] text-center max-[450px]:text-[30px]">
            I/O Architecture
          </h1>
          <div className="relative">
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-l-[10px] border-t-transparent border-r-0 border-b-transparent left-0 absolute top-[-8px]"></div>
            <hr className="border-[2px] border-[#4F7853]" />
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-r-[10px] border-t-transparent border-l-0 border-b-transparent right-0 absolute top-[-8px]"></div>
          </div>
          <div className="max-w-[1000px] mx-auto  space-y-10 mt-5">
            <div className="">
              <div className=" max-[865px]:max-w-[100%]">
                <h1 className="font-bold text-[25px] text-center">
                  I/O Architecture
                </h1>
                <div className="text-[18px]">
                  <p>
                    The peripheral devices are the main vehicle for obtaining
                    the benefits from the system since they are responsible for
                    the input/output (I/O) and for connecting the system to the
                    outside world. Some devices have a dual role, such as mass
                    storage, networks, and so on—these are both I/O devices. In
                    general, these peripheral devices can be divided into the
                    following:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>
                      Input peripherals - This allows user input from the
                      outside world to the computer.
                    </li>
                    <li>
                      Output peripherals - This allows information output from
                      the computer to the outside world.
                    </li>
                    <li>
                      Input-output peripherals - This allows information to be
                      sent through input and output.
                    </li>
                    <li>
                      IStorage - This allows the usage of I/O for storing and
                      fetching of information. I/O Characteristics
                    </li>
                  </ul>
                  <p>
                    These are the following characteristics to consider in
                    dealing with I/O devices and controllers:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>
                      Computer usefulness ultimately depends on its I/O
                      capabilities.
                    </li>
                    <li>
                      I/O devices are incredibly diverse with respect to the
                      following:
                    </li>
                    <li className="list-inside">
                      Behavior - input, output, or storage purposes
                    </li>
                    <li className="list-inside">
                      Partner - human or machine interaction
                    </li>
                    <li className="list-inside">
                      Data rate - the amount of data transferred to or from the
                      I/O device in a period. It is typically measured in bits
                      per second
                    </li>
                    <li> I/O considerations:</li>
                    <li className="list-inside">
                      Performance - This refers to how fast the device is.
                    </li>
                    <li className="list-inside">
                      Expandability - This refers to the expansion of the I/O
                      device
                    </li>
                    <li className="list-inside">
                      {" "}
                      Dependability - This refers to the capability of the range
                      and control of an I/O device.
                    </li>
                    <li className="list-inside">
                      Cost - This refers to the cost (how cheap or expensive) of
                      an I/O module or device.
                    </li>
                    <li className="list-inside">
                      Size and Weight - These refer to the dimensions of an I/O
                      device.
                    </li>
                  </ul>
                </div>
                <div className="text-[18px]">
                  <h2 className="font-bold text-[25px] text-center">
                    I/O Performance
                  </h2>
                  <p>
                    Below are the parameters used in checking the performance of
                    each I/O device or controller.
                  </p>
                  <ul className="list-disc ml-6">
                    <li>
                      I/O bandwidth (throughput) - This is the amount of
                      information that can be input (output) and communicated
                      across an interconnect (say, for example, a bus) to the
                      processor or memory (I/O device) per unit time.
                    </li>
                    <li className="list-inside">
                      How much data can be moved through the system at a certain
                      time?
                    </li>
                    <li className="list-inside">
                      How many I/O operations can be done per unit time?
                    </li>
                    <li>
                      I/O response time (latency) - This is the total elapsed
                      time to accomplish by an input or output operation. This
                      is also an especially important performance metric in
                      real-time systems. Modes of I/O Data Transfer
                    </li>
                  </ul>
                  <div className="mt-4">
                    <p>
                      Data transfer between the central unit and I/O devices can
                      be handled in three (3) types of modes:
                    </p>
                    <ul className="list-disc ml-6">
                      <li>
                        Programmed I/O - These instructions are the result of
                        I/O instructions written in a computer program. The
                        instruction in the program initiates each data item
                        transfer. Usually, the program controls data transfer to
                        and from the CPU and peripheral. Transferring data under
                        programmed I/O requires constant monitoring of the
                        peripherals by the CPU.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p>
                      The CPU has the following pair of registers to interface
                      with an I/O device:
                    </p>
                    <ul className="list-disc ml-6">
                      <li>Data register for holding I/O data</li>
                      <li>Address register for addressing the I/O device.</li>
                      <li>
                        Interrupt Initiated I/O - The interface determines when
                        the peripheral is ready for data transfer, then it
                        generates an interrupt. After receiving the interrupt
                        signal, the CPU stops the task it processes and service
                        the I/O transfer. Then, it returns to its previous
                        processing task. Interrupts require CPU immediate
                        attention (e.g., keyboard input, power failure,
                        completion of I/O, etc.).
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p>These are the following uses of interrupts:</p>
                    <ul className="list-disc ml-6">
                      <li>
                        As an external event notifier. This process periodically
                        checks for external events (ex. checking keyboard
                        input).
                      </li>
                      <li>
                        as a completion signal. It can be a notifier when a
                        process is complete.
                      </li>
                      <li>
                        as a means of allocating CPU time. The time between
                        interrupt pulses is known as a quantum, which represents
                        the time that each program or process will have allotted
                        to it. o the interrupt as an abnormal event indicator.
                        It uses traps or exceptions to avoid errors or illegal
                        instructions.
                      </li>
                      <li>
                        Software interrupts. Programs or applications with
                        higher priority and privileges (depending on the
                        user&apos;s and system&apos;s grant) can request a
                        special interrupt if prompted.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p>
                      <b>Direct Memory Access (DMA) -</b> It is a technique of
                      removing the CPU from the path and letting the peripheral
                      devices manage the memory buses directly to improve the
                      speed of transfer. A DMA controller manages the transfer
                      of data between peripherals and memory unit. Much hardware
                      systems use DMA, such as disk drive controllers, graphic
                      cards, network cards, sound cards, etc.
                    </p>
                    <p>
                      In DMA, the CPU initiates the transfer, does other
                      operations while the transfer is in progress, and receives
                      an interrupt from the DMA controller when the transfer has
                      been completed.
                    </p>
                    <p>
                      The three (3) main conditions to meet for a DMA to work
                      are as follows:
                    </p>
                    <ul className="list-disc ml-6">
                      <li>Method to connect the I/O module and the memory</li>
                      <li>
                        The I/O module must be able to read from and write to
                        the memory
                      </li>
                      <li>
                        Method to avoid conflict between the CPU and the I/O
                        module writing to memory at the same time.
                      </li>
                    </ul>
                    <p>There are different DMA methods of execution:</p>
                    <ul className="list-disc ml-6">
                      <li>
                        Buffer Chaining It handles multiple transfers without
                        the processor. The device gives a linked list of
                        buffers. The device hardware uses the next buffer on the
                        list automatically.
                      </li>
                      <li>
                        Operation Chaining Further optimization for smart device
                        The processor gives a series of commands to the device,
                        sometimes called a channel program. The device carries
                        out successive commands automatically
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
