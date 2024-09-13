"use client";

import { Button } from "@nextui-org/react";
import { Heart } from "lucide-react";
import Slider from "react-slick";

export default function FeaturedProductSlider({ featuredProducts }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {featuredProducts?.map((product) => {
          return (
            <div>
              <div className="flex gap-4 bg-[#f8f8f8] p-10 md:px-24 md:py-20 w-full">
                <div className="flex-1 flex flex-col gap-10">
                  <h2 className="text-gray-500">NEW FASHION</h2>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-semibold">{product?.title}</h1>
                    <h1 className="text-gray-600 text-sm max-w-96 line-clamp-2">
                      {product?.shortDescription}
                    </h1>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-blue-500 text-white text-sm">
                      BUY NOW
                    </Button>
                    <Button className="border-2 border-blue-500 bg-white text-blue-500 text-sm">
                      ADD TO CART
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-pink-500 bg-white text-pink-500"
                    >
                      <Heart size={14} />
                    </Button>
                  </div>
                </div>
                <div className="">
                  <img
                    className="h-[23rem]"
                    src={product?.featureImageURL}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
