"use client"

import Banner from "@/components/layout/Banner";

// import { Button } from "@/components/ui/button";
// import { Spacer } from "@nextui-org/react";
// import { Button as ButtonUI } from "@nextui-org/react";

export default function Home() {
  const bgHeroImage: string =
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <main className="">
      {/* <DisplayCard /> */}
      {/* <Button>Shadcn Button</Button>
      <Spacer y={4} />
      <ButtonUI>NextUI Button</ButtonUI> */}
      <Banner
      bgImage={bgHeroImage}
      titleText="MOPERCLUB"
      subtitleText="Experiencias Inolvidables"
    />
    </main>
  );
}
