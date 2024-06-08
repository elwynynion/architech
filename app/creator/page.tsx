"use client";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import { team } from "@/data/team";
import { useState } from "react";
import TeamMember from "@/components/ui/TeamMember";

const btnLabel = [
  "ALL",
  "WEB DEVELOPER",
  "AUTHENTICATION DEV",
  "SEO DEV",
  "DOCUMENTATION TEAM",
  "PRELIM RESEARCHER",
  "MIDTERM RESEARCHER",
  "PRE-FINAL RESEARCHER",
  "FINAL RESEARCHER",
];

function page() {
  const [teams, setTeams] = useState(team);
  const [temp, setTemp] = useState(team);
  const [activeButton, setActiveButton] = useState("ALL");

  function filter(position: string) {
    setActiveButton(position);
    if (position === "ALL") {
      return setTemp(teams);
    }
    const pos = teams.filter((team) => team.position === position);
    setTemp(pos);
  }

  return (
    <div className="bg-[#FFFEFA] h-full px-5 ">
      <div className="container p-0">
        <Navigation name="creator" />
        <section className="flex items-center my-16">
          <div className="w-full text-center">
            <h2 className="text-[#50814B]  text-[45px]">
              Meet the <b>Team</b>
            </h2>
          </div>
          <div className="relative max-[850px]:hidden">
            <Image
              src={"/elements/element1.png"}
              alt=""
              width={250}
              height={450}
              className="absolute left-[-100px] bottom-[-15px]"
            />
          </div>
        </section>
        <section className="space-y-12">
          <div className="text-[#4F7853] text-[20px] font-bold grid-cols-6 text-center">
            {btnLabel.map((label) => (
              <button
                key={label}
                className={`px-2 mx-1 hover:bg-[#6ca765] hover:text-[#FFFEFA] ${
                  activeButton === label ? "bg-[#6ca765] text-[#FFFEFA]" : ""
                }`}
                onClick={() => filter(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-2 max-xl:grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2  max-sm:grid-cols-1">
            {temp.map((team) => (
              <TeamMember
                key={team.id}
                id={team.id}
                name={team.name}
                image={team.image}
                position={team.position}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
