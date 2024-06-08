import React from 'react';
import Navigation from '@/components/shared/Navigation';

function page() {
  return (
    <div className="bg-[#FFFEFA] h-[100vh]">
      <div className="container px-5">
        <Navigation name="courses" />

        <div className="border-4 border-[#4F7853] rounded-[35px] p-10">
          <h1 className="text-3xl font-bold text-[#4F7853] mb-4">Midterm Lesson 1</h1>
          <div className="mid-lesson">
            <div className="font-bold text-[#4F7853] text-6xl mb-4">Read-Only Memory</div>
            <ul className="text-[#4F7853] text-xl text-justify list-disc ml-5">
              <li>One kind of storage medium that keeps data permanently is read-only memory (ROM). This often includes the programming required for a device to boot up.
              Information can only be "read" from this kind of memory. It retains data indefinitely, even when the ROM is not powered.
              Any stateful memory that remains after a live user session end can be referred to as non-volatile memory.</li>
            </ul>
            <p className="font-bold text-[#4F7853] text-xl mt-4 mb-3">Types of ROM</p>
            <ul className="text-[#4F7853] text-xl text-justify list-disc ml-5">
              <li>
                <span className="font-bold">Programmable ROM (PROG)</span> is a memory chip that allows data to be written just
once. The PROM is a sensitive material that is easily destroyed, leaving it unusable if
the information is stored incorrectly. Programming ROM, also known as burning
ROM, uses a specialized equipment known as a ROM burner or ROM programmer.
              </li>
              <li>
                <span className="font-bold"> Erasable PROMs (EPROMs)</span> can be erased with ultraviolet light and reprogrammed
                using an EPROM programmer.
                <br />
                <span className="font-bold"> Ultraviolet Erasable PROM (UV-EPROM)</span> - A popular form of EPROM. To erase
the contents of a UV-EPROM, it needs to be exposed to UV rays for 5-20 minutes
through a window on the chip. However, the problem with UV-EPROM is that it
cannot be deleted or written when on the system board. EEPROM was designed
to address this issue.
              </li>
              <li>
                Electrically EPROM (EEPROM) can be erased by applying specific voltage to one of
its pins and can be reprogrammed with an EPROM programmer. EEPROM has
various advantages over EPROM, including the fact that it erases electrically and
hence instantly, as opposed to UV-EPROM's 20-minute erasing period.
Furthermore, unlike UV-EPROM, which erases the full contents of the ROM,
EEPROM allows the user to decide which byte to erase. Example: NAND Flash
Memory and BIOS
- Flash Memory – Flash ROM was originally designed to allow changes to the
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
            <p className="font-bold text-[#4F7853] text-xl mt-4 mb-3">What is computer bottlenecking?</p>
            <ul className="text-[#4F7853] text-xl text-justify list-disc ml-5">
              <p>It is the delay in transmission of data through the circuits of a computer’s microprocessor.
The delay typically occurs when a system’s bandwidth cannot support the amount of
information being relayed at the speed it is being processed. Many factors can create a
bottleneck in a system as well. Most common causes of bottlenecking are:</p>
<li>
  <span className="font-bold">Insufficient Memory:</span> If your RAM (Random Access Memory) is too small, it can
  slow down overall performance.
</li>
<li>
  <span className="font-bold">Slow Hard Drive: </span>A slow storage drive (HDD) can bottleneck data transfer speeds.
</li>
<li>
  <span className="font-bold">Weak Processor (CPU): </span> If your CPU can’t keep up with demanding tasks, it
  becomes a bottleneck.
</li>
<li>
  <span className="font-bold">Weak Graphics Card (GPU): </span> An underpowered GPU can limit graphical
  performance, especially in gaming.
</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
