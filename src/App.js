import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import SearchParams from './SearchParams';

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Adobt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
