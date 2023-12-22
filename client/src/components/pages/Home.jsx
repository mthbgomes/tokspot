import React from "react";
import NavigationBar from "../molecules/Navbar/Navbar.jsx";
import HeroSection from "../molecules/HeroSection/HeroSection.jsx";
import { useLinkContext } from "../../contexts/LinkContext.jsx";

export default function HomePage() {
  const { homeLinks } = useLinkContext();
  const heroTitle = "TokSpot CRM";
  const heroText = "A plataforma que potencializa o seu negócio.";
  const heroCTA = "Cadastre-se";
  const btnText = "Entrar";

  return (
    <div>
      <NavigationBar links={homeLinks} btnText={btnText} />
      <HeroSection
        heroTitle={heroTitle}
        heroText={heroText}
        heroCTA={heroCTA}
      />
    </div>
  );
}
