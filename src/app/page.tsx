import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className="flex flex-col items-center">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={283}
          height={64}
        />
        <Image
          src="/nextjs.svg"
          alt="Next.js Logo"
          width={283}
          height={64}
        />
      </div>
    </main>
  );
}
