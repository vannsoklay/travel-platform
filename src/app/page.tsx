"use client";

import { Hero } from "@/components/Hero";
import { SectionCategories } from "./components/SectionCategories";
import { SectionCommunity } from "./components/SectionCommunity";
import { SectionBlog } from "./components/SectionBlog";
import { SectionPopular } from "./components/SectionPopular";
import { SectionDiscover } from "./components/SectionDiscover";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionCategories />
      <SectionBlog />
      <SectionPopular />
      <SectionDiscover />
      <SectionCommunity />
    </div>
  );
}
