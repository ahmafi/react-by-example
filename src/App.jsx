import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/TopBar';
import ExamplesList from './components/ExamplesList';
import CodeBlock from './components/CodeBlock';
import { FlexBox } from 'react-styled-flex';
import { useState } from 'react';

const lightTheme = {
  colors: {
    background: '#F0F0F3',
    text: '#728AB7',
    text2: '#507ed4',
    topShadow: '#AEAEC066',
    botShadow: '#FFFFFF',
  },
};

const darkTheme = {
  colors: {
    background: '#2e2e2e',
    text: '#728AB7',
    text2: '#507ed4',
    topShadow: '#3a3a3a',
    botShadow: '#232323',
  },
};

const values = {
  values: {
    topBarHeight: '6rem',
  },
};

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider
      theme={{ ...(theme === 'light' ? lightTheme : darkTheme), ...values }}
    >
      <GlobalStyle />
      <FlexBox column height={'100%'}>
        <TopBar theme={theme} toggleTheme={toggleTheme} />
        <FlexBox height={'100%'}>
          <ExamplesList />
          <FlexBox
            column
            width={'100%'}
            height={'100%'}
            ml={'29.4rem'}
            mt={values.values.topBarHeight}
            mr={'1rem'}
          >
            {/* these children are only for testing purposes */}
            {[...Array(20).keys()].map((k) => (
              <CodeBlock>{k}</CodeBlock>
            ))}
            <CodeBlock>100</CodeBlock>
            <CodeBlock>101</CodeBlock>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
