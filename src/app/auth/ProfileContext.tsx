import React, { createContext, useState, useContext, ReactNode } from "react";
import { DropdownOption } from "../../../types/global";

type GlobalContextType = {
  country: DropdownOption | null;
  todo: string;
  setCountry: (value: DropdownOption) => void;
  setTodo: (value: string) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface ProfileContextProps {
  children: ReactNode;
}

export function ProfileContext({ children }: ProfileContextProps) {
  const [country, setCountry] = useState<DropdownOption | null>(null);
  const [todo, setTodo] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ country, setCountry, todo, setTodo }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a ProfileContext");
  }
  return context;
}
