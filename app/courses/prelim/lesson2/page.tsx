import React from "react";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";

function page() {
  return (
    <main className="bg-white h-lvh">
      <div className="container">
        <Navigation name="prelim 1" />

        <div className="border-2 border-[#4f7853] rounded-xl p-5 mt-10">
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
            Lesson 2
          </h1>

          <h2 className="textflex font-black text-center text-[#4f7853] text-4xl lg:text-6xl border-b-2 border-[#4f7853] mb-6">
            Data Format
          </h2>
          <div className="">
            <div className="grid lg:grid-cols-2 gap-10 mb-10  ">
              <div className="">
                <h1 className="text-3xl font-bold text-[#4f7853] text-center mb-10">
                  Data
                </h1>
                <p className="text-lg flex text-justify text-[#4f7853] mt-6">
                  Data, in computer terms, is a fact, figure, or information
                  that is represented in a set of bits – ones and zeros. Wires
                  and circuits bring forth these bits as electrical pulses in
                  the computer system. These bits can be a file, information, or
                  instruction.
                </p>
                <p className="text-lg flex text-justify text-[#4f7853] mt-6">
                  The user can edit, store, and delete data to meet his/her
                  specific needs. Data in human form is entered to a computer
                  using a keyboard, a mouse, or any other input device. From the
                  human form, computers manipulate data to convert it to their
                  own representation, which is in binaries of ones and zeros.
                </p>
              </div>
              <div className="border-4 border-[#4f7853] border-none rounded-xl p-5">
                <Image
                  className="rounded-xl lg:h-full object-cover"
                  src={"/prelim-image/data.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mb-5 p-2 sm:gap-10 sm:mb-10 sm:p-5">
              <div className="border-4 border-[#4f7853] border-none rounded-xl p-2 sm:p-5">
                <Image
                  className="rounded-xl object-cover h-48 sm:h-full"
                  src={"/prelim-image/file type.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#4f7853] text-center mb-2 sm:mb-3">
                  File Type
                </h1>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  also known as file formats, are standardized ways of
                  organizing and storing data in a computer file. Each file type
                  is associated with specific characteristics and can be
                  recognized by its file extension, which typically appears as a
                  series of letters following a dot at the end of a file name
                  (e.g., .txt for text files, .jpg for image files).
                </p>
                <h1 className="text-xl sm:text-2xl font-bold text-[#4f7853] text-center mt-4 sm:mt-5">
                  Terminologies for File Type
                </h1>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2">
                  <strong>• File Name</strong> - It is a unique file identifier
                  and may be named by a human or a computer.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2">
                  <strong>• File Extension</strong> - It is a 1- to 4-letter
                  character identifier for the specific file type.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2">
                  <strong>• File Extension Icon</strong> - it is a common
                  identifier for file extension.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2">
                  <strong>• File Association</strong> - it is a program
                  associated with the file extension.
                </p>
              </div>
            </div>

            <h3 className="textflex font-black text-center text-[#4f7853] text-4xl lg:text-3xl mt-20">
              File Types
            </h3>

            <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/Audio and video files.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Audio and Video Files
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/Compressed File.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Compressed File
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/Disc and media files.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Disc and Media Files
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/Executable file.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Executable File
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/image file.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Image File
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={
                      "/prelim-image/System-related and programming files.png"
                    }
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  System-related and Programming Files
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/Word processor and text files.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Word Processor and Text Files
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 "
                    src={"/prelim-image/Presentation and spreadsheet files.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Presentation and Spreadsheet Files
                </h4>
              </div>
            </div>

            <div className="grid gap-5 p-2 mt-20 sm:gap-10 sm:mb-10 sm:p-5 lg:grid-cols-2">
              <div>
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  File Format
                </h1>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  It is a structure or layout of a computer file in terms of how
                  data is contained and organized. The structure of a typical
                  file may include a header, metadata, a saved content, and an
                  end-of-file (EOF) marker. The data stored in the file depends
                  on the purpose of the file format.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Metadata
                </h1>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  It provides additional information about a certain item’s
                  content. The other terms for metadata are descriptions,
                  keywords, tags. (Example: JPEG – dimensions, date created,
                  date accessed, color depth, etc.)
                </p>
              </div>
            </div>

            <div className="grid gap-5 p-2 sm:gap-10 sm:mb-10 sm:p-5 lg:grid-cols-2">
              <div className="col-start-1 col-span-2">
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  File Attributes
                </h1>
                <p className="text-base text-center text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  These are settings associated with computer files that grant
                  or deny certain rights to how a user or the operating system
                  can access that file.
                </p>
                <div className="grid gap-5 sp-2 mt-10 sm:gap-10 sm:mb-10 sm:p-5 lg:grid-cols-2">
                  <div>
                    <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                      Read-only
                    </h1>
                    <p className="text-sm text-center text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                      It allows a file to be read, but nothing can be written to
                      the file or changed.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                      Archive
                    </h1>
                    <p className="text-sm text-center text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                      It tells Windows Backup to back up the file.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                      System
                    </h1>
                    <p className="text-sm text-center text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                      It is a system file.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                      Hidden
                    </h1>
                    <p className="text-sm text-center text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                      It is a file that cannot be seen when doing a regular
                      directory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="textflex font-black text-center text-[#4f7853] text-4xl lg:text-3xl">
              Classifications of Data
            </h3>
            <div className="mt-5 grid grid-cols-1 mb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 h-40"
                    src={"/prelim-image/alpha neumeric.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  As Alphanumeric Characters
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 h-40"
                    src={
                      "/prelim-image/As a visual image (still and moving).png"
                    }
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  As a Visual Image (Still and Moving)
                </h4>
              </div>
              <div>
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 h-40"
                    src={"/prelim-image/As audio.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  As Audio
                </h4>
              </div>
              <div className="md:col-start-2 md:col-span-1 col-span-1">
                <div className="">
                  <Image
                    className="rounded-xl w-full lg:h-56 md:h-40 sm:h-60 h-40"
                    src={"/prelim-image/Internal computer data.png"}
                    width={200}
                    height={200}
                    alt="Computer System"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#4f7853] text-center">
                  Internal Computer Data
                </h4>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 mb-14 mt-2">
              <div className="p-5 border-2 border-[#4f7853] rounded-xl">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center">
                  Data as Alphanumeric Characters
                </h1>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Data are entered as characters, symbols, number digits, and
                  punctuation.
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Specific input devices and methods are used to create these.
                  (e.g., Keyboard, keypads, on-screen keys, magnetic card
                  stripes, etc.)
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-6 sm:text-center text-center">
                  American Standard Code for Information Interchange (ASCII)
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Was originally developed as a standard by the American
                  National Standards Institute (ANSI). ANSI has also defined
                  8-bit extensions to the original ASCII codes that provide
                  various symbols, line shapes, and accented foreign letters for
                  the additional 128 entries.
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-6 sm:text-center text-center">
                  Extended Binary Coded Decimal Interchange Code
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Was developed by IBM. Its use is restricted mostly to IBM and
                  IBM-compatible mainframe computers and terminals.
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-6 sm:text-center text-center">
                  Unicode
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Supports approximately a million characters, using a
                  combination of 8-bit, 16-bit, and 32-bit words. It divides its
                  character encodings into sixteen 16-bit code pages, called
                  planes, which allows space for about a million characters.
                </p>
              </div>

              <div className="p-5 border-2 border-[#4f7853] rounded-xl">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center">
                  Data as Visual Data
                </h1>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6 mb-6">
                  Images used within the computer fall into two (2) distinct
                  categories:
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left sm:text-center text-center">
                  • Bitmap objects
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  Are images (e. g., photographs and paintings) that are
                  characterized using an image scanner, digital camera or mobile
                  device, or video camera frame grabber.
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-6 sm:text-center text-center">
                  • Graphical objects
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  Are images made up of graphical shapes (e. g., lines and
                  curves) that can be defined geometrically.
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-6 sm:text-center text-center">
                  Graphics Interchange Format (GIF)
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  Was first developed by CompuServe in 1987 as a proprietary
                  format that would allow users to store and exchange online
                  bitmap images in 256 colors on different computing platforms.
                  Now, it is extensively used on the Web due to its animated
                  frame-by-frame images.
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-9 sm:text-center text-center">
                  Portable Network Graphics (PNG)
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  Is the best known compressed alternative to GIF. PNG can store
                  up to 48 bits of color per pixel and can store a transparency
                  percentage value and a correction factor for the color in a
                  monitor or printer.
                </p>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5C715E] lg:text-left mt-9 sm:text-center text-center">
                  Joint Photographers Expert Group (JPEG)
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  Employs a compression algorithm to reduce the amount of data
                  stored and transmitted. This algorithm reduces the image
                  resolution under certain circumstances, particularly for sharp
                  edges and lines, which makes JPEG more suitable for the
                  representation of highly detailed photographs and paintings.
                </p>
              </div>
            </div>

            <h2 className="textflex font-black lg:text-center md:text-center text-center text-[#4f7853] text-4xl lg:text-5xl  mt-20">
              Video Images
            </h2>
            <div className="">
              <p className="text-justify lg:text-center md:text-center sm:text-lg flex  text-[#4f7853] mt-6">
                Are a result of a sequence of bitmap image frames. The video
                format is determined by a codec or encoder/decoder algorithm
                referred to as a “container.” The container serves as a
                superstructure to encode, decode, hold, and stream video. It
                serves both video and audio and may support multiple codecs.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 mb-14 mt-10">
              <div className="p-5 border-2 border-[#4f7853] rounded-xl">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center">
                  Data as Audio Data
                </h1>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Sound can be stored in digital form on storage media. Since
                  the original sound wave is analog, conversion is needed to
                  make it in digital form, where it is then sampled
                  electronically at regular time intervals.
                </p>
                <h2 className="text-2xl font-bold text-[#5C715E] lg:text-left mt-6 sm:text-center text-center">
                  ADC (Analog-to-Digital Converter)
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  An essential component in various electronic systems,
                  converting analog signals, which are continuous in nature,
                  into digital signals, which are discrete. This conversion is
                  crucial because most modern electronic devices, such as
                  computers and digital signal processors, operate using digital
                  signals.
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>• Sampling</strong> Lays out of the analog signal in a
                  graph.
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>• Quantization</strong> Layers the discrete signal in
                  the analog signal with less margin of error
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>• Encoding</strong> Converts discrete signals into
                  highs (1) and lows (0), hence the binary equivalent of a
                  timebound discrete signal.
                </p>
              </div>

              <div className="p-5 border-2 border-[#4f7853] rounded-xl">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center">
                  Internal Computer Data
                </h1>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  These are data types represented as interpretation from
                  programming languages. Here are the factors to consider:
                </p>

                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>• </strong> The actual operations that the computer
                  processor is capable of performing
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>• </strong> The actual operations that the computer
                  processor is capable of performing
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  These are the simple data types:
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>Boolean </strong> constant values (true/false).
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>Char </strong> alphanumeric character code.
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>Enumerated </strong> user-defined data type.
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>Integer </strong> whole numbers (+ / -).
                </p>
                <p className="text-lg sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                  <strong>Real / Float </strong> numbers with a decimal portion.
                </p>
              </div>
            </div>

            <div className="p-5">
              <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center mb-8">
                Internal Computer Data
              </h1>
              <p className="text-1xl sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                <strong>Lossless algorithm </strong> compresses the data in such
                a way that the application of a matching inverse algorithm
                restores the compressed data exactly to its original form.
              </p>
              <p className="text-1xl sm:text-base md:text-lg text-[#4f7853] mt-2 text-justify sm:mt-3 mb-3 sm:mb-4 md:mb-5">
                <strong>Lossy algorithm </strong> operates on the assumption
                that the user can accept a certain amount of data degradation as
                a trade-off for the savings in a critical resource, such as
                storage requirements or data transmission time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
