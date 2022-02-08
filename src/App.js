import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

const lightTheme = {
  colors: {
    background: '#F0F0F3',
    text: '#728AB7',
    lightShadow: '#FFFFFF',
    darkShadow: '#AEAEC064',
  },
  values: {
    listItem: {
      lightShadow: {
        x: -2,
        y: -2,
        blur: 3,
      },
      darkShadow: {
        x: 2.5,
        y: 2.5,
        blur: 3,
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div>Hello</div>
    </ThemeProvider>
  );
}

export default App;
