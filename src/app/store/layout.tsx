import Navbar from "@/components/layout/Navbar";

function StoreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default StoreLayout;