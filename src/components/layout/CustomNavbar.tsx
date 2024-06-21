"use client";
import React from "react";
import {
  Navbar,
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


export default function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      isBlurred={false}
      className={isMenuOpen ? "bg-black/50" : "bg-transparent"}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <LogoComponent />
          <div className="flex flex-col font-bold text-inherit">

          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive>
          <Link className="text-gray-300" color="foreground" href="/about">
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
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link className="text-gray-300" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button className="text-gray-200" as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-black/50">
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
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}


const LogoComponent = () => (
  <Link href="/" className="text-3xl font-bold leading-none">
    <Image height={32} width={80} src="/logotipo.png" alt="Logo" />
  </Link>
);