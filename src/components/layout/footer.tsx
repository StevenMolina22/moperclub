"use client";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { cn } from "@/lib/utils";

export default function Footer({className}: {className?: string}): JSX.Element {
  const [formInput, setFormInput] = useState("");

  // Handle form submission
  const handleForm = () => {
    alert(formInput + "Email function not implemented yet");
  };

  return (
    <footer className={cn("bg-background", className)}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold">
                Moperclub
              </span>
            </a>
            {/* ---------- FORM SECTION (Email Form) --------- */}
            <div className="mt-3 flex items-center gap-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  handleForm(); // Call handleForm on form submission
                }}
              >
                <input
                  placeholder="Email"
                  value={formInput}
                  onChange={(e) => setFormInput(e.target.value)} // Update formInput state on input change
                  type="email"
                  className="rounded-lg p-2 pl-3"
                />
              </form>
              <button
                onClick={handleForm}
                className="rounded-lg border p-2 px-4"
              >
                {" "}
                Send{" "}
              </button>
            </div>
          </div>

          {/* ----------- INFO MENU (Legal, Links, etc) ---------- */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
                Resources
              </h2>
              <ul className="font-medium text-muted-foreground dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Moperclub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Behind Scenes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
                Follow us
              </h2>
              <ul className="font-medium text-muted-foreground">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-muted-foreground dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

        {/* ------- COPYRIGHT SECTION & SOCIAL ICONS ------- */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground dark:text-gray-400 sm:text-center">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Moperclub™
            </a>
            . All Rights Reserved.
          </span>

          {/* ----- ICONS -----  */}
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            {/* Facebook */}
            <a
              href="#"
              className="text-muted-foreground hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            {/* Discord */}
            <a
              href="#"
              className="ms-5 text-muted-foreground hover:text-gray-900 dark:hover:text-white"
            >
              <FaDiscord />
              <span className="sr-only">Discord community</span>
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="ms-5 text-muted-foreground hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter />

              <span className="sr-only">Twitter page</span>
            </a>
            {/* GitHub */}
            <a
              href="#"
              className="ms-5 text-muted-foreground hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            {/* Dribbble */}
            <a
              href="#"
              className="ms-5 text-muted-foreground hover:text-gray-900 dark:hover:text-white"
            >
              <TbWorldWww />

              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
