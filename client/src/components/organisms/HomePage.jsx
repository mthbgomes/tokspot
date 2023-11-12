import React from "react";
import NavigationBar from "../molecules/Navbar/Navbar";
import HeroSection from "../molecules/HeroSection/HeroSection";
import { useLinkContext } from "../../contexts/LinkProvider";

export default function HomePage() {
  const { homeLinks } = useLinkContext();
  return (
    <div>
      <NavigationBar links={homeLinks} linkText={"Entrar"} />
      <HeroSection />
    </div>
  );
}
