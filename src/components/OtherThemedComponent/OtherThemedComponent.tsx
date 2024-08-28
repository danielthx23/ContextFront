import  { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext/ThemeContext';
import "./OtherThemedComponent.css"

function OtherThemedComponent() {
    const { backgroundColor } = useContext(ThemeContext);

    const emoticon = () => {
        switch (backgroundColor) {
            case "#161616":
                return ":(";
            case "white":
                return ":)";
            case "black":
                return ":O";
            case "#282A36":
                return ">:)";
            case "#0059ff":
                return ":P";
            default:
                return ":|";
        }
    };

    return (
        <span>Oi sou outro componente usando context {emoticon()}</span>
    );
}

export default OtherThemedComponent;
