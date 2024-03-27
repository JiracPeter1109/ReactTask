import { useState } from "react";
import bannerImage1 from "../assets/banner-1.jpg";
import bannerImage2 from "../assets/banner-2.jpg";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [bannerImage1, bannerImage2];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div
        id="controls-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === currentSlide ? "" : "hidden"
              }`}
              data-carousel-item
            >
              <img
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Banner ${index + 1}`}
              />
              <div className="relative h-96 overflow-hidden rounded-lg">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`duration-700 ease-in-out ${
                      index === currentSlide ? "" : "hidden"
                    }`}
                    data-carousel-item
                  >
                    <img
                      src={image}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={`Banner ${index + 1}`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-20 text-white">
                      <h1 className="text-xl font-bold text-black">
                        TRENDING NOW
                      </h1>
                      <p className="mt-6 text-5xl font-bold text-black">
                        Eat Clean & Green.
                        <br />
                        Eat Organic.
                      </p>
                      <p className="mt-7 text-xl text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Consequatur libero debitis eaque.
                      </p>
                      <button
                        type="button"
                        className="mt-7 px-6 py-3 text-lg font-medium text-white bg-red-500 "
                      >
                        Discover More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
