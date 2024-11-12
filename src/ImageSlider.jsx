import React, {useState} from "react";

const ImageSlider = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative flex flex-col items-center">
            <h2>Image Slider</h2>

            <div className="relative w-144 h-96">
                <button onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white px-4 py-2 rounded">
                    &lt;
                </button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-full object-cover"/>
                <button onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white px-4 py-2 rounded">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;