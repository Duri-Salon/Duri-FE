import { Global } from '@emotion/react';
import { globalStyle } from '@duri-fe/ui/styles';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <div>안녕</div>
    </BrowserRouter>
  );
}

export default App;
