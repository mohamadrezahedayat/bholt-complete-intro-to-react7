import { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';

import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  const theme = useState('darkblue');
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
