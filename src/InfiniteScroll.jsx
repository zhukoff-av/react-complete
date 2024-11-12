import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";
import Card from "./Card";

const InfiniteScroll = () => {
    const [cards, setCards] = useState(Array.from({length: 20}, (_, i) => i + 1));
    const observer = useRef();

    const lastCardRef = (node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setCards((prevCards) => [
                    ...prevCards,
                    ...Array.from({length: 20}, (_, i) => i + prevCards.length + 1),
                ]);
            }
        });
        if (node) observer.current.observe(node);
    };

    return (
        <div className="relative flex flex-col items-center">
            <h2>Infinite Scroll</h2>
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded m-2">Go to Main</Link>
            <div className="grid grid-cols-4 gap-4">
                {cards.map((card, index) => {
                    if (index === cards.length - 1) {
                        return <div ref={lastCardRef} key={card}><Card number={card}/></div>;
                    } else {
                        return <Card key={card} number={card}/>;
                    }
                })}
            </div>
        </div>
    );
};

export default InfiniteScroll;