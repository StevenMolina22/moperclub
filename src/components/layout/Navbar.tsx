"use client";
import React from "react";
import {
  Navbar as NavbarLayout,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar({className}: {className?: string}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", link: "/", isActive: true },
    { label: "About us", link: "/aboutus", isActive: false },
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
          className="text-white sm:hidden"
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
            <Link className="text-gray-300 font-medium text-lg" color="foreground" href={item.link}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        {/* <NavbarItem isActive>
          <Link className="text-gray-300" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300" color="foreground" href="/about">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300" href="/blog" aria-current="page">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300" color="foreground" href="/recommended">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300" color="foreground" href="store">
            Store
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Link className="text-background hover:underline" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-background hover:text-foreground"
            as={Link}
            color="default"
            href="#"
            variant="ghost"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Responsive links */}
      <NavbarMenu className="bg-black/90">
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
              className="w-full text-white"
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
  <Link href="/" className="text-3xl font-bold leading-none w-32 h-16">
    <Image height={400} width={1000} src="/logotipo.png" alt="Logo" />
  </Link>
);
