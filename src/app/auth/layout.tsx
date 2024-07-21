import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-4">{children}</div>
        <div className="bg-muted hidden items-center lg:flex">
          <Image
            src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67"
            alt="Image"
            width="1920"
            height="760"
            className="h-[700px] w-full rounded-s-2xl object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
