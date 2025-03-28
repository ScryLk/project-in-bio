import Image from "next/image";
import Hero from "./components/landing-page/hero";
import Header from "./components/landing-page/header";

export default function Home() {
  return (
    <div className=" max-w-7xl mx-auto border border-border-primary">
     <Header />
     <Hero />
     {/* 
      <Hero />
      <VideoExplanation/>
      <Pricing/>
      <Explanation/> */}
    </div>
  );
}
