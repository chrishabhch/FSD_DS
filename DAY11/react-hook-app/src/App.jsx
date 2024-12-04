import React from "react";
import CounterApp from "./components/CounterApp";
import ImageApp from "./components/ImageApp";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import MainLayout from "./components/MainLayout";
const App = () => {
  return (
    <div>
      {/* <ImageApp /> */}
      {/* <CounterApp /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route path="/CounterApp" element={<CounterApp />} />
          <Route path="/ImageApp" element={<ImageApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
