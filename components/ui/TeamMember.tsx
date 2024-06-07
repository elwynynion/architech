import React from "react";
import Image from "next/image";
function TeamMember(team: {
  id: string;
  name: string;
  image: string;
  position: string;
  span?: string;
}) {
  return (
    <div key={team.id} className="flex flex-col items-center">
      <div className="border-4 border-[#4F7853] rounded-full p-1">
        <Image
          src={team.image}
          alt={team.name}
          width={230}
          height={230}
          className="rounded-full"
        />
      </div>
      <p className="font-bold text-[20px]">{team.name}</p>
      <p className="font-bold text-[#4F7853]">{team.position}</p>
    </div>
  );
}

export default TeamMember;
