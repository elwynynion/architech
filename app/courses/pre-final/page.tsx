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
        <div className="border-4 border-[#4F7853] rounded-[35px] p-10 text-[#4F7853] max-[460px]:border-none max-[460px]:p-2">
          <div>
            <p className="text-[#4F7853] font-bold text-[22px]">
              Pre-Final &gt; Lesson 1
            </p>
            <h1 className="text-[#4F7853] font-bold text-[54px] text-center  max-[450px]:text-[30px]">
              Computer Bus
            </h1>
            <div className="relative">
              <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-l-[10px] border-t-transparent border-r-0 border-b-transparent left-0 absolute top-[-9px]"></div>
              <hr className="border-[1px] border-[#4F7853]" />
              <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-r-[10px] border-t-transparent border-l-0 border-b-transparent right-0 absolute top-[-9px]"></div>
            </div>
          </div>
          <div className="max-w-[1000px] mx-auto  space-y-10 mt-5">
            <div className="flex gap-4 items-center max-[865px]:flex-col-reverse">
              <div className="flex-1 max-w-[50%]  max-[865px]:max-w-[100%]">
                <h1 className="font-bold text-[25px] text-center">
                  Computer Bus
                </h1>
                <ul className="text-[18px] list-disc ml-6">
                  <li>
                    Computer bus is a communication pathway that connects two
                    (2) or more devices or modules used in transferring data.
                    Computer bus consists of a set of conductors.
                  </li>
                  <li>
                    The collection of wires is capable of transferring a byte or
                    a word at a time as a function of its width since each
                    device connected to the computer bus, in the form of
                    tailings or wires, transmits a bit of data (1 or 0).
                  </li>
                </ul>
              </div>
              <div className="max-w-[420px] w-full mx-auto border-2 border-[#4F7853] rounded-md max-[865px]:max-w-[500px] flex-1">
                <Image
                  src={"/prefinal-image/computer-bus.png"}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[25px] text-center">
                Architecture of a System Bus
              </h2>
              <p className="text-[18px] text-justify">
                A system bus usually consists of 50 to 100 distinct physical
                lines. Each bus is designed for a specific function and can be
                divided into three main categories:
              </p>
              <ul className="text-[18px] list-disc ml-6 text-justify">
                <li>
                  <b>Address bus (memory bus) -</b> It is a unidirectional bus
                  that transports memory addresses which the processor wants to
                  access to read or write data. The number of address lines in
                  the address bus impacts the range of memory addresses that the
                  computer system may access.
                </li>
                <li>
                  <b>Data bus -</b> It is a bidirectional bus that transfers
                  instructions coming from or going to the processor. Each data
                  line can only transmit one bit at a time. For example, a
                  computer system with a 32-bit data bus can transfer 32 bits of
                  data in parallel.
                </li>
                <li>
                  <b>Control bus (command bus) -</b> It is a bidirectional bus
                  that transports orders and synchronization signals coming from
                  the control unit and traveling to all other hardware
                  components. It also transmits response signals from the
                  hardware.
                </li>
              </ul>
            </div>
            <div className="flex gap-4 items-center max-[865px]:flex-col">
              <div className="max-w-[420px] w-full mx-auto border-2 border-[#4F7853] rounded-md max-[865px]:max-w-[500px] flex-1">
                <Image
                  src={"/prefinal-image/parallel-transmission.jpg"}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>

              <div className="flex-1 max-w-[50%]  max-[865px]:max-w-[100%]">
                <h1 className="font-bold text-[25px] text-center">
                  Methods of Data Transmission
                </h1>
                <div>
                  <p className="font-bold text-[18px]">Serial</p>
                  <ul className="text-[18px] list-disc ml-6">
                    <li>
                      Used for long-distance data transfer (2) or more devices
                      or modules used in transferring data. Computer bus
                      consists of a set of conductors.
                    </li>
                    <li>Ensures that the data integrity is maintained</li>
                    <li>Data bits are sent one by one in a medium</li>
                    <li>
                      Full-duplex - the sender can send and receive data
                      simultaneously
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[18px]">Parallel</p>
                  <ul className="text-[18px] list-disc ml-6">
                    <li>Used for short distance data transfer</li>
                    <li>
                      Multiple data bits are transmitted over multiple channels
                      at the same time
                    </li>
                    <li>Data can be sent faster</li>
                    <li>Half-duplex - the data is either sent or received</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[25px] text-center">
                Bus Communication Protocols
              </h2>
              <div>
                <p className="font-bold text-[18px]">Synchronous</p>
                <ul className="text-[18px] list-disc ml-6">
                  <li>
                    Data bits are transmitted as a continuous stream in time
                    with a master clock
                  </li>
                  <li>
                    The data transmitter and receiver both operate using a
                    synchronized clock frequency
                  </li>
                  <li>Start bits, stop bits, and gaps are not used</li>
                  <li>Data moves faster and timing errors are less frequent</li>
                  <li>
                    Data accuracy is highly dependent on timing being synced
                    correctly between devices
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-[18px]">Asynchronous</p>
                <ul className="text-[18px] list-disc ml-6">
                  <li>Data bits can be sent at any point in time</li>
                  <li>
                    Stop bits and start bits are used between data bytes to
                    synchronize the transmitter and receiver and to ensure that
                    the data is transmitted correctly
                  </li>
                  <li>
                    Stop bits and start bits are used between data bytes to
                    synchronize the transmitter and receiver and to ensure that
                    the data is transmitted correctly
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-[25px] text-center">
                Bus Arbitration
              </h2>
              <p className="text-[18px]">
                In a computer system, multiple devices, such as the CPU, memory,
                and I/O controllers, are connected to a common communication
                pathway, known as a bus. In order to transfer data between these
                devices, they need to have access to the bus. Bus arbitration is
                the process of resolving conflicts that arise when multiple
                devices attempt to access the bus at the same time.
              </p>
              <p className="text-[18px]">
                <b>Bus Arbitration</b>
                refers to the process by which the current bus master accesses
                and then leaves the control of the bus and passes it to another
                bus requesting processor unit. The controller that has access to
                a bus at an instance is known as a <b>Bus master</b>.
              </p>
              <div>
                <p className="font-bold text-[18px]">Centralized Arbitration</p>
                <ul className="text-[18px] list-disc ml-6">
                  <li>
                    n arbitration circuit receives requests from the contending
                    bus masters and then decides which of them is to be given
                    control of the bus
                  </li>
                  <li>
                    A single bus controller or arbiter is responsible for
                    allocating time to the bus
                  </li>
                  <li>
                    The device may be part of the CPU or a separate module such
                    as daisy-chaining
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-[18px]">
                  Decentralized Arbitration
                </p>
                <ul className="text-[18px] list-disc ml-6">
                  <li>Each device has its own priority level</li>
                  <li>
                    The device with the highest priority is given access to the
                    bus
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-[18px]">Distributed Arbitration</p>
                <ul className="text-[18px] list-disc ml-6">
                  <li>
                    There is no central controller where each module may claim
                    the bus
                  </li>
                  <li>All devices monitor all the request lines</li>
                  <li>
                    Each of the masters takes part in the arbitration process
                  </li>
                  <li>
                    The system lacks a specific arbiter—each master monitors the
                    other masters and decides whether to continue competing for
                    the bus or give up and wait until later
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[25px] text-center">
                Characteristics of a Computer Bus
              </h2>
              <div>
                <ul className="text-[18px] list-disc ml-6">
                  <li>
                    <b>Data Sharing -</b> All types of buses found in computer
                    transfer data between computer peripherals connected to it.
                  </li>
                  <li>
                    <b>Addressing -</b>A bus has address lines that match those
                    of the processor. This allows data to be sent to or from
                    specific memory locations.
                  </li>
                  <li>
                    <b>Power -</b>A bus supplies power to various peripherals
                    connected to it.
                  </li>
                  <li>
                    <b>Timing -</b>A bus provides a system clock signal to
                    synchronize the peripherals attached to it with the rest of
                    the system.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[25px] text-center">Chipset</h2>
              <p className="text-[18px]">
                A chipset is a component that routes data between a computers
                buses. This enables all of the components that make up the
                computer to communicate with each other.
              </p>
              <div>
                <ul className="text-[18px] list-disc ml-6 space-y-2">
                  <li>
                    <b>Northbridge -</b> A(memory controller) is in charge of
                    controlling the transfer of data between the processor and
                    the random access memory (RAM), which is why it is located
                    physically near the processor.
                  </li>
                  <li className="ml-4">
                    <b>Internal Bus</b> (Front-Side Bus or FSB) - This allows
                    the processor to communicate with the system&apos;s central
                    memory or the RAM.
                  </li>
                  <li>
                    <b>Southbridge -</b>(input/output controller or expansion
                    controller) handles communications between peripheral
                    devices. It is also called the ICH (I/O Controller Hub).
                  </li>
                  <li className="ml-4">
                    <b>Expansion Bus -</b>(Input/Output Bus) This allows various
                    motherboard components (i.e., USB or serial) to communicate
                    with one another.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-[20px]">
                Computer Bus Technologies
              </h1>
              <div>
                <p className="text-[18px]">Previously Used Technology</p>
                <div className="flex max-[865px]:flex-col mt-2 gap-2">
                  <h2 className="text-[18px] flex-1 ">
                    <b>Industry Standard Architecture (ISA) -</b> IBM introduced
                    this bus for IBM PC using an 8088 microprocessor. This has
                    an 8-bit data bus and 20 address lines at a clock speed of 8
                    MHz.
                  </h2>
                  <div className="max-h-[600px] flex-1">
                    <Image
                      src={"/prefinal-image/ISA.jpg"}
                      alt=""
                      width={600}
                      height={600}
                      className="max-w-[750px] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex max-[865px]:flex-col mt-2 gap-2">
                  <h2 className="text-[18px] flex-1">
                    <b>Video Electronics Standards Association (VESA) -</b> This
                    bus is a standard interface between a computer and its
                    expansion. As applications became more graphically
                    intensive, the VESA bus was introduced to maximize
                    throughput of video graphics memory. This also provides fast
                    data flow between stations and can transfer up to 132 Mbps.
                  </h2>
                  <div className="max-h-[600px] flex-1">
                    <Image
                      src={"/prefinal-image/VESA.jpg"}
                      alt=""
                      width={600}
                      height={600}
                      className="max-w-[750px] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex max-[865px]:flex-col mt-2 gap-2">
                  <h2 className="text-[18px] flex-1">
                    <b>Accelerated Graphics Port (AGP) -</b> This is connected
                    to the CPU. This operates at the speed of the processor bus
                    and implies that video information is sent quickly to the
                    card for processing. The data transfer rate ranges from 264
                    Mbps to 528Mbps and 800 Mbps up to 1.5 Gbps. The AGP
                    connector is identified by its brown color.
                  </h2>
                  <div className="max-h-[600px] flex-1">
                    <Image
                      src={"/prefinal-image/AGP.jpg"}
                      alt=""
                      width={600}
                      height={600}
                      className="max-w-[750px] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex max-[865px]:flex-col mt-2 gap-2">
                  <h2 className="text-[18px] flex-1">
                    <b>Peripheral Component Interconnect (PCI) -</b> Intel
                    Corporation developed this bus. The PCI bus technology
                    includes a 32- or 64-bit bus that runs at 33/66 MHz clock
                    speed. It offers many advantages for connections to hubs,
                    routers, and network interface cards (NIC). In particular,
                    PCI provides more bandwidth up to 1 Gigabit per second as
                    needed by these hardware components
                  </h2>
                  <div className="max-h-[600px] flex-1">
                    <Image
                      src={"/prefinal-image/PCI.jpg"}
                      alt=""
                      width={600}
                      height={600}
                      className="max-w-[750px] w-full object-cover"
                    />
                  </div>
                </div>

                <p className="text-[18px] mt-2">Currently Used Technology</p>
                <div className="flex max-[865px]:flex-col mt-2 gap-2">
                  <h2 className="text-[18px] flex-1">
                    <b>Small Computer Systems Interface (SCSI) -</b> It is a set
                    of ANSI (American National Standards Institute) standard
                    electronic interfaces that allows PCs to communicate faster
                    with peripheral hardware (e. g., disk drives, tape drives,
                    CD-ROM drives, printers, and scanners). It is more flexible
                    than previous parallel data transfer interfaces
                  </h2>
                  <div className="max-h-[600px] flex-1">
                    <Image
                      src={"/prefinal-image/SCSI.jpg"}
                      alt=""
                      width={600}
                      height={600}
                      className="max-w-[750px] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex max-[865px]:flex-col mt-2 gap-2">
                  <h2 className="text-[18px] flex-1">
                    <b>
                      Personal Computer Memory Card Industry Association
                      (PCMCIA) -
                    </b>
                    This was founded to give a standard bus for laptop
                    computers. A PCMCIA card has a 68-pin connector that
                    connects into a slot in the PC. These cards are
                    plug-and-play devices that are often hot-swappable in most
                    of the operating systems.
                  </h2>
                  <div className="max-h-[600px] flex-1">
                    <Image
                      src={"/prefinal-image/PCMCIA.jpg"}
                      alt=""
                      width={600}
                      height={600}
                      className="max-w-[750px] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex max-[865px]:flex-col mt-2 gap-2">
                  <h2 className="text-[18px] flex-1">
                    <b>Peripheral Component Interconnect Express (PCIe) -</b>
                    It is an interface standard for connecting high-speed
                    components. PCIe slots come in different physical
                    configurations: x1, x4, x8, x16, x32. The number after the
                    &quot;x&quot; implies the number of lanes (how data travels
                    to and from the PCIe card) that a PCIe slot has.
                  </h2>
                  <div className="max-h-[600px] flex-1">
                    <Image
                      src={"/prefinal-image/PCIe.jpg"}
                      alt=""
                      width={600}
                      height={600}
                      className="max-w-[750px] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex max-[865px]:flex-col mt-2 gap-2">
                  <h2 className="text-[18px] flex-1">
                    <b>Universal Serial Bus (USB) -</b>
                    It connects peripheral devices such as digital cameras,
                    mice, keyboards, printers, scanners, media devices, external
                    hard drives, and flash drives. It is intended to enhance
                    plug-and-play and to allow hot-swapping. Plug-and-play
                    enables the operating system to configure and discover a
                    peripheral device spontaneously without having to restart
                    the computer. Additionally, hot-swapping allows removal and
                    replacement of a new peripheral without having to reboot.
                    Because of its wide variety of uses, including support for
                    electrical power, the USB has replaced a wide range of
                    interfaces like the parallel and serial ports.
                  </h2>
                  <div className="max-h-[600px] flex-1">
                    <Image
                      src={"/prefinal-image/USB.jpg"}
                      alt=""
                      width={600}
                      height={600}
                      className="max-w-[750px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex mt-8 ">
            <Link
              href={"/courses/pre-final/lesson2"}
              className="bg-[#4F7853] p-2 text-[white] font-bold rounded-md w-[200px] text-center ml-auto "
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
