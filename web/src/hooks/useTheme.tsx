import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState();

    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}
