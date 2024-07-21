import CustomNavbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import UnderConstructionPage from "../../../components/compound/Construction";

export default function Store() {
  return (
    <>
      <CustomNavbar />
      <div className=" mb-5 text-center text-4xl font-semibold">Store</div>
      <UnderConstructionPage />
      <Footer />
    </>
  );
}
