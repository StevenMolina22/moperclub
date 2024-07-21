"use client";
import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { SearchBar } from "../compose/SearchBar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import SignInButton from "@/features/auth/SignInButton";
import SignupButton from "@/features/auth/SignupButton";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Sobre Nosotros", path: "/about" },
  // { label: "Recomendaciones", path: "/recommended" },
  { label: "Productos", path: "/store" },
  { label: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="relative flex items-center justify-between bg-transparent px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold leading-none">
          <Image height={32} width={144} src="/logotipo.png" alt="Logo" />
        </Link>

        {/* Hamburger menu */}
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center p-3 text-blue-600"
            onClick={toggleNavbar}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation links */}
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
          {/* {navLinks.map((link, index) => (
            <React.Fragment key={link.path}>
              <li>
                <Link
                  href={link.path}
                  className="text-sm text-gray-400 hover:font-bold hover:text-red-600 "
                >
                  {link.label}
                </Link>
              </li>
              {index !== navLinks.length - 1 && (
                <li className="text-gray-300">
                  <FaEllipsisVertical className="text-sm" />
                </li>
              )}
            </React.Fragment>
          ))} */}
        </ul>

        {/* Search & Authentication */}
        <div className="hidden lg:inline-block">
          <div className="flex gap-2">
            <SearchBar />
            <SignInButton />
            <SignupButton />
          </div>
        </div>
      </nav>

      {/* Responsive navbar container */}
      {isNavbarOpen && (
        <div className="navbar-menu relative z-50">
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-900 opacity-80"
            onClick={toggleNavbar}
          />
          <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-gray-800 px-6 py-6">
            {/* Visible items */}
            <div className="mb-8 flex items-center">
              <Link
                href="/"
                className="mr-auto text-3xl font-bold leading-none"
              >
                <Image height={24} src="/logotipo.png" alt="Logo" />
              </Link>
              <button onClick={toggleNavbar} className="navbar-close">
                <MdClose className="text-3xl text-slate-500" />
              </button>
            </div>

            {/* Hidden items */}
            <div>
              {/* <ul>
                {navLinks.map((link) => (
                  <li key={link.path} className="mb-1">
                    <Link
                      href={link.path}
                      className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-gray-700 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>

            {/* Authentication buttons (hidden) */}
            <div className="mt-auto">
              <div className="flex flex-col gap-3 pt-6">
                <Button>Sign in</Button>
                <Button>Sign up</Button>
              </div>
              <p className="my-4 text-center text-xs text-gray-400">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
