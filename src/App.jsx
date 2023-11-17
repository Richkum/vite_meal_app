import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LatestFoods from "./components/latest/Latest";
import LandDescribe from "./components/DescribeLand/LandDescribe";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LatestFoods />} />
            <Route path="/describeLand" element={<LandDescribe />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
