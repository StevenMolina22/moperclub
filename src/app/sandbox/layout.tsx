import Navbar from "@/components/layout/navbar";
import { ReactNode } from "react";

function SandboxLayout({children}: {children: ReactNode}) {
    return <div className="flex flex-col items-center">
    <Navbar/>
    {children}
    </div>
}

export default SandboxLayout;