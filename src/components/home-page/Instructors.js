import React from "react";
// Import the image
import { instructors } from "../../constants/data";
import Image from "next/image";

import imageTest from "@/assets/images/team_card2.png";
export default function Instructors() {
  // Sample instructor data - you can expand this or fetch from an API

  return (
    <div className="max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto py-8 px-2">
      <p className="text-center md:text-left text-black text-[24px] font-medium">
        Key Persons
      </p>
      <h2 className="text-2xl md:text-4xl lg:text-[54px] font-bold mb-4 md:mb-8 text-center md:text-left text-black">
        Expert Instructors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Image container with fixed aspect ratio */}
            <div className="relative h-0 pb-[100%]">
              <Image
                src={instructor.image}
                alt={instructor.name}
                className="absolute h-full w-full object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-medium text-black">
                {instructor.name}
              </h3>
              <p className="mt-2 text-black">{instructor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
