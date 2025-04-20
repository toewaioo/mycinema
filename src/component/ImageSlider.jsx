import React, { useState, useRef, useEffect } from "react";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      scrollTo(newIndex);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, images.length, interval]);

  const scrollTo = (index) => {
    setCurrentIndex(index);
    var add = 150;
    // if (index == 1) {
    //   add += 100;
    // } else if (index == 2) {
    //   add += 200;
    // }
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;
    const scrollLeft = (scrollWidth / images.length) * index;

    console.log(
      "sw:" + scrollWidth + "|cw:" + clientWidth + "|" + "sl:" + scrollLeft
    );
    scrollRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  return (
    <div className="block mx-auto w-[50%] md:w-[40%]">
      <div
        ref={scrollRef}
        className="flex overflow-hidden items-center"
        style={{ scrollSnapType: "x proximity", scrollBehavior: "smooth" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className=" h-full flex-shrink-0 scroll-snap-align-start"
          />
        ))}
      </div>
      <div className="m-5 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-2 rounded-full focus:outline-none ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
