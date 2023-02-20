import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Button } from "../Button";

export function Hero() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },

      slides: {
        perView: 1,
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <section className="">
      <div
        className="h-96 md:h-[600px] relative mb-4 keen-slider"
        ref={sliderRef}
      >
        <div className="keen-slider__slide">
          <div
            className="max-h-full 
              before:content-[''] before:opacity-50 before:backdrop:blur-xl before:absolute 
              before:top-0 before:left-0 before:bg-black before:w-full before:h-full"
          >
            <img
              src="/src/assets/laptop.jpg"
              alt="Image of a laptop with a mac logo on it"
              className="max-h-full w-full object-cover object-center"
            />

            <div
              className="
                absolute text-gray-100 top-0 left-0 mx-auto h-full w-full items-center
                flex
              "
            >
              <div className="container px-14 grid grid-cols-2">
                <div className="flex flex-col">
                  <h2 className="font-bold text-2xl mb-4">Lorem Ipsum</h2>

                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consequatur qui porro quidem eos dolorum, tenetur odio
                    dignissimos rerum, temporibus quibusdam expedita ea
                    recusandae natus atque, quod dicta delectus quia ipsa!
                  </p>

                  <Button>Hello</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
