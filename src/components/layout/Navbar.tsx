"use client";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NavbarLayout,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "/", isActive: true },
    { label: "About us", link: "/about", isActive: false },
    { label: "Blog", link: "/blog", isActive: false },
    { label: "Contact", link: "/contact", isActive: false },
    { label: "Store", link: "/store", isActive: false },
  ];

  return (
    <NavbarLayout
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      disableAnimation
      isBlurred={false}
      className={cn(isMenuOpen ? "bg-black/90" : "bg-transparent", className)}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={cn(isMenuOpen ? "dark " : "", "text-foreground sm:hidden")}
        />
        <NavbarBrand>
          <LogoComponent />
          <div className="flex flex-col font-bold text-inherit"></div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Links */}
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, idx) => (
          <NavbarItem key={idx} isActive={item.isActive}>
            <Link
              className="font-medium text-foreground hover:underline"
              color="foreground"
              href={item.link}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className={cn(isMenuOpen ? "dark" : "")} justify="end">
        <NavbarItem className="">
          <Link className="text-foreground hover:underline" href="/auth/sign-in">
            Sign In
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-foreground"
            as={Link}
            color="default"
            href="/auth/sign-up"
            variant="ghost"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <UserButton />
        </NavbarItem>
      </NavbarContent>

      {/* Responsive links */}
      <NavbarMenu className="bg-black/90 dark">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full text-foreground"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarLayout>
  );
}

const LogoComponent = () => (
  <Link href="/" className="h-16 w-32 text-3xl font-bold leading-none">
    <Image height={400} width={1000} src="/logotipo.png" alt="Logo" />
  </Link>
);
