import Hero from "@/components/hero";
import Header from "@/components/header";
import Services from "@/components/services";
import About from "@/components/about";
import Footer from "@/components/footer";
import Questions from "@/components/questions";

export default function Home() {
  return (
    <>
      <div id="topo" className="w-full h-[1px]"/>
      <Header />
      <div className="space-y-16 mt-32">
        <Hero />
        <Services />
        <About />
        <Questions />
        <Footer />
      </div>
    </>
  );
}
