"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProps = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextProps | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "ActiveSectionContext accessed outside of ActiveSectionContextProvider"
    );
  }

  return context;
}
