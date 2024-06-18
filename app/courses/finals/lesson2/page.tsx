import React from "react";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <main className="bg-white h-lvh">
      <div className="container">
        <Navigation name="final 2" />

        <div className="border-4 border-[#4f7853] rounded-[35px] p-5 mt-10 max-[450px]:border-0 max-[450px]:p-0">
          <h1 className="flex font-bold text-[#4f7853] text-lg">
            Final
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

          <h2 className="textflex font-black text-center text-[#4f7853] text-4xl l1g:text-6xl border-b-2 border-[#4f7853] mb-6">
            Advanced Architectures
          </h2>
          <div className="p-5 max-[450px]:p-0">
            <div className="grid lg:grid-cols-2 gap-10 mb-10  ">
              <div className="">
                <h1 className="text-3xl font-bold text-[#4f7853] text-center mb-10">
                  Virtualization
                </h1>
                <p className="text-lg flex text-justify text-[#4f7853] mt-6">
                  In modern computing, the concept of &quot;virtual&quot;
                  encompasses both the essence of existence and the realm of
                  simulation. Virtualization transforms the capabilities of a
                  single computer, allowing it to manifest as multiple entities,
                  each with its distinct operating system and hardware
                  resources. Through the magic of virtualization, a solitary
                  machine can simulate an entire array of computers, all while
                  sharing the central processing unit (CPU) and input/output
                  (I/O) facilities. These simulated machines are aptly termed as
                  virtual computers or virtual machines.
                </p>
              </div>
              <div className="border-4 border-white rounded-xl shadow-xl border-none mb-5 p-5">
                <Image
                  className="rounded-xl lg:h-full object-cover"
                  src={"/final-image/Virtualization.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mb-5 p-2 sm:gap-10 sm:mb-10 sm:p-5">
              <div className="border-4 border-white rounded-xl shadow-xl border-none mb-5 p-2 sm:p-5">
                <Image
                  className="rounded-xl object-cover  h-48 sm:h-full"
                  src={"/final-image/parallel computing.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#4f7853] text-center mb-2 sm:mb-3">
                  Parallel Computing
                </h1>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>Preemptive multitasking</strong> refers to a task in
                  which the operating system uses some criteria to decide how
                  long to allocate to any one task before giving another task a
                  turn to use the operating system. The term
                  &quot;preemption&quot; implies the ability of interrupting a
                  task, switching to another one, and then resuming the first
                  task at a later time. The term &quot;multitasking&quot;, on
                  the other hand, refers to the ability to run simultaneous
                  processes in a given time unit. Processes that run in an
                  operating system is not the only way to perform several
                  operations at the same time. This activity could be done with
                  the use of simultaneous subtasks called{" "}
                  <strong>threads.</strong>
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mb-5 p-2 sm:gap-10 sm:mb-10 sm:p-5">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#4f7853] text-center mb-2 sm:mb-3">
                  Multiprocessor and Multicore Systems
                </h1>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>Multicore microprocessor </strong> is a microprocessor
                  that contains multiple processors (&quot;cores&quot;) in a
                  single integrated circuit. Virtually, all microprocessors
                  today in desktops and servers are multicore and are used to
                  run a parallel processing program.
                  <br />
                  <br />
                  <strong>
                    Task-level parallelism (process-level parallelism){" "}
                  </strong>{" "}
                  is a method of utilizing multiple processors by running
                  independent programs simultaneously. The difficulty with
                  parallelism is not the hardware. It is difficult to write
                  software that uses multiple processors to complete a task
                  faster, and the problem gets worse as the number of processors
                  increases.
                  <br />
                  <br />
                  Flynn&apos;s Taxonomy, which was proposed in 1966, is one of
                  the categorizations of parallel hardware is still used today.
                  It was based on the number of instruction streams and the
                  number of data streams.
                </p>
              </div>
              <div className="border-4 border-white rounded-xl shadow-xl border-none mb-5 p-2 sm:p-5">
                <Image
                  className="rounded-xl object-cover  h-48 sm:h-full"
                  src={"/final-image/Multiprocessor and Multicore Systems.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
            </div>

            <div className="grid gap-2 p-2 sm:gap-10 sm:mb-10 sm:p-5 lg:grid-cols-2 mt-10">
              <div className="col-start-1 col-span-2">
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Solutions to Concurrency Challenges
                </h1>
                <div className="grid gap-3 sp-2 mt-10 sm:gap-10 sm:mb-10 sm:p-5 lg:grid-cols-2">
                  <div className="border-white rounded-xl shadow-xl">
                    <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                      Synchronization
                    </h1>
                    <p className="text-sm text-center text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                      By marking specific sections of code as
                      &quot;protected,&quot; synchronization ensures that
                      resources are accessed by only one thread at a time. This
                      prevents simultaneous execution that could compromise
                      shared data integrity.
                    </p>
                  </div>
                  <div className="border-white rounded-xl shadow-xl">
                    <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                      Atomic Operations
                    </h1>
                    <p className="text-sm text-center text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                      Utilizing special instructions provided by the operating
                      system, non-atomic operations can be transformed into
                      atomic ones. This ensures that shared data remains in a
                      valid state regardless of concurrent access by other
                      threads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-10">
              <div className="border-white rounded-xl shadow-xl col-start-1 col-span-2">
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Immutable Data
                </h1>
                <p className="text-sm text-center text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  Marking shared data as immutable restricts modification,
                  allowing threads only to read from it. This eliminates the
                  root cause of concurrency issues by ensuring data consistency.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 mb-14 mt-2">
              <div className="p-5 border-2 border-white rounded-xl shadow-xl">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center mb-14">
                  Parallel Computing
                </h1>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong> Concurrency </strong> is defined as &quot;the
                  perception of having tasks that run at the same time.&quot;
                  <br />
                  <br />
                  <strong> Parallelism </strong> are tasks that literally run at
                  the same time.
                  <br />
                  <br />
                  Parallelism is a subset of concurrency.
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  Things run smoothly as long as two (2) or more threads read
                  from the same memory location. The troubles kick in when at
                  least one of them writes to the shared memory, while the
                  others are reading from it. At this point, two (2) problems
                  can occur:
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong> Data Race </strong> is defined as &quot;the
                  perception of having tasks that run at the same time.&quot;
                  <br />
                  <br />
                  <strong>• Race Condition </strong> This occurs when two (2) or
                  more threads can access the same shared data and try to change
                  the data at the same time.
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-6">
                  There are some possible solutions for the problems stated
                  above:
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>• Synchronization </strong> - It is a way to ensure
                  that resources will be used by only one (1) thread at a time.
                  It is about marking specific parts of the code as
                  &quot;protected&quot; so that two (2) or more concurrent
                  threads will not execute the code simultaneously, which screws
                  up the shared data.
                  <br />
                  <br />
                  <strong>• Atomic Operations </strong> - A bunch of non-atomic
                  operations can be turned into atomic ones by means of special
                  instructions provided by the operating system. This way the
                  shared data is always kept in a valid state, no matter how
                  other threads access it.
                  <br />
                  <br />
                  <strong>• Immutable Data </strong> - Shared data is marked as
                  immutable, which means that nothing can change it. This
                  implies that threads are only allowed to read from it,
                  eliminating the root cause.
                </p>
              </div>

              <div className="p-5 border-2 border-white rounded-xl shadow-xl ">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#5C715E] text-center mb-5">
                  Multiprocessor and Multicore Systems
                </h1>
                <h2 className="text-lg sm:text-xl font-bold text-[#5C715E] lg:text-left sm:text-center text-center">
                  • SISD (Single Instruction stream, Single Data stream
                  [non-parallel computer])
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Single Instruction: All processing units execute the same
                  instruction at any given clock cycle
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Multiple Data: Each processing unit can operate on a
                  different data element
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Best suited for specialized problems characterized by a high
                  degree of regularity, such as graphics or image processing.
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Synchronous (lockstep) and deterministic execution
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Two (2) varieties: processor arrays and vector pipelines
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-[#5C715E] lg:text-left mt-6 sm:text-center text-center">
                  • SIMD (Single Instruction stream, Multiple Data streams
                  [parallel computer])
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Single Instruction: Only one (1) instruction stream is being
                  acted on by the CPU during one (1) clock cycle
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Single Data: Only one (1) data stream is being used as input
                  during one (1) clock cycle
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Deterministic execution
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  Are images made up of graphical shapes (e. g., lines and
                  curves) that can be defined geometrically.
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-[#5C715E] lg:text-left mt-6 sm:text-center text-center">
                  • MISD (Multiple Instruction streams, Single Data streams
                  [parallel computer])
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Multiple Instruction: Each processing unit operates on the
                  data independently via separate instruction streams
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Single Data: A single data stream is fed into multiple
                  processing units
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Few (if any) actual examples of this class of parallel
                  computer have ever existed; used in multiple frequency filters
                  operating on a single signal stream or in multiple
                  cryptography algorithm attempts to crack a coded message
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-[#5C715E] lg:text-left mt-9 sm:text-center text-center">
                  • MIMD (Multiple Instruction streams, Multiple Data streams
                  [parallel computer])
                </h2>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Multiple Instruction: Every processor may be executing a
                  different instruction stream
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Multiple Data: Every processor may be working with a
                  different data stream
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Execution can be synchronous or asynchronous, and
                  deterministic or non-deterministic
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Multiple Data: Every processor may be working with a
                  different data stream
                </p>
                <p className="text-base sm:text-lg flex text-justify text-[#4f7853] mt-4">
                  o Examples: current supercomputers, networked parallel
                  computer clusters and &quot;grids,&quot; multiprocessor SMP
                  computers, and multi-core PCs
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mb-5 p-2 sm:gap-10 sm:mb-10 sm:p-5 border-4 border-white rounded-xl shadow-xl">
              <div className=" border-none mb-5 p-2 sm:p-5 grid gap-3">
                <Image
                  className="border-none rounded-xl shadow-xl object-cover  h-48 sm:h-full"
                  src={"/final-image/Multithreading.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
                <Image
                  className="border-none rounded-xl shadow-xl object-cover  h-48 sm:h-full"
                  src={"/final-image/Multithreading2.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#4f7853] text-center mb-2 sm:mb-3">
                  Multithreading
                </h1>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  MIMD relies on multiple processes or threads to try to keep
                  many processors busy. Hardware multithreading allows multiple
                  threads to share the functional units of a single processor in
                  an overlapping fashion to try to utilize the hardware
                  resources efficiently. To permit this sharing, the processor
                  must duplicate the independent state of each thread. These are
                  the different kinds of multithreading:
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>• Fine-grained multithreading</strong> switches
                  between threads on each instruction, resulting in interleaved
                  execution of multiple threads. This interleaving is often done
                  in a round-robin fashion, skipping any threads that are
                  stalled at that clock cycle.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>• Coarse-grained multithreading</strong> was invented
                  as an alternative to fine-grained multithreading. It switches
                  threads only on expensive stalls, such as last-level cache
                  misses.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>• Simultaneous multithreading (SMT)</strong> is a
                  variation of hardware multithreading that uses the resources
                  of a multiple-issue, dynamically scheduled pipelined processor
                  to exploit thread-level parallelism and, at the same time,
                  exploit instruction-level parallelism. An example of using SMT
                  is hyperthreading. Hyperthreading is an Intel-made
                  high-performance computing architecture that simulates some
                  degree of overlap when executing two (2) or more independent
                  sets of instructions. This is a feature of certain Intel chips
                  that makes one (1) physical CPU appear as two (2) logical
                  CPUs.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mb-5 p-5 sm:gap-10 sm:mb-10 sm:p-5 border-white shadow-xl rounded-xl">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#4f7853] text-center mb-2 sm:mb-3">
                  Vector/Array Processing
                </h1>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  It refers to the usage of aggregated computing power for
                  handling computation and data-intensive tasks that include
                  simulation, modeling, and rendering, in which standard
                  workstations are unable to address. One way of addressing HPC
                  is through clustering.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  A <strong>cluster</strong> is a group of loosely coupled
                  computers which is configured to work together as a unit.
                  Unlike the tightly coupled multiprocessing system, each
                  computer in a cluster is a complete unit with its own CPU,
                  memory, and I/O facility. Each computer in the cluster is
                  called a <strong>node</strong>. Different nodes of a cluster
                  may be located in the same physical cabinet or located miles
                  apart, provided there is a way to interconnect the highspeed
                  messaging link and, if applicable, the shared-disk links.
                  There are two (2) primary models used for clustering:{" "}
                  <strong>shared-nothing</strong> model and{" "}
                  <strong>shared disk</strong> model.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  Instruction set architectures, which are called{" "}
                  <strong>scalar architectures</strong> in this context, also
                  pertain to a single vector instruction that specifies a great
                  deal of work—it is equivalent to executing an entire loop. The
                  instruction fetches the needed bandwidth and decodes it
                  afterward.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  By using a vector instruction, the compiler or programmer
                  indicates that the computation of each result in the same
                  vector is independent of the computation of other results.
                  This is so the hardware does not have to check for data
                  hazards within a vector instruction.
                </p>
              </div>
              <div className=" border-none mb-5 sm:p-5 grid">
                <Image
                  className="border-none rounded-xl shadow-xl object-cover  h-48 sm:h-full "
                  src={"/final-image/Vector.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mb-5 p-5 sm:gap-10 sm:mb-10 sm:p-5 border-4 border-white rounded-xl shadow-xl">
              <div className=" border-none mb-5  sm:p-5">
                <Image
                  className="border-none rounded-xl shadow-xl object-cover  h-48 sm:h-full"
                  src={"/final-image/Array.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#4f7853] text-center mb-2 sm:mb-3">
                  Characteristics of Clustering
                </h1>

                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>•</strong> To increase the computing power by
                  combining the power of the individual systems
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>•</strong> To create fault-tolerant systems
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>•</strong> To create high-availability systems
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>•</strong> For load-balancing systems with large
                  workloads
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  The field of high-performance computing, sometimes{" "}
                  <strong>called supercomputing</strong>, arose in an attempt to
                  meet the challenge of solving difficult problems that require
                  massive amounts of computing power. There have been different
                  approaches to high-performance computing, but recently
                  developed systems tend to fall loosely into one of these three
                  (3) architectural categories:
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>•</strong> Systems that are built from clusters of
                  powerful machines (Beowulf clusters)
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>•</strong> Cloud systems
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong>•</strong> Systems that use the spare processing
                  capacity of computers connected to a network (grid computing).
                </p>
              </div>
            </div>

            <div className="grid gap-2 p-2 mt-20  sm:mb-10 sm:p-5 lg:grid-cols-2 border-white rounded-xl shadow-xl">
              <div className=" p-5">
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Beowulf Clusters
                </h1>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  These are simple, highly configurable clusters designed to
                  provide high performance at a low cost. These consist of
                  multiple computers connected by a dedicated, private Ethernet
                  which serves as the link between the computers in the cluster.
                  Each node contains a CPU, memory, an Ethernet connection, and,
                  sometimes, hard disks, and other peripherals.
                </p>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  Linux is generally the OS of choice for Beowuld clusters
                  because of its flexibility. In addition to being configurable,
                  this OS provides the tools needed to configure the cluster to
                  include all the features of a powerful distributed system.
                </p>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-5">
                  Beowulf clusters are generally configured with one of the two
                  (2) types of computer components:
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-3">
                  <strong> Commodity-off-the-shelf (COTS)</strong> components
                  are simply inexpensive computers connected to form a Beowulf
                  cluster.
                </p>
                <p className="text-base sm:text-lg text-justify text-[#4f7853] mt-2 sm:mt-5">
                  <strong>• Blade</strong> components, often called{" "}
                  <strong>blade servers</strong>, are computers mounted on a
                  board similar to a motherboard that can be plugged into
                  connectors on a rack.
                </p>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  The network connection between the nodes is not accessible
                  from outside of the cluster. This eliminates security concerns
                  other than the authentication required to maintain cluster
                  integrity.
                </p>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  Additionally, Beowulf clusters are ideal to use as Web servers
                  because blades can be added or removed as required to maintain
                  performance levels under varying loads. With their distributed
                  processing capability, these can also be used effectively for
                  shared or parallel processing, where a single large task is
                  divided into subtasks that different computers within the
                  cluster can process simultaneously.
                </p>
              </div>
              <div className=" mb-5  sm:p-5 grid gap-3">
                <Image
                  className="border-none rounded-xl shadow-xl object-cover  h-48 sm:h-full"
                  src={"/final-image/Beowulf Clusters.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
                <Image
                  className="border-none rounded-xl shadow-xl object-cover  h-48 sm:h-full"
                  src={"/final-image/Beowulf Clusters2.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
            </div>

            <div className="grid gap-2 p-2 mt-20  sm:mb-10 sm:p-5 lg:grid-cols-2 border-white rounded-xl shadow-xl">
              <div className=" border-none mb-5  sm:p-5">
                <Image
                  className="border-none rounded-xl shadow-xl object-cover  h-48 sm:h-full"
                  src={"/final-image/grid computing.png"}
                  width={2000}
                  height={2000}
                  alt="Computer System"
                />
              </div>
              <div className=" p-5">
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Grid Computing
                </h1>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  Gelernter (as cited in Patterson, 2017) proved in his research
                  that it was possible to produce supercomputer performance for
                  processing large problems. This can be done by distributing
                  the problem and using the spare processing time of personal
                  workstations connected to a network. Issues include dividing
                  the workload effectively, scheduling work, preventing
                  interference with local processing, using the results
                  effectively, and security and privacy for client machines.
                </p>
                <p className="text-base text-justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  The processing algorithms allow the data to be broken into
                  tiny chunks for analysis. On a smaller scale, grid computing
                  is moving into several large financial enterprises to provide
                  more processing capability for their employees. This is done
                  by harnessing the combined and unused processing power of
                  their servers and their end-user workplace computers to
                  augment their machines for the fast solutions of large
                  financial applications.
                </p>
              </div>
            </div>

            <div className="grid gap-2 p-2 mt-20  sm:mb-10 sm:p-5 lg:grid-cols-2 border-white rounded-xl shadow-xl">
              <div>
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Cloud Computing
                </h1>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  It can be viewed as a simple but potentially powerful
                  conceptual expansion of{" "}
                  <strong>client-server computing</strong>. Its basic premise is
                  that many functions of an organization&apos;s data center can
                  be moved to services on the Internet, which is &quot;in the
                  cloud.&quot; In its simplest form, cloud service provides
                  off-site storage facilities for organizations.
                </p>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  This service can be used as a backup resource or for immediate
                  emergency recovery. It can also be used to give users access
                  to files from anywhere the Internet is available, as well as
                  provide additional computing capability when and where it is
                  needed. There are two common usage of cloud computing:
                </p>
              </div>
              <div className="border-none mb-5 sm:p-5">
                <Image
                  className="shadow-xl rounded-xl  object-cover h-48 sm:h-full"
                  src={"/final-image/cloud computing.png"}
                  width={550}
                  height={550}
                  alt="Computer System"
                />
              </div>
            </div>

            <div className="grid gap-3 sp-2 mt-10 sm:gap-10 sm:mb-10 sm:p-5 lg:grid-cols-2">
              <div className="border-white rounded-xl shadow-xl p-5">
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Advantages of Cloud Computing
                </h1>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> The client&apos;s data center is simplified
                  and the cost is reduced.
                </p>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> Cloud services provide strong support for
                  user collaboration since multiple users can easily access the
                  same software, databases, tools, and data files from the
                  cloud.
                </p>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> Properly designed (with proper client
                  applications) cloud services can be accessed on a wide variety
                  of client equipment—fixed or mobile and thick or thin—from
                  anywhere the Internet is available.
                </p>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> A cloud-based system is inherently
                  scalable.
                </p>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> A cloud-based system can continue providing
                  services and recovery during an emergency
                </p>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> Cloud-based services can be useful for
                  short-term projects with intensive computing needs.
                </p>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> The use of IaaS allows developers to make
                  risky changes to their virtual machine environment without
                  threatening the safety of the production equipment.
                </p>
              </div>
              <div className="border-white rounded-xl shadow-xl p-5">
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Cloud Computing Risks
                </h1>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> The quality of security at the cloud
                  service is critically important. Even the smallest data leak
                  or data theft can compromise a client organization&apos;s
                  future
                </p>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> Cloud server outages or a loss of
                  connectivity at any point in the link between the client and
                  the cloud service can impede the ability of users to work.
                </p>
                <p className="text-sm text-justify text-[#4f7853] mt-2 mb-3 sm:text-base sm:mt-3 sm:mb-4 md:text-lg md:mb-5">
                  <strong>•</strong> The client organization is dependent on the
                  long-term commitment and viability of the cloud service.
                </p>
              </div>
            </div>

            <div className="grid gap-2 p-5 mt-10  sm:mb-10 sm:p-5 lg:grid-cols-2 border-white rounded-xl shadow-xl">
              <div>
                <h1 className="text-xl font-bold text-center mb-2 text-[#4f7853] sm:text-2xl sm:mb-3">
                  Graphics Processing Unit (GPU) Architecture
                </h1>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  This is a processor optimized for 2D and 3D graphics, video,
                  visual computing, and display. This term was coined in 2000
                  when the graphics device had become a processor from a
                  standard Video Graphics Array (VGA) controller.
                </p>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  <strong>GPU computing</strong> is the term used for computing
                  via a parallel programming language and an application
                  programming interface (API), without using the traditional
                  graphics API and graphics pipeline model. This is in contrast
                  to the{" "}
                  <strong>General-Purpose computation on GPU (GPGPU)</strong>{" "}
                  approach, which involves programming the GPU using a graphics
                  API and graphics pipeline to perform nongraphic tasks
                </p>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  <strong>Compute Unified Device Architecture (CUDA)</strong>,
                  on the other hand, is a scalable parallel programming model
                  and software platform for the GPU and other parallel
                  processors that allows programmers to bypass GPU&apos;s
                  graphics API and graphics interfaces.
                </p>
              </div>
              <div className="border-none mb-5 sm:p-5">
                <Image
                  className="shadow-xl rounded-xl  object-cover h-48 sm:h-full"
                  src={
                    "/final-image/Graphics Processing Unit (GPU) Architecture.png"
                  }
                  width={550}
                  height={550}
                  alt="Computer System"
                />
              </div>
              <div className="border-none mb-5 sm:p-5">
                <Image
                  className="shadow-xl rounded-xl  object-cover h-48 sm:h-full"
                  src={
                    "/final-image/Graphics Processing Unit (GPU) Architecture2.png"
                  }
                  width={550}
                  height={550}
                  alt="Computer System"
                />
              </div>
              <div>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  APIs have played an important role in the rapid, successful
                  development of GPUs and processors. These are the standard
                  graphics APIs used in rendering and computing:
                </p>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  <strong>• Direct3D</strong> This is one of the Microsoft
                  DirectX multimedia programming interfaces.
                </p>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  <strong>• OpenGL</strong>
                  This open standard was originally proposed and defined by
                  Silicon Graphics Incorporated.
                </p>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  <strong>• OpenCL</strong>
                  This is made by Khronos Group and is used for GPU Memory
                  buffering
                </p>
                <p className="text-base justify text-[#4f7853] mt-2 sm:text-lg sm:mt-3">
                  <strong>• Vulkan</strong>
                  This is a cross-platform computing API used by AMD.
                </p>
              </div>
            </div>

            <div className="w-full flex mt-8">
              <Link
                href={"/courses/references"}
                className="bg-[#4F7853] p-2 text-[white] font-bold rounded-md w-[200px] text-center ml-auto"
              >
                References
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
