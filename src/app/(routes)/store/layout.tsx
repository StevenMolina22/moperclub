import Navbar from "@/components/layout/navbar";
import { ReactNode } from "react";

function StoreLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default StoreLayout;