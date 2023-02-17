import { createContext, useState, ReactNode } from "react";
import { LocaleContextType } from "@schema/LocaleContextType";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export const LocaleProvider = ({ children }: Props) => {
  const [currentLocale, setCurrentLocale] = useState("en");

  return (
    <LocaleContext.Provider
      value={{
        currentLocale,
        setCurrentLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
