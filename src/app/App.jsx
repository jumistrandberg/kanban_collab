import { Routes, Route } from "react-router-dom";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Pages
import Board from "../pages/Board";
import Admin from "../pages/Admin";
import MissingPage from "../pages/MissingPage";
import Settings from "../pages/Settings";
import ListPage from "../pages/ListPage";
import { useEffect, useState } from "react";
import useActiveUser from "../customHooks/useActiveUser";
// import List from "../pages/List";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Board />} />
          {/* TODO - List är utkommenterat till Kuiper har skapat sidan */}
          <Route path="/list" element={<ListPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
