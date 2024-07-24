import Navbar from "@/components/layout/navbar";

function StoreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default StoreLayout;