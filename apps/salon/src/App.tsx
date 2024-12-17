// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import AuthPage from '@pages/Auth';
import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import MyPage from '@pages/My';
import MyShopPage from '@pages/My/Shop';
import OnboardingPage from '@pages/Onboarding';
import OnboardingPendingPage from '@pages/Onboarding/Pending';
import StartPage from '@pages/Onboarding/StartPage';
import QuotationPage from '@pages/Quotation';
import ReplyPage from '@pages/Quotation/ReplyPage';
import ReservationPage from '@pages/Quotation/ReservationPage';

import PrivateRoute from '@components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<StartPage />} />
          <Route path="/onboarding/detail" element={<OnboardingPage />} />
          <Route
            path="/onboarding/pending"
            element={<OnboardingPendingPage />}
          />

        <Route path="/quotation" element={<QuotationPage />} />
        <Route path="/quotation/reservation" element={<ReservationPage />} />
        <Route path="/quotation/reply/:requestId" element={<ReplyPage />} />

        <Route path="/my" element={<MyPage />} />
        <Route path="/my/shop" element={<MyShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
