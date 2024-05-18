"use client";
import React from "react";
import { create } from "zustand";
import { createContext } from "react";
import { useContext } from "react";

const usersInfo = {
  name: "John Doe",
  age: 25,
  email: "johndoe@gmail.com"
}

const usersInfoReact = createContext(usersInfo)
const usersInfoZustand = create(() => usersInfo)

// Types 
type Theme = "light" | "dark";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Contexts (Stores)
const useTheme = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (theme: Theme) => set({ theme }),
}));


const AboutPage = () => {
  const { theme, setTheme } = useTheme();
  const userInfoZustand = usersInfoZustand()
  const userInfoReact = useContext(usersInfoReact)
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div>Theme is: {theme}</div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div>
        <h1>Users Info</h1>
        <p>Name: {userInfoReact.name}</p>
        <p>Age: {userInfoReact.age}</p>
        <p>Email: {userInfoReact.email}</p>
      </div>
      <div>
        <h1>Users Info</h1>
        <p>Name: {userInfoZustand.name}</p>
        <p>Age: {userInfoZustand.age}</p>
        <p>Email: {userInfoZustand.email}</p>
      </div>
    </>
  );
};


// callbar function myfunction()() => {}
export default AboutPage;
