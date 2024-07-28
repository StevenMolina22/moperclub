import About from "@/components/about";
import Breadcrumb from "@/components/common/breadcrumb";
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
    </main>
  );
};

export default AboutPage;