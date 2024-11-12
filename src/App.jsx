import { createRoot } from "react-dom/client";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const ImageSlider = lazy(() => import("./ImageSlider"));
const InfiniteScroll = lazy(() => import("./InfiniteScroll"));

const App = () => {
  const images = [
    "/img/image1.jpg",
    "/img/image2.jpg",
    "/img/image3.jpg",
  ];

  return (
    <Router basename={''}>
      <div>
        <header className="relative flex flex-col items-center">
          <h2>Header</h2>
        </header>
        <Routes>
          <Route path="/" element={
            <div className="relative flex flex-col items-center">
              <h2>Main Page</h2>
              <Link to="/images" className="bg-blue-500 text-white px-4 py-2 rounded m-2">Go to Image Slider</Link>
              <Link to="/infiniteScroll" className="bg-blue-500 text-white px-4 py-2 rounded m-2">Go to InfiniteScroll</Link>
            </div>
          }/>
          <Route path="/images" element={
            <Suspense fallback={<div>Loading...</div>}>
              <ImageSlider images={images} />
            </Suspense>
          }/>
          <Route path="/infiniteScroll" element={
            <Suspense fallback={<div>Loading...</div>}>
              <InfiniteScroll />
            </Suspense>
          }/>
        </Routes>
        <footer className="relative flex flex-col items-center">
          <h2>Footer</h2>
        </footer>
      </div>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);