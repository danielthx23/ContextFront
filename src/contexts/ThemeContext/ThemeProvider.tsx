import { PropsWithChildren, useState } from "react";
import ThemeContext from "./ThemeContext";

export interface ThemeProviderProps extends PropsWithChildren { }

const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [backgroundColor, setBackgroundColor] = useState("white")
    const [textColor, setTextColor] = useState("161616")

    const changeTheme = (theme: string) => {
        switch (theme) {
            case "dark":
                setBackgroundColor("#161616")
                setTextColor("white")
                break;
            case "light":
                setBackgroundColor("white")
                setTextColor("#161616")
                break;
            case "contrast":
                setBackgroundColor("black")
                setTextColor("white")
                break;  
            case "dracula":
                setBackgroundColor("#282A36")
                setTextColor("#F8F8F2")
                break;
            case "classic":
                setBackgroundColor("#0059ff")
                setTextColor("white")
                break;
        }
    }

    return (
        <ThemeContext.Provider value={{ backgroundColor, textColor, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider