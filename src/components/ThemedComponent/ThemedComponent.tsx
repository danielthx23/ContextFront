import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import './ThemedComponent.css'
import OtherThemedComponent from '../OtherThemedComponent/OtherThemedComponent';

function ThemedComponent() {
    const { textColor, backgroundColor, changeTheme } = useContext(ThemeContext);
  return (
    <div style={{ color: textColor, backgroundColor: backgroundColor}}>
        <h1>
            Sou um componente usando context
        </h1>

        <OtherThemedComponent/>

        <select name="Tema" onChange={(option) => changeTheme(option.target.value)}
            style={{ color: textColor, backgroundColor: backgroundColor}}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="contrast">Contrast</option>
            <option value="dracula">Dracula</option>
            <option value="classic">Classic</option>
        </select>
    </div>
  )
}

export default ThemedComponent