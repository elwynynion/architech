import React from "react";
import Image from "next/image";
function TeamMember(team: {
  id: string;
  name: string;
  image: string;
  positions?: string;
  position: string;
}) {
  return (
    <div key={team.id} className="flex flex-col items-center">
      <div className="border-4 border-[#4F7853] rounded-full p-1 w-[250px] h-[250px] ">
        <Image
          src={team.image}
          alt={team.name}
          height={250}
          width={250}
          priority
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <p className="font-bold text-[20px] text-center">{team.name}</p>
      <p className="font-bold text-[#4F7853]">
        {team.positions || team.position}
      </p>
    </div>
  );
}

export default TeamMember;
