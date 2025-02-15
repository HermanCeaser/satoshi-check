import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import AccountPage from "./routes/AccountPage";
import CoinPage from "./routes/CoinPage";
import axios from "axios";
import Footer from "./Components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
const App = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data)
    });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home coins={coins} />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/account" element={<AccountPage />} />

              <Route path="/coin/:coinId" element={<CoinPage />}>
                <Route path=":coinId" />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>

      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
