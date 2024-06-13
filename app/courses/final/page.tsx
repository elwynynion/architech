import React from "react";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="bg-[#FFFEFA] h-[100vh]">
      <div className="container px-5">
        <Navigation name="courses" />

        <div className="border-4 border-[#4F7853] rounded-[35px] p-10">
          <h1 className="text-3xl font-bold text-[#4F7853] mb-4">
            Finals Lesson 1
          </h1>

          <div className="font-bold text-[#4F7853] text-6xl mb-4 text-center">
            Computer Storage
          </div>

          <div className="border-[1px] border-[#4F7853] mb-5"></div>

          <div className="font-bold text-[#4F7853] text-4xl mt-12 ml-4 mb-3">
            Storage Device
          </div>
          <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc mx-4 p-4">
            A Storage Device is a piece of computer equipment used to save,
            move, or retrieve data files and items, whether temporarily or
            permanently. These devices can be inside or outside a computer,
            server, or other computing tools. They store digital content like
            images, videos, and audio and are referred to as storage media.
          </p>
          <p className="text-[#4F7853] text-2xl tracking-wide text-justify list-disc mx-4 p-4">
            Data stored on a backing storage device can be accessed using three
            methods: direct access (also known as random access), serial access,
            and sequential access.
          </p>

          <ul className="text-[#4F7853] text-xl tracking-wide text-justify list-disc ml-6 px-12">
            <li className="mt-5">
              <span className="font-bold">Direct Access (Random Access) </span>{" "}
              This method allows the reading or writing head to move directly to
              any point on the storage medium, like a hard disk or CD-ROM. It's
              fast because it can quickly locate and access specific records or
              files.
            </li>
            <li className="mt-5">
              <span className="font-bold">Serial Access </span> In this method,
              the reading head has limited movement, typically found in magnetic
              tapes. To access a specific record, it must scan through all the
              data before it. This can be slow, so it's mainly used for tasks
              like backup and batch processing, where speed isn't critical.
            </li>
            <li className="mt-5">
              <span className="font-bold">Sequential Access</span> Similar to
              serial access, but the records are stored in a particular order,
              like by customer number. This can speed up tasks like searching
              the tape and is commonly used in batch processing systems.
            </li>
          </ul>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-6 pb-4 shadow-xl">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Hierarchy of Storage
            </div>

            <ul className="text-[#4F7853] text-xl tracking-wider text-justify list-disc mt-6 px-12">
              <p>
                Storage devices are essential parts of computers that hold data
                and applications. They come in different types, such as RAM,
                cache, hard disks, optical disk drives, and USB drives. There
                are three main categories of computer storage:
              </p>
              <li className="mt-2">
                <span className="font-bold ">Primary Storage</span>
                it is the direct memory accessible to the Central Processing
                Unit (CPU). It is volatile and temporary, getting erased when
                the device turns off or is rebooted. Examples include RAM and
                cache memory. memory area.
              </li>
              <li className="mt-2">
                <span className="font-bold">Secondary Storage</span> it doesn't
                have direct accessibility to the CPU. It uses input and output
                channels to connect to the computer, mainly external. It is
                non-volatile and has a larger storage capacity compared to
                primary storage. Examples include USB drives, floppy disks, etc.
              </li>
              <li className="mt-2">
                <span className="font-bold">Tertiary Memory</span> it is
                generally not considered important and is not typically found in
                personal computers. It involves mounting and unmounting mass
                storage data that is removable from a computer device. Tertiary
                storage often handles robotic functions and can function
                automatically without human intervention.
              </li>
            </ul>
          </div>

          <div className="px-7 mt-20">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Kind of Storage
            </div>
            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 mt-6 pr-12">
              <span className="font-bold text-2xl">Magnetic storage </span>
              is crucial for storing data reliably, using magnetism to store
              digital information on tapes or disks. Magnetic disks, like hard
              drives, are flat discs with a magnetic coating where data is
              stored. Cheaper than RAM, they can store large amounts of data,
              albeit with slower access times.
            </div>

            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 mt-6 pr-12">
              <span className="font-bold text-2xl">Magnetic Disks </span>
              consist of one or more flat, circular platters made of glass,
              metal, or plastic, coated with a magnetic substance.
              Electromagnets polarize particles within this substance,
              distinguishing between 1’s and 0’s. A drive motor rotates the disk
              platter(s), while an arm with a read/write head services the
              surfaces of adjoining platters.
            </div>

            <ul className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-12 pr-12">
              <li className="mt-2">
                Tracks are traced out on the disk surface as it rotates, forming
                cylinders across surfaces.
              </li>
              <li className="mt-2">
                Each track contains one or more blocks of data, typically
                divided into sectors.
              </li>
              <li className="mt-2">
                Sectors, traditionally viewed as equally sized pie-shaped
                segments, contain data blocks, typically 512 or 4,096 bytes
                each.
              </li>
            </ul>

            <p className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 mt-8 pr-12">
              Magnetic storage creates, reads, and erases tiny magnetized dots
              using electromagnets. These dots are utilized in devices such as:
            </p>
            <ul className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-12">
              <li className="mt-2">
                <span className="font-bold"> Floppy Disk</span>
                Square-shaped removable storage, largely replaced by CDs, DVDs,
                and USB drives.
              </li>
              <li className="mt-2">
                <span className="font-bold"> Hard Drive</span>
                Directly connected to the motherboard, used for installing
                programs and storing various files.
              </li>
              <li className="mt-2">
                <span className="font-bold"> Zip Disk</span>
                Initially with 100 MB capacity, later increased to 250 and 750
                MB.
              </li>
              <li className="mt-2">
                <span className="font-bold"> Magnetic Strip</span>
                Stores digital data, like those on debit cards.
              </li>
            </ul>

            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 mt-12 pr-12">
              <p>
                Magnetic storage devices offer affordability and accessibility,
                enabling the storage of large amounts of data using magnetized
                mediums.
              </p>
              <p className="mt-12">
                <span className="font-bold text-2xl">Solid State Memory </span>
                is a solid-state storage medium that utilizes volatile memory
                for holding and accessing data. Based on NAND Flash chips, it
                differs from RAM in terms of usage and volatility. Flash
                memory's compact size, low power consumption, and lightweight
                nature make it well-suited for secondary storage in both
                long-term system storage and portable devices. These
                characteristics contribute to its preference as a storage medium
                for various applications, including those requiring quick access
                to stored data, driving the increasing pace of its adoption, as
                seen in advancements like NVMe SSDs with higher and faster data
                reads/writes.
              </p>
            </div>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-3xl mt-20 mb-3">
              There are three kinds of Optical Media:
            </div>
            <p className="text-[#4F7853] text-xl tracking-wider text-justify list-disc px-12">
              The main difference between CD, DVD and Blu-Ray or BD are their
              storage capacity and the type of data that each optical disc can
              store.
            </p>

            <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-[40%,55%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center p-4">
                <div className="relative">
                  <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                  <div className="w-full relative">
                    <Image
                      src="/finals-img/firstgencd.jpg"
                      width={2100}
                      height={10}
                      alt=""
                      className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                    />
                  </div>
                </div>

                <div className="text-[#4F7853] text-xl tracking-wide">
                  <p className="font-bold text-[#4F7853] text-3xl text-center">
                    First Generation - Compact Disc (CD)
                  </p>
                  <br />
                  <p className="text-justify">
                    They are the oldest types of optical discs. It was the first
                    step towards the idea of digital encoding of the data. It
                    uses a unique method of encoding in which a 14-bit code
                    indicates a byte, and this encoding technique also helps in
                    error detection. It was a suitable replacement for the
                    magnetic disk as it offered a low-cost solution for storing
                    a significant amount of data.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-[55%,40%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center mt-4 p-4">
                <div className="text-[#4F7853] text-xl tracking-wide">
                  <p className="font-bold text-[#4F7853] text-3xl text-center">
                    Second Generation - DVD (Digital Versatile Disc)
                  </p>
                  <br />
                  <p className="text-justify">
                    Also known as Digital Video Disc; its most well-known
                    commercial application is for playing back recorded motion
                    pictures and television programs (hence the name “digital
                    video disc”). Though read-only, recordable, and even
                    erasable and rewritable versions can be used on personal
                    computers to store large quantities of almost any kind of
                    data (hence “digital versatile disc”).
                  </p>
                </div>

                <div className="relative">
                  <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                  <div className="w-full relative">
                    <Image
                      src="/finals-img/secondgendvd.jpg"
                      width={2100}
                      height={9999}
                      alt=""
                      className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-[40%,55%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center p-4">
                <div className="relative">
                  <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                  <div className="w-full relative">
                    <Image
                      src="/finals-img/thirdgen.jpg"
                      width={2100}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                    />
                  </div>
                </div>

                <div className="text-[#4F7853] text-xl tracking-wide">
                  <p className="font-bold text-[#4F7853] text-3xl text-center">
                    Third Generation - BD (Blu-Ray Disc)
                  </p>
                  <br />
                  <p className="text-justify">
                    Blu-ray represents the third generation of compact disc (CD)
                    technology, after audio CDs and digital video discs (DVDs).
                    In all three technologies, data is stored on a plastic disc
                    120 millimeters (4.75 inches) in diameter. The data is
                    encoded in pits that form a spiral track on the disc. A blue
                    violet laser (hence the name Blu-Ray) emitting at a
                    wavelength of 405 nanometers, reads the pits. Because the
                    laser used in Blu-ray is of a shorter wavelength than that
                    used in DVDs (635 or 650 nanometers), the spiral track can
                    be more tightly wound. Thus, the Blu-ray disc can hold more
                    information than the DVD.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc p-7">
            <div className="font-bold text-2xl ">Magnetic Tapes </div>
            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc mt-4 px-12">
              One side of the ribbon is used for storing data. It is sequential
              memory which contains thin plastic ribbon to store data and coated
              by magnetic oxide. Data read/write speed is slower because of
              sequential access. It is highly reliable which requires magnetic
              tape drive writing and reading data. Magnetic tape is the old est
              storage medium for computers and is still in use today. Magnetic
              tape was developed in Germany in his 1928 year but was not used
              until 1951 in the Mauchly-Eckert UNIVAC I computer.
            </div>
            <ul className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-12 mt-6 px-12">
              <li>
                Like other magnetic media, tape is nonvolatile, and, under
                proper storage conditions, the data can be stored indefinitely.
                Generally, full system backups are made to tape and are moved to
                off-site locations for long-term storage. Tape is stored in a
                cartridge using a standard format called LTO (linear tape open).
              </li>
              <li>
                As the amount of data continues to grow exponentially, tape is a
                good option for storing large volumes of data. Industries that
                create sizable amounts of data each day, such as those in the
                media, entertainment and sciences sectors, often use tape as a
                low-cost storage option. Off-site and offline LTO tape is an
                option for disaster recovery. While disk-based backups provide
                quicker recovery, tape has the advantage of being offline.
                Transferring terabytes of data to the cloud, for example, can
                take much longer over a network than with an LTO tape.
              </li>
            </ul>

            <div className="font-bold text-[#4F7853] text-2xl mb-3 mt-6">
              How magnetic tapes work
            </div>
            <p className="text-[#4F7853] text-xl tracking-wider text-justify list-disc px-12">
              Magnetic tapes convert electrical audio signals into magnetic
              energy, thereby serving as the basis of their working principle.
              The conversion imprints such signals onto the tape; as the tape
              moves over magnetic heads, the magnetic particles cause the pulses
              to align into patterns, causing sound production. The tape is
              moved at a consistent speed using a tape machine. If the speed
              changes due to any reason whatsoever, whether faulty motors or
              improper settings, it will distort the pitch. Playback is achieved
              by converting the recording on tape back into electrical energy to
              be amplified.
            </p>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-8 shadow-xl">
            <div className="font-bold text-[#4F7853]  text-3xl mb-3">
              Disk Controller
            </div>
            <p className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5">
              A Disk Controller is a hardware component or subsystem responsible
              for managing the communication between a computer's central
              processing unit (CPU) and its disk storage devices. It acts as an
              interface between the CPU and the disk drives, facilitating data
              transfer and controlling the operation of the storage devices.
            </p>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-2xl mt-20 mb-3">
              These are the types of disk controllers that is used in storage
              divices:
            </div>

            <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-[40%,55%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center p-4">
                <div className="relative">
                  <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[30px] right-[8px] z-0 shadow-2xl"></div>
                  <div className="w-full relative">
                    <Image
                      src="/finals-img/pata.jpg"
                      width={600}
                      height={10}
                      alt=""
                      className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                    />
                  </div>
                </div>

                <div className="text-[#4F7853] text-xl tracking-wide">
                  <p className="font-bold text-[#4F7853] text-[26px] text-center">
                    Parallel Advanced Technology Attachment (PATA)
                  </p>
                  <br />
                  <p className="text-justify">
                    Also known as Parallel ATA or IDE (Integrated Drive
                    Electronics), is an older technology used for connecting
                    storage devices like hard disk drives and CD/DVD drives to a
                    computer's motherboard. PATA was widely used in personal
                    computers before being largely replaced by Serial ATA (SATA)
                    in the mid-2000s.
                  </p>
                  <p className="text-justify">
                    PATA uses a parallel communication method, where multiple
                    bits of data are transmitted simultaneously over multiple
                    wires. This is in contrast to SATA, which uses a serial
                    communication method, transmitting data one bit at a time
                    over a single wire. PATA cables are typically wider and
                    thicker than SATA cables due to the multiple wires required
                    for parallel transmission.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-20">
              <div className="grid grid-cols-1 md:grid-cols-[55%,40%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center mt-4 p-4">
                <div className="text-[#4F7853] text-xl tracking-wide">
                  <p className="font-bold text-[#4F7853] text-[26px] text-center">
                    Serial Advanced Technology Attachment (SATA)
                  </p>
                  <br />
                  <p className="text-justify">
                    A type of interface used for connecting storage devices like
                    hard drives and solid-state drives (SSDs) to a computer's
                    motherboard. It replaced the older Parallel ATA (PATA)
                    interface due to its superior performance and efficiency.
                    SATA uses a serial communication method, which means data is
                    transmitted one bit at a time over a single wire, whereas
                    PATA used parallel communication, transmitting multiple bits
                    simultaneously over multiple wires.
                  </p>
                </div>

                <div className="relative">
                  <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                  <div className="w-full relative">
                    <Image
                      src="/finals-img/sata.jpg"
                      width={2100}
                      height={10}
                      alt=""
                      className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[40%,55%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center p-4">
                <div className="relative">
                  <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                  <div className="w-full relative">
                    <Image
                      src="/finals-img/scsi.jpg"
                      width={900}
                      height={10}
                      alt=""
                      className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                    />
                  </div>
                </div>

                <div className="text-[#4F7853] text-xl tracking-wide">
                  <p className="font-bold text-[#4F7853] text-[26px] text-center">
                    Small Computer System Interface (SCSI)
                  </p>
                  <br />
                  <p className="text-justify">
                    To access virtual disks, CD/DVD-ROM, and SCSI devices, a
                    virtual machine uses storage controllers, which are added by
                    default when you create the virtual machine. You can add
                    controllers or change the controller type after virtual
                    machine creation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 max-[1330px]:grid-cols-1 mt-20">
              <div className="grid grid-cols-1 md:grid-cols-[55%,40%] gap-x-[40px] gap-y-[30px] place-items-start md:place-items-center mt-4 p-4">
                <div className="text-[#4F7853] text-xl tracking-wide">
                  <p className="font-bold text-[#4F7853] text-[26px] text-center">
                    Serial Attached SCSI (SAS)
                  </p>
                  <br />
                  <p className="text-justify">
                    Find usage and maintenance information regarding controllers
                    for the serial-attached SCSI (SAS) Redundant Array of
                    Independent Disks (RAID) for the AIX® operating system. Use
                    this information in conjunction with your specific system
                    unit and operating system documentation.
                  </p>
                </div>

                <div className="relative">
                  <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                  <div className="w-full relative">
                    <Image
                      src="/finals-img/sas.jpg"
                      width={2100}
                      height={999}
                      alt=""
                      className="w-full h-full object-cover sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F9] mb-[10px] rounded-[20px] mt-20 p-8 pb-4 shadow-xl">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Hierarchy of Storage
            </div>
            <ul className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5">
              <li className="mt-2">
                <span className="font-bold ">Larger blocks </span>
                the controller can read larger quantities of data from the disk
                as compared with the amount requested by the application. The
                additional data is stored in buffers within the controller.
              </li>
              <li className="mt-2">
                <span className="font-bold">Pre-fetch </span>
                The controller can identify the application’s patterns of
                behavior. When an application reads the sectors sequentially,
                the controller can read the next blocks even before they are
                requested.
              </li>
              <li className="mt-2">
                <span className="font-bold">Access algorithms </span>
                These are procedures or methods used to retrieve specific
                information from a data structure efficiently. These algorithms
                are crucial in various fields like databases, operating systems,
                networking, and more, where quick access to data is necessary.
              </li>
              <li className="mt-2">
                <span className="font-bold">Disk array </span>A disk array
                (drive array) can be used to reduce the overall data access time
                by sharing the data among multiple disks. Fault tolerance is
                important in storage devices. A company with all its data should
                maintain proper function and operation despite an event of
                failure in one or more systems. To avoid data losses in the
                event of failure or fault, we can use RAID which stands for
                Redundant Array of Inexpensive Discs. The data is copied on
                multiple discs so that the data loss rate would be lessened.
              </li>
            </ul>
          </div>

          <div className="p-7 mt-20">
            <div className="font-bold text-[#4F7853] text-3xl mb-3">
              Storage Access Algorithms
            </div>

            <p className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5">
              A storage access algorithm, often used in computer science and
              data storage systems, refers to a method or set of rules
              determining how data is accessed and retrieved from storage
              devices like hard drives or solid-state drives (SSDs). These
              algorithms are crucial for optimizing data access performance,
              minimizing access time, and managing resources efficiently.
              Different algorithms prioritize various aspects, such as reducing
              seek time, minimizing latency, or maximizing throughput.
            </p>

            <div className="font-bold text-[#4F7853] text-2xl mb-3 mt-10">
              Common storage access algorithms include:
            </div>

            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 px-[50px] mt-10">
              <span className="font-bold">
                First Come First Serve Scheduling Algorithm{" "}
              </span>
              handles the requests based on their arrival order. The first
              request will be served first, followed by the second request, and
              so forth.
            </div>

            <div className="flex justify-center mt-6">
              <div className="relative w-[490px]">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="flex justify-center relative">
                  <Image
                    src="/finals-img/access1.jpg"
                    width={3000}
                    height={100}
                    alt=""
                    className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 px-[50px] mt-[80px]">
              <span className="font-bold">
                Shortest Time First Scheduling Algorithm
              </span>
              handles the requests based on their distance from the current head
              location. The first request to be handled is the closest one.
            </div>

            <div className="flex justify-center mt-10">
              <div className="relative w-[490px]">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="flex justify-center relative">
                  <Image
                    src="/finals-img/access2.jpg"
                    width={2100}
                    height={100}
                    alt=""
                    className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 px-[50px] mt-[80px]">
              <span className="font-bold">Scan Disk Scheduling Algorithm</span>
              is where the head starts at one (1) end of the disk (usually at
              cylinder) and, while moving to the other end, handles all the
              requests found along the way. When the head reaches the end of the
              disk, it starts its movement backward following the same
              mechanism, only this time the sorted numbers are handled from the
              largest downward.
            </div>

            <div className="flex justify-center mt-10">
              <div className="relative w-[490px]">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="flex justify-center relative">
                  <Image
                    src="/finals-img/access3.jpg"
                    width={2100}
                    height={100}
                    alt=""
                    className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 px-[50px] mt-[80px]">
              <span className="font-bold">Circular SCAN (C-SCAN)</span>
              is very similar to SCAN but with a minor change. The head starts
              at one (1) end (usually at the beginning of the disk) and, while
              moving to the end of the disk, handles all the requests it finds.
            </div>

            <div className="flex justify-center mt-10">
              <div className="relative w-[490px]">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="flex justify-center relative">
                  <Image
                    src="/finals-img/access4.jpg"
                    width={2100}
                    height={100}
                    alt=""
                    className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            <div className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5 px-[50px] mt-[80px]">
              <span className="font-bold">C-LOOK</span>
              algorithm is an improvement of C-SCAN. Unlike C-SCAN, which moves
              from the beginning of the disk to its end (even if there are no
              additional requests near the end), the head moves forward until it
              finds the request with the larger cylinder number.
            </div>

            <div className="flex justify-center mt-10">
              <div className="relative w-[490px]">
                <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
                <div className="flex justify-center relative">
                  <Image
                    src="/finals-img/access5.jpg"
                    width={2100}
                    height={100}
                    alt=""
                    className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-7 mt-20">
            <div className="font-bold text-[#4F7853] text-3xl  mb-3">
              Disk Arrays
            </div>

            <p className="text-[#4F7853] text-xl tracking-wider text-justify list-disc ml-5">
              A storage access algorithm, often used in computer science and
              data storage systems, refers to a method or set of rules
              determining how data is accessed and retrieved from storage
              devices like hard drives or solid-state drives (SSDs). These
              algorithms are crucial for optimizing data access performance,
              minimizing access time, and managing resources efficiently.
              Different algorithms prioritize various aspects, such as reducing
              seek time, minimizing latency, or maximizing throughput.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <div className="relative w-[500px]">
              <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-[20px] right-[8px] z-0 shadow-2xl"></div>
              <div className="flex justify-center relative">
                <Image
                  src="/finals-img/diskarray1.jpg"
                  width={2100}
                  height={100}
                  alt=""
                  className="w-full h-auto object-contain sm:w-auto md:w-auto lg:w-auto xl:w-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="p-7">
            <div className="font-bold text-[#4F7853] text-2xl  mb-3">
              Cloud Storage Technology
            </div>

            <div className="text-[#4F7853] text-xl mb-3 ml-4">
              With the rise of cloud computing and Software as a Service (SaaS),
              cloud storage has become the focus of attention in information
              storage. It, unlike traditional storage, comprises not only
              hardware devices, but is a system of network and storage
              equipment, server, application software, public access interface,
              access network, and client programs. Since its introduction, cloud
              storage has attracted great interest from service providers.
            </div>
          </div>

          <Link href={"/courses/midterm/lesson2"}>{">"}</Link>
        </div>
      </div>
    </div>
  );
}

export default page;
