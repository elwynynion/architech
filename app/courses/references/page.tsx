import Navigation from "@/components/shared/Navigation";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="bg-[#FFFEFA]">
      <div className="container text-[#4F7853] overflow-clip">
        <Navigation name="reference" />
        <div className="border-4 border-[#4F7853] max-[450px]:p-0 max-[450px]:border-0  rounded-[35px] p-6 pt-8">
          <h1 className="text-[#4F7853] font-bold text-[35px] text-center">
            References
          </h1>
          <div className="relative">
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-l-[10px] border-t-transparent border-r-0 border-b-transparent left-0 absolute top-[-9px]"></div>
            <hr className="border-[1px] border-[#4F7853]" />
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-r-[10px] border-t-transparent border-l-0 border-b-transparent right-0 absolute top-[-9px]"></div>
          </div>
          <div className="max-w-[1000px] mx-auto">
            <div className="mt-8">
              <h1 className="font-bold text-[#4F7853] text-[24px]">Prelim</h1>
              <p className="">
                Anderson, J. R. (2010). Cognitive psychology and its
                implications (7th ed.). Worth Publishers.
                <br />
                Baker, A. B., & Silverstein, M. J. (2016). The rise of social
                media and its impact on society. Journal of Social Media
                Studies, 12(2), 45-60. https://doi.org/10.1016/jsms.2016.02.003
                <br />
                Brown, L. M., & Green, S. T. (2018). Analyzing the environmental
                impact of urban sprawl. Urban Ecology Review, 25(1), 87-102.
                <br />
                Chomsky, N. (2013). On anarchism. New Press. Diaz, C. R. (2021).
                Modern architecture: A critical history. Thames & Hudson. Ellis,
                <br />
                J. M., & Harper, D. (2019). The evolution of video gaming
                culture. Gaming Studies Quarterly, 8(4), 211-230.
                <br />
                Fisher, M. (2015, June 23). The impact of climate change on
                coral reefs. National Geographic.
                <br />
                Anderson, J. R. (2010). Cognitive psychology and its
                implications (7th ed.). Worth Publishers. Baker, A. B., &
                Silverstein, M. J. (2016). The rise of social media and its
                impact on society. Journal of Social Media Studies, 12(2),
                45-60. https://doi.org/10.1016/jsms.2016.02.003 Brown, L. M., &
                Green, S. T. (2018). Analyzing the environmental impact of urban
                sprawl. Urban Ecology Review, 25(1), 87-102. Chomsky, N. (2013).
                On anarchism. New Press. Diaz, C. R. (2021). Modern
                architecture: A critical history. Thames & Hudson. Ellis, J. M.,
                & Harper, D. (2019). The evolution of video gaming culture.
                Gaming Studies Quarterly, 8(4), 211-230. Fisher, M. (2015, June
                23). The impact of climate change on coral reefs. National
                Geographic. National Aeronautics and Space Administration.
                (2019). NASA{"'"}s lunar exploration program overview. Olson, M.
                (1965). The logic of collective action: Public goods and the
                theory of groups. Harvard University Press. Park, R. E., &
                Burgess, E. W. (1921). Introduction to the science of sociology.
                University of Chicago Press. Robinson, K. (2010, February 15).
                Bring on the learning revolution! [Video]. TED Conferences.
                Smith, J. A., & Brown, R. W. (2015). Advancements in renewable
                energy technology. Renewable Energy Journal, 34(2), 199-213.
              </p>
            </div>

            <div className="mt-6">
              <h1 className="font-bold text-[#4F7853] text-[24px]">Midterm</h1>
              <p className="text-[#4F7853] ">
                What is a Register in a CPU and How Does it Work? (2023,
                November 3). Total Phase Blog.
                https://www.totalphase.com/blog/2023/05/what-is-register-in-cpu-how-does-it-work/
                <br />
                GeeksforGeeks. (2023, July 9). Computer Organization Von Neumann
                architecture. GeeksforGeeks.
                https://www.geeksforgeeks.org/computer-organization-von-neumann-architecture/
                <br />
                GeeksforGeeks. (2023a, April 4). Harvard Architecture.
                GeeksforGeeks.
                https://www.geeksforgeeks.org/harvard-architecture/
                <br />
                architecture
                <br />
                GeeksforGeeks. (2023, August 3). Computer memory. GeeksforGeeks.
                https://www.geeksforgeeks.org/computer-memory/
                <br />
                Volatile vs Nonvolatile Memory: What&apos;s the Difference?
                (n.d.). C&T Solution Inc.
                <br />
                <br />
                How the read and write operations are performed by a processor?
                Explain? (2020, December 31). Sarthaks eConnect | Largest Online
                Education Community.
                https://www.sarthaks.com/1020421/how-the-read-and-write-operations-are-performed-
                by-a-processor-explain
                <br />
                Chaitanya. (2023, November 14). Different Types of RAM That Run
                Today&apos;s Computers. ElectronicsHub USA.
                https://www.electronicshub.org/types-of-ram/
                <br />
                4 MB FPM-RAM 72-pin PS/2 Memory 70 ns non-Parity &quot;MSC
                9321000A-70&quot; | eBay. (n.d.). eBay.
                https://www.ebay.it/itm/185505788395?mkevt=1&mkcid=1&mkrid=724-53478-
                19255-0&campid=5338722076&customid=&toolid=10050
                <br />
                File:Sdram edoram b.jpg - Wikimedia Commons. (2005, July 6).
                https://commons.wikimedia.org/wiki/File:Sdram_edoram_b.jpg
                <br />
                Christensson, P. (2023, August 31). SDRAM.
                https://techterms.com/definition/sdram
                <br />
                SAMSUNG 1x 512MB PC800-40 16-bit ECC 184-pin RDRAM RIMM RAMBUS
                MR18R162GAF0-CM8. (n.d.).
                https://www.techyparts.com/parts-components/samsung-
                1x-512mb-pc800-40-16-bit-ecc-184-pin-rdram-rimm-rambus-mr18r162gaf0-cm8.html
                <br />
                Hawthorne, M. (2022, August 9). What is DDR SDRAM (Double Data
                Rate Synchronous Dynamic Random Access Memory)? Technipages.
                https://www.technipages.com/what-is-ddr-sdram-double-data-rate-synchronous-dynamic-random-access-memory/
                <br />
                Vskills, T. (2024, April 12). Memory packaging. Tutorial.
                https://www.vskills.in/certification/tutorial/memory-packaging-2/
                <br />
                What is Read-Only Memory (ROM)? - Definition from Techopedia.
                (2019). Techopedia.com.
                https://www.techopedia.com/definition/2804/read-only-memory-rom
                <br />
                Types of ROM | PROM, EPROM, EEPROM, Flash EPROM & Mask ROM.
                (2017, June 1). StudyElectrical.com.
                https://studyelectrical.com/2017/06/different-types-of-rom-prom-
                eprom.html
                <br />
                Phillips, G. (2021, October 6). What Is Bottlenecking My PC &
                How Do I Fix It? MUO.
                https://www.makeuseof.com/what-is-bottlenecking-my-pc-how-do-i-fix-it/
                <br />
                Fixed (or static) Partitioning in Operating System -
                GeeksforGeeks. (2019, January 31). GeeksforGeeks.
                https://www.geeksforgeeks.org/fixed-or-static-partitioning-in-operating-
                system/
                <br />
                Variable (or dynamic) Partitioning in Operating System -
                GeeksforGeeks. (2018, October 17). GeeksforGeeks.
                https://www.geeksforgeeks.org/variable-or-dynamic-partitioning-in-
                operating-system/
                <br />
                Virtual Memory: Overcoming the Limitations of Physical Memory.
                (n.d.). Spiceworks.
                <br />
                Caching - System Design Concept For Beginners. (2021, March 4).
                GeeksforGeeks.
                https://www.geeksforgeeks.org/caching-system-design-concept-for-beginners/
                <br />
                Gemo, E. (2021). The design and analysis of novel integrated
                phase-change photonic memory and computing devices.
                ResearchGate. https://doi.org/10.13140/RG.2.2.20451.89124
              </p>
              <p>
                GeeksforGeeks. (2023, August 3). Computer memory. GeeksforGeeks.
                https://www.geeksforgeeks.org/computer-memory/
                <br />
                Volatile vs Nonvolatile Memory: What&apos;s the Difference?
                (n.d.). C&T Solution Inc.
                https://www.candtsolution.com/news_events-detail/volatile-vs-nonvolatile-memory-difference/
                <br />
                https://www.spiceworks.com/tech/hardware/articles/what-is-ram/
                <br />
                How the read and write operations are performed by a processor?
                Explain? (2020, December 31). Sarthaks eConnect | Largest Online
                Education Community.
                https://www.sarthaks.com/1020421/how-the-read-and-write-operations-are-performed-by-a-processor-explain
                <br />
                Chaitanya. (2023, November 14). Different Types of RAM That Run
                Today&apos;s Computers. ElectronicsHub USA.
                https://www.electronicshub.org/types-of-ram/
                <br />4 MB FPM-RAM 72-pin PS/2 Memory 70 ns non-Parity “MSC
                9321000A-70” | eBay. (n.d.). eBay.
                https://www.ebay.it/itm/185505788395?mkevt=1&mkcid=1&mkrid=724-53478-19255-0&campid=5338722076&customid=&toolid=10050
                <br />
                File:Sdram edoram b.jpg - Wikimedia Commons. (2005, July 6).
                https://commons.wikimedia.org/wiki/File:Sdram_edoram_b.jpg
                <br />
                Christensson, P. (2023, August 31). SDRAM.
                https://techterms.com/definition/sdram SAMSUNG 1x 512MB PC800-40
                <br />
                16-bit ECC 184-pin RDRAM RIMM RAMBUS MR18R162GAF0-CM8. (n.d.).
                https://www.techyparts.com/parts-components/samsung-1x-512mb-pc800-40-16-bit-ecc-184-pin-rdram-rimm-rambus-mr18r162gaf0-cm8.html
                <br />
                Hawthorne, M. (2022, August 9). What is DDR SDRAM (Double Data
                Rate Synchronous Dynamic Random Access Memory)? Technipages.
                https://www.technipages.com/what-is-ddr-sdram-double-data-rate-synchronous-dynamic-random-access-memory/
                <br />
                Vskills, T. (2024, April 12). Memory packaging. Tutorial.
                https://www.vskills.in/certification/tutorial/memory-packaging-2/
              </p>
            </div>

            <div className="mt-6">
              <h1 className="font-bold text-[#4F7853] text-[24px]">
                Pre-final
              </h1>
              <p>
                Galaxy Wire & Cable. (2023, November 4). Ribbon cable, ribbon
                wire [Image]. Galaxy Wire & Cable, Inc. Retrieved from
                https://www.galaxywire.com/applications/ribbon-cable/ on May 12,
                2024
                <br />
                E., & E. (2023, October 3). Why Do We Use Copper to Make PCB
                Traces? | Yun Industrial. [Image] Yun Industrial - PCB Assembly
                House. Retrieved from
                https://yic-assm.com/why-do-we-use-copper-to-make-pcb-traces/ on
                May 12, 2024
                <br />
                Verma, S. (2023, September 20). What is Bus Architecture? -
                Scaler Topics. Scaler Topics. Retrieved from
                https://www.scaler.com/topics/bus-architecture/ on May 12, 2024
                <br />
                Tech Differences. (2019, December 24). Difference Between Serial
                and Parallel Transmission (with Comparison Chart) [Image]. Tech
                Differences. Retrieved from
                https://techdifferences.com/difference-between-serial-and-parallel-transmission.html
                on May 12, 2024
                <br />
                GeeksforGeeks. (2024, April 9). BUS Arbitration in Computer
                Organization. GeeksforGeeks. Retrieved from
                https://www.geeksforgeeks.org/bus-arbitration-in-computer-organization/
                on May 12, 2024
                <br />
                Roy, S. (2024, March 18). What Is a Chipset? | Baeldung on
                Computer Science [Image]. Baeldung on Computer Science.
                Retrieved from https://www.baeldung.com/cs/chipset on May 12,
                2024
                <br /> Thakur, D. (2020, September 2). What is ISA Bus? Computer
                Notes [Image]. Retrieved from
                https://ecomputernotes.com/fundamental/introduction-to-computer/isa-bus
                on May 12, 2024
                <br /> Posch, M. (n.d.). vesa local bus - Hackaday [Image].
                Hackaday. Retrieved from
                https://hackaday.com/tag/vesa-local-bus/ on May 12, 2024 Situs
                Ku [Image]. (n.d.).Retrieved from
                https://irvanfuadillah.files.wordpress.com/2016/01/agpuni_l.jpg?w=640
                on May 12, 2024
                <br /> Le Roux. (2009, December). PCI slots on a PC motherboard
                [Image]. PCI Slots on a PC Motherboard | Download Scientific
                Diagram. Retrieved from
                https://www.researchgate.net/figure/9-PCI-slots-on-a-PC-motherboard_fig5_49908409
                on May 12, 2024
                <br /> What is Small Computer Systems Interface (SCSI) [Image].
                (2019, January 21). Retrieved from
                https://knowledgeplace4all.blogspot.com/2019/01/what-is-small-computer-systems.html
                on May 12, 2024
                <br /> Tech-FAQ (2019, April 6). PCMCIA - Tech-FAQ. Tech-FAQ -.
                Retrieved from https://www.tech-faq.com/pcmcia.html on May 12,
                2024
                <br /> Crystal Group (2023, November 15). What is PCIe?
                Understanding PCIe Slots, Cards and Lanes - Crystal Group
                [Image]. Crystal Group Inc. Retrieved from
                https://www.crystalrugged.com/knowledge/what-is-pcie-slots-cards-lanes/
                on May 12, 2024 USB Ports, USB cables, What is a usb port?
                [Image] (n.d.). Retrieved from
                https://www.what-is-my-computer.com/usb-ports.html on May 12,
                2024
                <br />
                Handout References Berekovic, M., Buchty, R., Hamann, H., Koch,
                D., & Pionteck, T. (2018). Architecture of computing systems -
                ARCS 2018 proceedings. Switzerland: Springer Nature.
                <br />
                Computer Bus - What Is It? (n.d.). In CCM. Retrieved from
                https://ccm.net/contents/375-computer-bus-what-is-it on June 27,
                2019 David Keizer. (2016, June 6). RISC vs CISC [Video file].
                Retrieved from https://www.youtube.com/watch?v=_EKgwOAAWZA on
                <br />
                May 21, 2019 Edgington, A. (2017, July 17). The Ultimate Guide
                to USB Cables [Image]. Retrieved 2019, June 27 from
                https://www.conwire.com/ultimate-guide-usb-cables/ Education 4u.
                <br />
                (2017, December 11). daisychain arbitaration | COA | [Video
                file]. Retrieved 2019, June 27 from
                https://www.youtube.com/watch?v=0GUW00xU9E8 Elahi, A. (2018).
                <br />
                Computer systems - Digital design, fundamentals of computer
                architecture and assembly language. Switzerland: Springer
                Nature. Englander, Irv. (2014). The architecture of computer
                hardware, systems software & networking (5th ed.).
                <br /> New Jersey: Wiley. Essays, UK. (November 2018). Computer
                System Architecture of Buses [Essay]. Retrieved from
                https://www.ukessays.com/essays/internet/characteristics-of-buses.php?vref=1
                on June 27, 2019 Ganesh Dhase. (2016, December 11). Bus in
                Computer [Video file]. Retrieved from
                https://www.youtube.com/watch?v=0FLBKsBzuqA June 27, 2019
                Geekboots. (2019, February 9). Parallel bus vs Serial bus [Web
                log post]. Retrieved from
                https://www.geekboots.com/story/parallel-bus-vs-serial-bus on
                June 27, 2019 Harding, S. (2019, June 25). What is PCIe? A basic
                definition. In Tom&apos;s Hardware. Retrieved from
                https://www.tomshardware.com/reviews/pcie-definition,5754.html
                on June 27, 2019 Indiana University (2018, January 18).
                ARCHIVED: What is PCMCIA, and what is a PC card? [Web Article].
                Retrieved 2019, June 27 from https://kb.iu.edu/d/ahtn John, J.
                (2015). I/O peripherals, buses and data storage systems
                [PowerPoint slides]. Retrieved from
                https://slideplayer.com/slide/1593892/ on June 27, 2019 Kamau,
                P. (2019, January 12). Types of computer buses. In Turbo Future.
                Retrieved from https://turbofuture.com/computers/buses on June
                27 , 2019 Mellon, L. (n.d.). Data Transmission - Parallel vs
                Serial. Retrieved from
                http://www.cut.ac.zw/espace/mchinyuku/1410878742.pdf on June 27,
                2019 Mchinkuyu. (n.d.). Computer Buses. Retrieved from Chinhoyi
                University of Technology website:
                http://www.cut.ac.zw/espace/mchinyuku/1410878742.pdf on May 22,
                2019 Patterson, D. & Hennessy, J. (2017). Computer organization
                and design - The hardware/software interface. Massachusetts:
                Elsevier. PCMCIA. (2018, November 13). In Computer Hope.
                Retrieved from https://www.computerhope.com/jargon/p/pcmcia.htm
                on June 27, 2019 Professor Messer. (2015, November 29).
                Motherboard Expansion Slots and Bus Speeds - CompTIA A+ 220-901
                - 1.2 [Video file]. Retrieved from
                https://www.youtube.com/watch?v=-R6gsPo6LEQ on June 27, 2019
                SCSI (Small Computer System Interface). (2015, May). In
                TechTarget. Retrieved from
                https://searchstorage.techtarget.com/definition/SCSI on June 27,
                2019 Thakur, D. (n.d.). What is bus? | Types of computer bus. In
                Ecomputernotes.com. Retrieved from
                http://ecomputernotes.com/fundamental/introduction-to-computer/bus
                on June 27, 2019 Tory Klementsen. (2016, November 28). Buses and
                Chipsets Lecture [Video file]. Retrieved from
                https://www.youtube.com/watch?v=NQzUl3ZeVw0 on June 27, 2019
                Universal Serial Bus (USB). (n.d.). In Techopedia. Retrieved
                from
                https://www.techopedia.com/definition/2320/universal-serial-bus-usb
                on June 27, 2019 Yadin, A. (2016). Computer Systems
                Architecture. Florida: CRC Press.
              </p>
            </div>
            <div className="mt-6 mb-6">
              <h1 className="font-bold text-[#4F7853] text-[24px]">Final</h1>
              <p className="text-[#4F7853]">
                (n.d.) 07 Handout 1.docx. eLMS STI. Retrieved from
                https://elms.sti.edu/files/5348519/07_Handout_1(6).pdf?lmsauth=1fbadf9e69697fd025fd1b14539c1274120ee9b1
                <br />
                Rouse, M. (2023, June 17) What is Storage Device? - Definition
                from Technopedia. Technopedia. Retrieved from
                https://www.techopedia.com/definition/1119/storage-device
                <br />
                Keshadi (2023. April 24) What is a Storage Device? Definition,
                Types, Examples. GeeksforGeeks. Retrieved from
                https://www.geeksforgeeks.org/what-is-a-storage-device-definition-types-examples/
                <br />
                (n.d.) Storage : Access Methods. Retrieved from
                https://ictsmart.tripod.com/ict4/online/artstam.htm
                <br />
                (n.d.) Magnetic Storage: Devices, Advantages & Capacity.
                StudySmarter. Retrieved from
                https://www.studysmarter.co.uk/explanations/computer-science/computer-organisation-and-architecture/magnetic-storage/
                <br />
                (n.d.) IGCSE ICT - Magnetic Storage Devices / Media. IGCSE ICT.
                Retrieved from https://www.igcseict.info/theory/3/mag/index.html
                <br />
                Sue, W. (n.d.) What Is Magnetic Disk? How Does It Work?
                Recoverit. Retrieved from
                https://recoverit.wondershare.com/hard-drive/what-is-magnetic-disk.html
                <br />
                (n.d.) The top 20 things to know about SSD. Seagate. Retrieved
                from
                https://www.seagate.com/files/www-content/product-content/pulsar-fam/_cross-product/en-gb/docs/ssd-faq-tp612-1-1003gb.pdf
                <br />
                Villinger, S. (2022, September 30) What is an SSD? | Solid-State
                Drive Definition. Avast. Retrieved from
                https://www.avast.com/c-what-is-ssd
                <br />
                (n.d.) Solid State Storage: Devices, Pros & Cons. StudySmarter.
                Retrieved from
                https://www.studysmarter.co.uk/explanations/computer-science/computer-organisation-and-architecture/solid-state-storage/
                <br />
                (n.d.) IGCSE ICT - Solid-State Storage Devices. IGCSE ICT.
                Retrieved from https://www.igcseict.info/theory/3/solid/
                <br />
                (n.d.) DVD-RW Definition - What is a DVD-RW Disk? TechTerms.
                <br />
                Reverchuk, Lou. (2024, May 4) What Is Sequential Access? A
                Comprehensive Guide to its Definition and Use. EchoGlobal.
                Retrieved from
                https://echoglobal.tech/what-is-sequential-access/
                <br />
                (2020, April 28) Magnetic Tape memory. GeeksforGeeks. Retrieved
                from https://www.geeksforgeeks.org/magnetic-tape-memory/
                <br />
                (n.d.) Magnetic Storage: Devices, Advantages & Capacity. Abby
                (2023, July 28) Magnetic Tape Explained Everything You Need To
                Know. History-Computer. Retrieved from
                https://history-computer.com/technology/magnetic-tape/
                <br />
                (n.d.) pg313.tif. USENIX. Retrieved from
                <br />
                Jeppesen, J. Allen, W. Anderson, J. Pilsl, M. (n.d.) Hard disk
                controller: the disk drive&apos;s brain and body. IEEE Xplore.
                Retrieved from https://ieeexplore.ieee.org/document/955038
                <br />
                (2022, May 27) SCSI, SATA, and NVMe Storage Controller
                Conditions, Limitations, and Compatibility. VMware vSphere.
                <br />
                (2021, March 5) SAS RAID controllers for AIX overview. IBM.
                Retrieved from
                <br />
                Raffo, D. Lelii, S. What is disk array? TechTarget. Retrieved
                from https://www.techtarget.com/searchstorage/definition/array
                <br />
                Ke, Z. Wang, L. Li, C., (2010, December 20) Cloud Storage
                Technology and Its Applications. ZTE. Retrieved from
                https://www.zte.com.cn/global/about/magazine/zte-communications/2010/4/en_140/197075.html
                <br />
                (n.d.) 08 Handout 1.docx. eLMS STI. Retrieved from
                https://elms.sti.edu/files/5348519/08_Handout_1(4).pdf?lmsauth=6ab9ef04dcce9f3d48cda6681d4c7d26719aba5a
                <br />
                Bigelow, S. (2022, March) What is a multicore processor and how
                does it work? TechTarget.
                https://www.techtarget.com/searchdatacenter/definition/multi-core-processor
                <br />
                Dive Into Systems (n.d.) Retrieved from
                https://diveintosystems.org/book/C11-MemHierarchy/coherency.html
                <br />
                Melonakos, J. (2009, January 22) Data-parallelism vs
                Task-parallelism. ArrayFire. Retrieved from
                https://arrayfire.com/blog/data-parallelism-vs-task-parallelism/
                <br />
                GeeksforGeeks (2024, February 6) Computer Architecture |
                Flynn&apos;s taxonomy. Retrieved from
                https://www.geeksforgeeks.org/computer-architecture-flynns-taxonomy/
                <br />
                Influxdata (n.d.) Vector Processing. Retrieved from
                https://www.influxdata.com/glossary/vector-processing-SIMD/
                <br />
                Wikipedia (2024, March 17) Array Processing. Retrieved from
                https://en.wikipedia.org/wiki/Array_processing
                <br />
                Kirvan, P. (n.d.) What is cluster? TechTarget. Retrieved from
                ttps://www.techtarget.com/whatis/definition/cluster
                <br />
                GeeksforGeeks (2022, September 30) Difference between Shared
                Nothing Architecture and Shared Disk Architecture. Retrieved
                from
                <br />
                IBM (n.d.) What is Supercomputing? Retrieved from
                https://www.ibm.com/topics/supercomputing
                <br />
                CiQ (2023, May 31) Beowulf Clusters. Retrieved from
                https://ciq.com/wiki/beowulf-clusters/
                <br />
                Kanade, V. (2022, January 19) What Is Grid Computing? Key
                Components, Types, and Applications. Spiceworks. Retrieved from
                https://www.spiceworks.com/tech/cloud/articles/what-is-grid-computing/
                <br />
                BasuMalick, C. (2021, July 2) What Is Cloud Computing?
                Definition, Benefits, Types, and Trends. Spiceworks. Retrieved
                from
                https://www.spiceworks.com/tech/cloud/articles/what-is-cloud-computing/
                <br />
                Wikipedia (2024, May 12) Graphics processing unit. Retrieved
                from https://en.wikipedia.org/wiki/Graphics_processing_unit
                <br />
                Levinas, M. (2021, March 23) GPU Architecture Explained:
                Everything You Need to Know and How It Has Evolved. Cherry
                Servers. Retrieved from
                <br />
                BOSTON (n.d.) What is GPU Computing? Rertieved from
                https://www.boston.co.uk/info/nvidia-kepler/what-is-gpu-computing.aspx
                <br />
                Bandyopadhyay, S. (2023, July 12) Introduction to CUDA
                Programming. Medium. Retrieved from
                https://medium.com/@sumitb2015/introduction-to-cuda-programming-c0242f252b5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
