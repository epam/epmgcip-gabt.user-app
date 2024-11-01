"use-client";
import { AnnonceSection } from "./annonce-section";
import { WelcomeText } from "./welcome-text";
import QuickLinks from "./quick-links";

export const Intro = () => {
  return (
    <>
      <WelcomeText />
      <AnnonceSection />
      <QuickLinks />
    </>
  );
};
