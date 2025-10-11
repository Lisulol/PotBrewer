"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type IngredientsContextType = {
  selectedIngredients: string[];
  setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>;
};

const IngredientsContext = createContext<IngredientsContextType | undefined>(undefined);

export const IngredientsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  return (
    <IngredientsContext.Provider value={{ selectedIngredients, setSelectedIngredients }}>
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = () => {
  const context = useContext(IngredientsContext);
  if (!context) {
    throw new Error("useIngredients must be used within an IngredientsProvider");
  }
  return context;
};
