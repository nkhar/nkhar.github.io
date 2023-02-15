// import { createContext, useContext } from "react";

// const AppContext = createContext();

// export function AppWrapper({ children }) {
//   let sharedState = {
//     /* whatever you want */
//   };

//   return (
//     <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }

import { createContext, useState } from "react";

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState("ka");

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
