import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/TopBar';
import ExamplesList from './components/ExamplesList';
import CodeBlock from './components/CodeBlock';
import { FlexBox } from 'react-styled-flex';

const lightTheme = {
  colors: {
    background: '#F0F0F3',
    text: '#728AB7',
    text2: '#507ed4',
    lightShadow: '#FFFFFF',
    darkShadow: '#AEAEC066',
  },
};

const values = {
  values: {
    topBarHeight: '6rem',
  },
};

function App() {
  return (
    <ThemeProvider theme={{ ...lightTheme, ...values }}>
      <GlobalStyle />
      <FlexBox column height={'100%'}>
        <TopBar />
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
