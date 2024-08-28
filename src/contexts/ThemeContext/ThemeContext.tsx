import { createContext } from "react"

export interface ThemeContextProps {
    backgroundColor: string
    textColor: string
    changeTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextProps>({ } as ThemeContextProps)

export default ThemeContext