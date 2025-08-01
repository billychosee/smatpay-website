"use client";
import Link from "next/link";
import { ArrowUpRight, Landmark, Home, GraduationCap, Shield, UtensilsCrossed } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

// Map icon names to their components
const iconComponents = {
  Landmark,
  Home,
  GraduationCap,
  Shield,
  UtensilsCrossed
};

export default function IndustryCard({
  title,
  description,
  iconSrc,
}: IndustryCardProps) {
  // Get the appropriate icon component
  const IconComponent = iconComponents[iconSrc as keyof typeof iconComponents];
  
  return (
    <div className="flex flex-col justify-between gap-10 p-6 text-black transition-all duration-300 bg-white shadow-md group hover:bg-[#00b956] hover:text-white lg:gap-5 xl:gap-10">
      {/* Top: Icon and Title */}
      <div className="flex items-center justify-between transition-all duration-300">
        <h2 className="text-lg font-semibold lg:text-xs xl:text-lg">{title}</h2>
        <div className="p-4 transition-all duration-300 bg-gray-200 rounded-full group-hover:bg-white group-hover:p-5 lg:p-2 xl:p-4 group-hover:text-[#00b956]">
          {IconComponent && (
            <IconComponent 
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-90" 
            />
          )}
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-10 lg:gap-5 xl:gap-10">
        <p className="text-sm md:text-xs">{description}</p>
        <Link href="/">
          <ArrowUpRight
            className="mt-2 text-[#00b956] transition-colors duration-300 group-hover:text-white"
            size={18}
          />
        </Link>
      </div>
    </div>
  );
}