import type { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';

const NavigationRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public */}
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default NavigationRoutes;
