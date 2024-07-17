import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import UnderConstructionPage from "@/components/compound/Construction";
import CustomNavbar from "@/components/layout/CustomNavbar";

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
