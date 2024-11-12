import {createRoot} from "react-dom/client";
import React from "react";
import ImageSlider from "./ImageSlider";


const App = () => {

    const images = [
        "/img/image1.jpg",
        "/img/image2.jpg",
        "/img/image3.jpg",
    ]

    return (
        <div>
            <header className={"relative flex flex-col items-center"}>
                <h2>Header</h2>
            </header>
            <ImageSlider images={images}/>

            <footer className={"relative flex flex-col items-center"}>
                <h2>Footer</h2>
            </footer>
        </div>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
