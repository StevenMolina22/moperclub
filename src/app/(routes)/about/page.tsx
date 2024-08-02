import About from "@/components/about";
import Breadcrumb from "@/components/common/breadcrumb";
import { FAQ } from "@/components/faq";
import Team from "@/components/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Moperclub",
  description: "This is About page description",
};

function AboutPage() {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Team />
      <FAQ className="mx-auto w-[700px]"/>
    </main>
  );
};

export default AboutPage;