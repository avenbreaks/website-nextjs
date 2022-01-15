import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Gitshock Finance A Based Polkadot Networks Multi Chain</title>
        <meta
          name="description"
          content="Gitshock Finance A Based Polkadot Networks Multi Chain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Git Edgeware"
        title=" Take control of Smart Contract and Identity.">
         Worse yet, is that a structured analysis and classification of these vulnerabilities is lacking. In this paper, we present the first formal classifications of these vulnerabilities using National Institute of Standards and Technologies Bugs (NIST’S) Framework and propose two new classes: distributed system protocol (DSP) and distributed system resource management (DRM).
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Video />
      <SectionTitle
        pretitle="Team"
        title="The team behind GTFX">
      </SectionTitle>
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
