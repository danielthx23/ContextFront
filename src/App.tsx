import './App.css'
import OtherThemedComponent from './components/OtherThemedComponent/OtherThemedComponent'
import ThemedComponent from './components/ThemedComponent/ThemedComponent'
import ThemeProvider from './contexts/ThemeContext/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent/>
    </ThemeProvider>
  )
}

export default App
