import Navbar from "@/components/layout/NavbarAlt";
import Footer from "@/components/layout/Footer";
import UnderConstructionPage from "@/components/compound/Construction";
import CustomNavbar from "@/components/layout/Navbar";

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <CustomNavbar />
      <div className="text-center text-4xl font-semibold">About</div>
      <UnderConstructionPage />
      <Footer />
    </>
  );
}
