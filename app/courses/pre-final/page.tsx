import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
function page() {
  return (
    <div className="bg-[##FFFEFA]">
      <div className="container">
        <Navigation name="pre-final" />
        <div className="border-4 border-[#4F7853] rounded-lg p-6">
          <p className="text-[#4F7853] font-bold text-[22px]">Pre-Final &gt; Lesson 1</p>
          <h1 className="text-[#4F7853] font-bold text-[54px] text-center">Computer Bus</h1>
          <div className="relative">
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-l-[10px] border-t-transparent border-r-0 border-b-transparent left-0 absolute top-[-8px]"></div>
            <hr className="border-[2px] border-[#4F7853]" />
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-r-[10px] border-t-transparent border-l-0 border-b-transparent right-0 absolute top-[-8px]"></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">Computer Bus</h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
                <li>Computer bus is a communication pathway that connects two (2) or more devices or modules used in transferring data.</li>
                <li>Computer bus consists of a set of conductors.</li>
                <li>The collection of wires is capable of transferring a byte or a word at a time as a function of its width since each device connected to the computer bus, in the form of tailings or wires, transmits a bit of data (1 or 0).</li>
              </ul>
            </div>
            <div>
              <Image className="ml-auto mr-auto" src="/pre-final-image/RibbonCable.jpg" alt="" width={195} height={195}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 1: Ribbon Cable (Galaxy Wire & Cable, 2023)</p>
              <Image className="ml-auto mr-auto" src="/pre-final-image/CoppertracksonaPCB.jpg" alt="" width={685} height={685}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 2: Copper tracks on a PCB (E. & E., 2023)</p>
            </div>
            <div className="col-span-3">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">Architecture of a System Bus</h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
                <li>A system bus usually consists of 50 to 100 distinct physical lines. Each bus is designed for a specific function and can be divided into three main categories:</li>
                <li className="ml-[14px]">Address bus (memory bus) - It is a unidirectional bus that transports memory addresses which the processor wants to access to read or write data. The number of address lines in the address bus impacts the range of memory addresses that the computer system may access.</li>
                <li className="ml-[14px]">Data bus - It is a bidirectional bus that transfers instructions coming from or going to the processor. Each data line can only transmit one bit at a time. For example, a computer system with a 32-bit data bus can transfer 32 bits of data in parallel.</li>
                <li className="ml-[14px]">Control bus (command bus) – It is a bidirectional bus that transports orders and synchronization signals coming from the control unit and traveling to all other hardware components. It also transmits response signals from the hardware.</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">Methods of Data Transmission</h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
                <li>Serial</li>
                <li className="ml-[14px]">Used for long-distance data transfer</li>
                <li className="ml-[14px]">Ensures that the data integrity is maintained</li>
                <li className="ml-[14px]">Data bits are sent one by one in a medium</li>
                <li className="ml-[14px]">Full-duplex - the sender can send and receive data simultaneously</li>
                <li>Parallel</li>
                <li className="ml-[14px]">Used for short distance data transfer</li>
                <li className="ml-[14px]">Multiple data bits are transmitted over multiple channels at the same time</li>
                <li className="ml-[14px]">Data can be sent faster</li>
                <li className="ml-[14px]">Half-duplex - the data is either sent or received</li>
              </ul>
            </div>
            <div>
              <Image className="ml-auto mr-auto" src="/pre-final-image/VisualrepresentationofSerialandParalleltransmissions.jpg" alt="" width={270} height={270}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 3. Visual representation of Serial and Parallel transmissions (Tech Differences, 2019)</p>
            </div>
            <div className="col-span-3">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">Bus Communication Protocols</h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
              <li>Synchronous</li>
              <li className="ml-[14px]">Data bits are transmitted as a continuous stream in time with a master clock</li>
              <li className="ml-[14px]">The data transmitter and receiver both operate using a synchronized clock frequency</li>
              <li className="ml-[14px]">Start bits, stop bits, and gaps are not used</li>
              <li className="ml-[14px]">Data moves faster and timing errors are less frequent</li>
              <li className="ml-[14px]">Data accuracy is highly dependent on timing being synced correctly between devices</li>
              <li>Asynchronous</li>
              <li className="ml-[14px]">Data bits can be sent at any point in time</li>
              <li className="ml-[14px]">Stop bits and start bits are used between data bytes to synchronize the transmitter and receiver and to ensure that the data is transmitted correctly</li>
              <li className="ml-[14px]">Gaps are used to provide time between transmissions since the time between sending and receiving data bits is not constant</li>
              </ul>
            </div>
            <div className="col-span-3">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">Bus Arbitration</h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
              <li>In a computer system, multiple devices, such as the CPU, memory, and I/O controllers, are connected to a common communication pathway, known as a bus. In order to transfer data between these devices, they need to have access to the bus. Bus arbitration is the process of resolving conflicts that arise when multiple devices attempt to access the bus at the same time.</li>
              <li>Bus Arbitration refers to the process by which the current bus master accesses and then leaves the control of the bus and passes it to another bus requesting processor unit. The controller that has access to a bus at an instance is known as a Bus master.</li>
              <li className="ml-[14px]">Centralized Arbitration</li>
              <li className="ml-[28px]">An arbitration circuit receives requests from the contending bus masters and then decides which of them is to be given control of the bus</li>
              <li className="ml-[28px]">A single bus controller or arbiter is responsible for allocating time to the bus</li>
              <li className="ml-[28px]">The device may be part of the CPU or a separate module such as daisy-chaining</li>
              <li className="ml-[14px]">Decentralized Arbitration</li>
              <li className="ml-[28px]">Each device has its own priority level</li>
              <li className="ml-[28px]">The device with the highest priority is given access to the bus</li>
              <li className="ml-[14px]">Distributed Arbitration</li>
              <li className="ml-[28px]">There is no central controller where each module may claim the bus</li>
              <li className="ml-[28px]">All devices monitor all the request lines</li>
              <li className="ml-[28px]">Each of the masters takes part in the arbitration process</li>
              <li className="ml-[28px]">The system lacks a specific arbiter—each master monitors the other masters and decides whether to continue competing for the bus or give up and wait until later</li>
              </ul>
            </div>
            <div className="col-span-3">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">Characteristics of a Computer Bus</h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
              <li>Data Sharing – All types of buses found in computer transfer data between computer peripherals connected to it.</li>
              <li>Addressing – A bus has address lines that match those of the processor. This allows data to be sent to or from specific memory locations.</li>
              <li>Power – A bus supplies power to various peripherals connected to it.</li>
              <li>Timing – A bus provides a system clock signal to synchronize the peripherals attached to it with the rest of the system.</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">Chipset</h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
              <li>A chipset is a component that routes data between a computer’s buses. This enables all of the components that make up the computer to communicate with each other.</li>
              <li className="ml-[14px]">Northbridge (memory controller) is in charge of controlling the transfer of data between the processor and the random access memory (RAM), which is why it is located physically near the processor.</li>
              <li className="ml-[28px]">Internal Bus (Front-Side Bus or FSB) – This allows the processor to communicate with the system’s central memory or the RAM.</li>
              <li className="ml-[14px]">Southbridge (input/output controller or expansion controller) handles communications between peripheral devices. It is also called the ICH (I/O Controller Hub).</li>
              <li className="ml-[28px]">Expansion Bus (Input/Output Bus) – This allows various motherboard components (i.e., USB or serial) to communicate with one another.</li>
              </ul>
            </div>
            <div>
              <Image className="ml-auto mr-auto" src="/pre-final-image/Chipset.png" alt="" width={795} height={795}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 4. Chipset (Roy, 2024)</p>
            </div>
            <div>
              <Image className="ml-auto mr-auto" src="/pre-final-image/IndustryStandardArchitectureBus.jpg" alt="" width={160} height={160}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 5. Industry Standard Architecture Bus (Thakur, 2020)</p>
              <Image className="ml-auto mr-auto" src="/pre-final-image/VideoElectronicsStandardsAssociationLocalBus.jpg" alt="" width={450} height={450}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 6. Video Electronics Standards Association Local Bus (Posch, n.d.)</p>
              <Image className="ml-auto mr-auto" src="/pre-final-image/AcceleratedGraphicsPortBus.jpg" alt="" width={330} height={330}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 7. Accelerated Graphics Port Bus (Situs Ku, n.d.)</p>
              <Image className="ml-auto mr-auto" src="/pre-final-image/PeripheralComponentInterconnectBus.jpg" alt="" width={300} height={300}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 8. Peripheral Component Interconnect Bus (Le Roux, 2009)</p>
              <Image className="ml-auto mr-auto" src="/pre-final-image/SCSI.jpg" alt="" width={200} height={200}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 9. SCSI ((What Is Small Computer Systems Interface (SCSI), 2019))</p>
              <Image className="ml-auto mr-auto" src="/pre-final-image/PCMCIA.jpg" alt="" width={220} height={220}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 10. PCMCIA (Tech-FAQ, 2019)</p>
              <Image className="ml-auto mr-auto" src="/pre-final-image/PCIe.jpg" alt="" width={600} height={600}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 11. PCIe (Crystal Group, 2023)</p>
              <Image className="ml-auto mr-auto" src="/pre-final-image/USB.jpg" alt="" width={180} height={180}/>
              <p className="text-[#4F7853] font-bold text-[12px] text-center">Figure 12. USB (USB Ports, USB Cables, What Is a Usb Port?, n.d.)</p>
            </div>
            <div className="col-span-2">
              <h1 className="text-[#4F7853] font-bold text-[26px] text-center">Computer Bus Technologies</h1>
              <ul className="list-disc text-[#4F7853] text-[14px] text-justify">
              <li className="ml-[28px]">Previously Used Technology</li>
              <li className="ml-[42px]">Industry Standard Architecture (ISA) – IBM introduced this bus for IBM PC using an 8088 microprocessor. This has an 8-bit data bus and 20 address lines at a clock speed of 8 MHz.</li>
              <li className="ml-[42px]">Video Electronics Standards Association (VESA) – This bus is a standard interface between a computer and its expansion. As applications became more graphically intensive, the VESA bus was introduced to maximize throughput of video graphics memory. This also provides fast data flow between stations and can transfer up to 132 Mbps.</li>
              <li className="ml-[42px]">Accelerated Graphics Port (AGP) – This is connected to the CPU. This operates at the speed of the processor bus and implies that video information is sent quickly to the card for processing. The data transfer rate ranges from 264 Mbps to 528Mbps and 800 Mbps up to 1.5 Gbps. The AGP connector is identified by its brown color.</li>
              <li className="ml-[42px]">Peripheral Component Interconnect (PCI) – Intel Corporation developed this bus. The PCI bus technology includes a 32- or 64-bit bus that runs at 33/66 MHz clock speed. It offers many advantages for connections to hubs, routers, and network interface cards (NIC). In particular, PCI provides more bandwidth up to 1 Gigabit per second as needed by these hardware components.</li>
              <li className="ml-[28px]">Currently Used Technology</li>
              <li className="ml-[42px]">Small Computer Systems Interface (SCSI) – It is a set of ANSI (American National Standards Institute) standard electronic interfaces that allows PCs to communicate faster with peripheral hardware (e. g., disk drives, tape drives, CD-ROM drives, printers, and scanners). It is more flexible than previous parallel data transfer interfaces.</li>
              <li className="ml-[42px]">Personal Computer Memory Card Industry Association (PCMCIA) – This was founded to give a standard bus for laptop computers. A PCMCIA card has a 68-pin connector that connects into a slot in the PC. These cards are plug-and-play devices that are often hot-swappable in most of the operating systems.</li>
              <li className="ml-[42px]">Peripheral Component Interconnect Express (PCIe) – It is an interface standard for connecting high-speed components. PCIe slots come in different physical configurations: x1, x4, x8, x16, x32. The number after the “x” implies the number of lanes (how data travels to and from the PCIe card) that a PCIe slot has.</li>
              <li className="ml-[42px]">Universal Serial Bus (USB)  – It connects peripheral devices such as digital cameras, mice, keyboards, printers, scanners, media devices, external hard drives, and flash drives. It is intended to enhance plug-and-play and to allow hot-swapping. Plug-and-play enables the operating system to configure and discover a peripheral device spontaneously without having to restart the computer. Additionally, hot-swapping allows removal and replacement of a new peripheral without having to reboot. Because of its wide variety of uses, including support for electrical power, the USB has replaced a wide range of interfaces like the parallel and serial ports.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;