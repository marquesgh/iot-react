import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import './index.css';
import ActiveEquipmentPage from './pages/ActiveEquipment';
import FaqPage from './pages/Faq';
import InactiveEquipmentPage from './pages/InactiveEquipment';
import MessagePage from './pages/Message';
import SituationEquipmentPage from './pages/SituationEquipment';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<MessagePage />} />
        <Route exact path="/message" element={<MessagePage />} />
        <Route exact path="/active" element={<ActiveEquipmentPage />} />
        <Route exact path="/inactive" element={<InactiveEquipmentPage />} />
        <Route exact path="/situation" element={<SituationEquipmentPage />} />
        <Route exact path="/faq" element={<FaqPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
