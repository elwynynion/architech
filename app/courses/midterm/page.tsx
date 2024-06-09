import React from 'react';
import Navigation from '@/components/shared/Navigation';
import Image from 'next/image';

function page() {
  return (
    <div className="bg-[#FFFEFA] h-[100vh]">
      <div className="container px-5">
        <Navigation name="courses" />

        <div className="border-4 border-[#4F7853] rounded-[35px] p-10">
          <h1 className="text-3xl font-bold text-[#4F7853] mb-4">Midterm Lesson 1</h1>
        
            <div className="font-bold text-[#4F7853] text-6xl mb-4 text-center">Hardware Architecture</div>

            <div className="border-[1px] border-[#4F7853] mb-5"></div>

            <div className="font-bold text-[#4F7853] text-4xl mt-10 mb-3">Computer Hardware</div>
            <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc ml-5">These are physical components of computer system (external and
              internal devices and equipment) that performs major functions such
              as input, output, storage, communication, transfer of digital data
              and processing.</p>

            <div className="font-bold text-[#4F7853] text-4xl mt-10 mb-10 text-center">Internal Computer Hardware</div>

            <div className="grid grid-cols-2 max-[1330px]:grid-cols-1 gap-x-[50px] gap-y-[30px]">
            <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/cpu.jpeg" width={9999} height={999} alt="" className='w-full h-full object-cover'/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Central Processing Unit (CPU)</p>
                  <p className='text-[#4F7853] text-xl text-justify'>The
                    Brain of a computer. It is the Primary
                    processing unit responsible for executing
                    and performing calculations. It handles
                    tasks for running programs, managing
                    system resources, and processing user
                    inputs.</p>
                </div>
              </div>

              <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/motherboard.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Motherboard</p>
                  <p className='text-[#4F7853] text-xl text-justify'>The backbone of the
                    computer. It is the main circuit board
                    inside a computer that connects and holds
                    together all the essential components
                    together. It provides communication
                    channels and power distribution.</p>
                </div>
              </div>

              <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/ram.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Random Access Memory Card (RAM)</p>
                  <p className='text-[#4F7853] text-xl text-justify'>Computer’s short-term memory. It’s the
                    temporary memory space inside a
                    computer that allows it to stores data and
                    instructions that the CPU needs to access
                    quickly. RAM loses data when the
                    computer is turned off..</p>
                </div>
              </div>

              <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/gpu.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Graphics Processing Unit (GPU)</p>
                  <p className='text-[#4F7853] text-xl text-justify'>It is
                  designed to handle graphics-related
                  tasks. GPU focuses on processing
                  graphical data efficiently and quickly. It
                  helps make your visual experience on a
                  computer more vivid and immersive by
                  rendering images, videos, and
                  animations..</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-1 mx-auto">
                <div className="border-[1px] border-[#4F7853] max-w-[700px] w-full col-span-1 mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                    <Image src="/midterm-img/psu.jpg" width={350} height={999} alt=""/>
                  </div>
                  <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Power Supply Unit (PSU)</p>
                  <p className='text-[#4F7853] text-xl text-justify'>The heart
                  of a computer. It provides electrical
                  power that the computer needs. PSU
                  distributes the power through cables to
                  components in order to ensure that they
                  receive the right amount of electricity to
                  operate.</p>
                </div>
                </div>
              </div>
            </div>

            <div className="font-bold text-[#4F7853] text-4xl mt-6 mb-10 text-center">Storage Drives</div>

            <div className="grid grid-cols-2 gap-x-[50px] gap-y-[30px]">
            <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/hdd.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Hard Disk Drive (HDD)</p>
                  <p className='text-[#4F7853] text-xl text-justify'>It stores and retrieve
                  digital data. HDD are relatively large storage
                  capacities and affordable pricing compared to other
                  storage technologies. However, they tend to be
                  slower than SDD due to mechanical components.</p>
                </div>
              </div>

              <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/ssd.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Solid State Drive (SSD)</p>
                  <p className='text-[#4F7853] text-xl text-justify'>It stores and retrieve
                  digital data. It uses flash memory chips to store
                  data. SSDs allows to access and transfer data
                  much faster than HDDs, that results quicker boot
                  times, faster file transfers, and overall snappier performance
                  for the computer.</p>
                </div>
              </div>
            </div>

            <div className="font-bold text-[#4F7853] text-4xl mt-6 mb-10 text-center">External Computer Hardware</div>

            <div className="grid grid-cols-2 max-[1330px]:grid-cols-1 gap-x-[50px] gap-y-[30px]">
              <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/monitor.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Monitor</p>
                  <p className='text-[#4F7853] text-xl text-justify'>Screens used to display visual
                    output information for computers. It allows
                    users to view and interact with software
                    applications, websites, videos, and other
                    digital content. It is essential peripherals
                    for computers, providing visual
                    interference that enables user to see and
                    interact with the output.</p>
                </div>
              </div>

              <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/mouse.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Mouse</p>
                  <p className='text-[#4F7853] text-xl text-justify'>It is a handheld input 
                    device used to control the cursor on a computer screen. 
                    By moving it across a surface, users can interact with 
                    software applications, selecting, clicking, dragging, and performing 
                    various actions within graphical user interfaces.</p>
                </div>
              </div>

              <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/keyboard.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Keyboard</p>
                  <p className='text-[#4F7853] text-xl text-justify'>It is a fundamental tool for
                    interacting with computers, enabling users
                    to input information and navigate through
                    various tasks efficiently. Keyboards may
                    include additional features such as
                    multimedia controls, programmable keys,
                    and ergonomic designs for enhanced
                    comfort during typing.</p>
                </div>
              </div>

              <div className="border-[1px] border-[#4F7853] w-full mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                <div className="h-full">
                    <Image src="/midterm-img/speakers.jpg" width={9999} height={999} alt=""/>
                  </div>
                </div>
                <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Speakers</p>
                  <p className='text-[#4F7853] text-xl text-justify'>It is an output devices for computers,
                    converting audio signals into sound waves.
                    They allow users to listen to music, watch videos, play games, 
                    and engage in voice calls with clear audio output.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-1 mx-auto">
              <div className="border-[1px] border-[#4F7853] max-w-[700px] w-full col-span-1 mb-5 flex">
                <div className="border-[0px] border-[#4F7853] w-[40%]">
                    <Image src="/midterm-img/microphone.jpg" width={350} height={999} alt=""/>
                  </div>
                  <div className='w-[60%] p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">Microphone</p>
                  <p className='text-[#4F7853] text-xl text-justify'>It captures audio, converting it 
                    into digital signals for computer processing and recording. It's widely used for 
                    voice calls, video conferencing, recording, speech recognition, and other audio tasks, 
                    enabling communication and interaction with software requiring audio input.</p>
                </div>
                </div>
              </div>
            </div>

            <div className="font-bold text-[#4F7853] text-4xl mt-12 mb-10 text-center">Generation and Advancements</div>

            <div className="border-[1px] border-[#4F7853] w-full overflow-hidden">
            <div className="h-full w-full flex">
              <div className='grid grid-cols-2 max-[970px]:grid-cols-1'>
                <div className='grid grid-cols-2 gap-x-[10px] max-[1330px]:grid-cols-1'>
                  <div className='h-full'>
                    <Image src="/midterm-img/microphone.jpg" width={400} height={999} alt='' className='w-full h-full object-cover'/>
                  </div>
                  <div className='h-full'>
                    <Image src="/midterm-img/microphone.jpg" width={400} height={999} alt='' className='w-full h-full object-cover'/>
                  </div>
                </div>
                <div className='p-4'>
                  <p className="font-bold text-[#4F7853] text-2xl text-center mb-4">1st Generation (Vacuum Tube)</p>
                  <p className='text-[#4F7853] text-xl text-justify'><span className='font-bold'>Inventor </span>Sir John Ambrose Fleming, a British electrical engineer, is
                    credited with inventing the first practical vacuum tube called the "Fleming
                    valve" in 1904. This device was essentially a diode, allowing current to
                    flow in only one direction.</p>
                    <p className='text-[#4F7853] text-xl text-justify mt-4'><span className='font-bold'>History </span>After Fleming's invention, Lee De Forest, an American inventor,
                    further developed the vacuum tube by introducing the "audion" in 1906.
                    The Audion was the first device capable of amplifying electrical signals,
                    paving the way for numerous applications in radio communication,
                    broadcasting, and early computing.</p>
                    <p className='text-[#4F7853] text-xl text-justify mt-4'><span className='font-bold'>Uses </span>Vacuum tubes were used for a number of things like amplifying
                    signals that allowed them to be used in equipments like audio amplifiers,
                    TV sets, radio reception (AM and FM), radio transmitters, radar, and more.</p>
                </div>
              </div>
            </div>
            </div>

            <div className="font-bold text-[#4F7853] text-3xl mt-4 mb-3">Advantages</div>
            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
              <li className='mt-2'>
              <span className="font-bold">Amplification: </span> They amplify signals with relatively low
                distortion, making them suitable for audio applications like
                amplifiers and high-fidelity equipment.
              </li>
              <li className='mt-2'>
              <span className="font-bold">High Voltage Handling: </span> It can handle high voltage levels,
                making them suitable for high-power applications such as
                radio transmitters and power amplifiers.
              </li>
              <li className='mt-2'>
              <span className="font-bold">Durability: </span> Vacuum tubes are relatively robust and less
                susceptible to damage from electrical surges compared to
                semiconductor devices.
              </li>
              <li className='mt-2'>
              <span className="font-bold">Warm Sound: </span> Audiophiles often prefer the sound produced
                by vacuum tube amplifiers, which is described as warm and
                pleasant.
              </li>
              <li className='mt-2'>
              <span className="font-bold">High-Temperature Operation: </span> Vacuum tubes can operate
                at high temperatures without significant degradation in
                performance, which is advantageous in certain applications.
              </li>
              <li className='mt-2'>
              <span className="font-bold">Programmable ROM (PROM)</span> is a memory chip that allows data to be written just
                once. The PROM is a sensitive material that is easily destroyed, leaving it unusable if
                the information is stored incorrectly. Programming ROM, also known as burning
                ROM, uses a specialized equipment known as a ROM burner or ROM programmer.
              </li>
            </ul>

            <div className="font-bold text-[#4F7853] text-3xl mt-4 mb-3">Disadvantages</div>
            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
              <li className='mt-2'>
              <span className="font-bold">Size and Weight: </span> Vacuum tubes are large and heavy,
                making them impractical for portable devices and
                contributing to larger overall system sizes.
              </li>
              <li className='mt-2'>
              <span className="font-bold">Power Consumption: </span> It Require significant power to
                operate and generate heat, leading to higher energy
                consumption and the need for additional cooling measures.
              </li>
              <li className='mt-2'>
              <span className="font-bold">Limited Lifespan: </span> Vacuum tubes have a finite lifespan and
                can degrade over time, requiring periodic replacement and
                maintenance.
              </li>
              <li className='mt-2'>
              <span className="font-bold">Fragility: </span> Vacuum tubes are relatively fragile and can be
                damaged by physical shocks or vibrations, making them less
                suitable for rugged environments.
              </li>
              <li className='mt-2'>
              <span className="font-bold">Cost: </span> They can be expensive to manufacture and procure,
                especially for specialized or high-performance variants,
                contributing to higher equipment costs.
              </li>
            </ul>












































































<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


            <div className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
              One kind of storage medium that keeps data permanently is read-only memory (ROM). This often includes the programming required for a device to boot up.
              Information can only be "read" from this kind of memory. It retains data indefinitely, even when the ROM is not powered.
              Any stateful memory that remains after a live user session end can be referred to as non-volatile memory.
              </div>

            <div className="font-bold text-[#4F7853] text-xl mt-10 mb-3">Types of ROM</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-start md:place-items-center mt-4">
            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
              <li>
              <span className="font-bold">Programmable ROM (PROM)</span> is a memory chip that allows data to be written just
                once. The PROM is a sensitive material that is easily destroyed, leaving it unusable if
                the information is stored incorrectly. Programming ROM, also known as burning
                ROM, uses a specialized equipment known as a ROM burner or ROM programmer.
              </li>
              <li className='mt-3'>
                <span className="font-bold">Erasable PROMs (EPROMs)</span>can be erased with ultraviolet light and reprogrammed
                using an EPROM programmer.
                <br />
                <span className="font-bold">Ultraviolet Erasable PROM (UV-EPROM)</span> A popular form of EPROM. To erase
                  the contents of a UV-EPROM, it needs to be exposed to UV rays for 5-20 minutes
                  through a window on the chip. However, the problem with UV-EPROM is that it
                  cannot be deleted or written when on the system board. EEPROM was designed
                  to address this issue.
              </li>
            </ul>

            <div className='border-4 border-[#4F7853] rounded-[35px] p-2 sm:w-[300px] sm:h-[200px] md:w-[300px] md:h-[160px] lg:w-[450px] lg:h-[250px] xl:w-[600px] xl:h-[300px]'>
              <div className="p-4">
                <Image
                      src="/midterm-img/1.png"
                      width={700}
                      height={10}
                      alt=""
                      className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto"
                    />
                  </div>
                </div>
            </div>

            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5 mt-2">
              <li className='mt-4'>
                  <span className="font-bold">Electrically EPROM (EEPROM)</span>can be erased by applying specific voltage to one of
                its pins and can be reprogrammed with an EPROM programmer. EEPROM has
                various advantages over EPROM, including the fact that it erases electrically and
                hence instantly, as opposed to UV-EPROM's 20-minute erasing period.
                Furthermore, unlike UV-EPROM, which erases the full contents of the ROM,
                EEPROM allows the user to decide which byte to erase. Example: NAND Flash
                Memory and BIOS
              <br />
              <span className="font-bold"> Flash Memory</span> Flash ROM was originally designed to allow changes to the
                contents of PROM after it has been burned. It is a nonvolatile memory that has a
                wide range of applications such as flash drive, solid-state drive, memory card,
                and embedded system. It is a type of EEPROM that allows multiple memory
                location to be written or erased on one (1) operation. The main difference
                between EEPROM and Flash memory is that when the contents of Flash memory
                are erased, the entire device is deleted, as opposed to EEPROM, which allows
                one to erase only a specified byte. There are two (2) types of technology used for
                flash memory: NAND and NOR flash memories. NAND flash memory has less
                access time than NOR flash memory. Most flash memories use NAND
                technology.
              </li>
            </ul> 
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-start md:place-items-center mt-4">
            <div className="flex justify-center items-center border-4 border-[#4F7853] rounded-[35px] mt-[50px] p-2 sm:w-[300px] sm:h-[200px] md:w-[300px] md:h-[160px] lg:w-[450px] lg:h-[250px] xl:w-[600px] xl:h-[300px]">
              <div className="p-4">
                <Image
                  src="/midterm-img/image2.png"
                  width={350}
                  height={10}
                  alt=""
                  className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto"
                />
              </div>
            </div>

            
            <div>
              <p className="font-bold text-[#4F7853] text-3xl mt-8 mb-6">What is computer bottlenecking?</p>
              <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
                <p>It is the delay in transmission of data through the circuits of a computer’s microprocessor.
                The delay typically occurs when a system’s bandwidth cannot support the amount of
                information being relayed at the speed it is being processed. Many factors can create a
                bottleneck in a system as well. Most common causes of bottlenecking are:</p>
                <li className='mt-2'>
                  <span className="font-bold">Insufficient Memory:</span> If your RAM (Random Access Memory) is too small, it can
                  slow down overall performance.
                </li>
                <li className='mt-2'>
                  <span className="font-bold">Slow Hard Drive: </span>A slow storage drive (HDD) can bottleneck data transfer speeds.
                </li>
                <li className='mt-2'>
                  <span className="font-bold">Weak Processor (CPU): </span> If your CPU can’t keep up with demanding tasks, it
                  becomes a bottleneck.
                </li>
                <li className='mt-2'>
                  <span className="font-bold">Weak Graphics Card (GPU): </span> An underpowered GPU can limit graphical
                  performance, especially in gaming.
                </li>
              </ul>
            </div>
            </div>

            <p className="font-bold text-[#4F7853] text-3xl mt-8 mb-3">Memory Partitioning</p>
            <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
              <p>A partition is a defined area in memory that stores a program to be executed. The partition
              size defines the processes that could be executed in the specific partition. The number of
              partitions defined determines the number of processes that could run concurrently.</p>
              <li className='mt-2'>
                <span className="font-bold">Fixed Partitioning</span> Divides the main memory into many static partitions during
              system construction. A process can be loaded into a partition of the same or larger
              size. Compared to different memory allocation algorithms, fixed partitioning boasts
              several advantages. For starters, using it is simple and straightforward. Second, it is
              predictable, allowing the operating system to allocate the optimal amount of RAM
              to each task. Third, it improves system security and stability by preventing
              processes from accessing each other's memory area.
              </li>
              <li className='mt-2'>
                <span className="font-bold">Dynamic Partitioning</span> The partitions vary in length and number. When a process is
              brought into main memory, it is assigned only the amount of memory it needed.
              Dynamic Partitioning allocates space in main memory strictly based on the needs of
              the process, hence there is no internal fragmentation. There will be no unused
              space remaining in the division. More processes can be accommodated due to the
              lack of internal fragmentation, each process can be loaded until the memory is
              depleted. The process size cannot be controlled because the partition size is
              determined by the process size.
              - Possible outcomes: Small gaps in memory and external fragmentation
              </li>
            </ul>
            <div className="font-bold text-[#4F7853] text-3xl mt-8 mb-3">Virtual Memory</div>
            <div className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
              Virtual memory transformed computer systems by solving the limitation of physical
                memory via secondary memory utilization. It is used to store application data and
                instructions not currently being processed by the CPU.
                Virtual memory remains critical for multitasking and performance enhancement. This feat
                is accomplished by transferring data between RAM and disk storage, essentially treating
                primary and secondary memory as one. It also enables a system to run applications larger
                than the main memory.
                However, operating at slower speeds than RAM can cause system slowdowns, known as
                'thrashing.' Despite its shortcomings, virtual memory remains an important component for
                executing resource-intensive programs and providing multitasking capabilities.</div>
              <p className="font-bold text-[#4F7853] text-3xl mt-4 mb-3">Caching</p>
              <p className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
                Caching is a concept in system architecture that involves keeping frequently requested
                data in a location that is conveniently accessible. The idea behind this is to reduce access
                times and increase system efficiency and performance.
                The name was used to symbolize the memory hierarchy level that exists between the main
                memory and the CPU. Any storage able to benefit from locality of reference is also called
                "caching." Its characteristics include increased capacity, decreased latency, and cache
                availability. Caching thus becomes a vital component in maximizing system
                responsiveness and functionality.</p>
                <p className="font-bold text-[#4F7853] text-3xl mt-4 mb-3">Types of Cache Memory</p>
                <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
                  <li>
                    <span className="font-bold">L1 Cache (Primary Cache)</span> This cache level is as fast as the processor because it
                    is embedded in the processor.
                    </li>
                  <li>
                    <span className="font-bold">L2 Cache (External Cache)</span> This cache level is used to catch recent data access
                    from the processor not caught by Level 1.
                      </li>
                  <li>
                    <span className="font-bold">L3 Cache (Shared Cache)</span> This cache catches the recent data all across CPU
                    cores; this is usually slower than L1 and L2.
                      </li>
                </ul>
                <p className="font-bold text-[#4F7853] text-3xl mt-4 mb-3">Locality of Reference</p>
                <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-5">
                  <li>
                    <span className="font-bold">Temporal Locality</span> A resource that is referenced at one (1) point in time is
                    referenced again soon after.
                    </li>
                  <li>
                    <span className="font-bold">Spatial Locality</span> The likelihood of referencing a storage location is greater if a
                    storage location near it has been recently referenced.
                      </li>
                      <p>Accessing a cache is based on the following predictions:</p>
                  <li>
                    <span className="font-bold">Cache Hit</span> - looking for the same piece of data again.
                      </li>
                      <li>
                    <span className="font-bold">Cache Miss</span> - data that isn’t in the cache; it causes latency and delay.
                      </li>
                </ul>
          </div>
        </div>
      </div>
  );
}

export default page;
