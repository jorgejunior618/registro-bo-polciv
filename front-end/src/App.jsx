import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/themes';

import StaticContent from './components/StaticContent';
import DefaultPage from './Pages/DefaultPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StaticContent />}>
            <Route path="" element={<DefaultPage />}/>
            <Route path="*" element={<DefaultPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
