"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { modules } from "@/data/module";
import Navigation from "@/components/shared/Navigation";
import Link from "next/link";

interface Module {
  module: string;
  link: string;
}

interface ModuleSection {
  [key: string]: Module[];
}

function Page() {
  const [moduleData, setModuleData] = useState(modules);
  const [tempData, setTempData] = useState<ModuleSection[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }

  useEffect(() => {
    const filteredData = moduleData
      .map((moduleSection) => {
        const filteredTerms: ModuleSection = {};
        Object.entries(moduleSection).forEach(([section, terms]) => {
          const filtered = terms.filter((term: Module) =>
            term.module.toLowerCase().includes(searchValue.toLowerCase())
          );
          if (filtered.length > 0) {
            filteredTerms[section] = filtered;
          }
        });
        return filteredTerms;
      })
      .filter((section) => Object.keys(section).length > 0);

    setTempData(filteredData);
  }, [searchValue]);

  return (
    <div className="bg-[#FFFEFA]">
      <div className="container">
        <Navigation name="courses" />
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search something"
            className="max-w-[600px] w-full border border-[#4F7853]  rounded-full py-2 px-4 focus:border-[#fafafa] my-10 mx-auto"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <h1 className="font-bold mb-4 text-[#4F7853] text-[60px] text-center max-[980px]:text-[50px] max-[770px]:text-[40px] max-[625px]:text-[30px] max-[500px]:text-[27px]">
          Computer System Architecture
        </h1>
        <div className="space-y-7">
          {tempData.length === 0 ? (
            <p className="text-[#4F7853] text-center">No results found.</p>
          ) : (
            tempData.map((moduleSection, index) =>
              Object.entries(moduleSection).map(([section, terms]) => (
                <section key={index}>
                  <p className="text-[#4F7853] font-bold text-[22px]">
                    {section}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-white max-[800px]:grid-cols-1 mt-2">
                    {terms.map((term: Module, idx) => (
                      <Link href={term.link} key={idx}>
                        <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                          {term.module}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
