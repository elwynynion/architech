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
      <div className="container">
        <Navigation name="reference" />
        <div className="border-4 border-[#4F7853] rounded-lg p-6">
          <h1 className="text-[#4F7853] font-bold text-[35px] text-center">
            References
          </h1>
          <div className="relative">
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-l-[10px] border-t-transparent border-r-0 border-b-transparent left-0 absolute top-[-8px]"></div>
            <hr className="border-[2px] border-[#4F7853]" />
            <div className="w-0 h-0 border-[#4F7853] border border-b-[10px] border-t-[10px] border-r-[10px] border-t-transparent border-l-0 border-b-transparent right-0 absolute top-[-8px]"></div>
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-[#4F7853] text-[24px]">
              Architecture Basics
            </h1>
            <p className="text-[#4F7853]">
              Anderson, J. R. (2010). Cognitive psychology and its implications
              (7th ed.). Worth Publishers.
              <br />
              Baker, A. B., & Silverstein, M. J. (2016). The rise of social
              media and its impact on society. Journal of Social Media Studies,
              12(2), 45-60. https://doi.org/10.1016/jsms.2016.02.003
              <br />
              Brown, L. M., & Green, S. T. (2018). Analyzing the environmental
              impact of urban sprawl. Urban Ecology Review, 25(1), 87-102.
              <br />
              Chomsky, N. (2013). On anarchism. New Press. Diaz, C. R. (2021).
              Modern architecture: A critical history. Thames & Hudson. Ellis,
              <br />
              J. M., & Harper, D. (2019). The evolution of video gaming culture.
              Gaming Studies Quarterly, 8(4), 211-230.
              <br />
              Fisher, M. (2015, June 23). The impact of climate change on coral
              reefs. National Geographic.
              https://www.nationalgeographic.com/environment/article/climate-change-coral-reefs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
