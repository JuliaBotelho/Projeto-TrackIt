import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contextElements/auth";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";
import HistoricPage from "./pages/HistoricPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/hoje" element={<TodayPage />}/>
          <Route path="/habitos" element={<HabitsPage />}/>
          <Route path="/historico" element={<HistoricPage />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

