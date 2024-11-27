import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import Home from '@pages/Home';
import PaymentPage from '@pages/PaymentPage';
import { FailPage } from '@pages/PaymentPage/Fail';
import { SuccessPage } from '@pages/PaymentPage/Success';


function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Home />
      <div>하이</div>
      <Routes>
        <Route path="/payment/:quotationId" element={<PaymentPage />} />
        <Route path="/payment/success" element={<SuccessPage />} />
        <Route path="/payment/fail" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;