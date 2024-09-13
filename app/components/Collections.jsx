"use client";

import { Button } from "@nextui-org/react";
import { collection } from "firebase/firestore";
import { Heart } from "lucide-react";
import Slider from "react-slick";

export default function Collections({ collections }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (collections.length === 0) {
    return <></>;
  }

  return (
    <div className="overflow-hidden p-10">
      <Slider {...settings}>
        {(collections?.length <= 2
          ? [...collections, ...collections, ...collections]
          : collections
        )?.map((collection) => {
          return (
            <div className="px-2">
              <div className="flex gap-4 bg-gradient-to-tr to-[#d9e2f1] from-[#cce7f5] p-7 w-full rounded-xl h-full">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-semibold">
                      {collection?.title}
                    </h1>
                    <h1 className="text-gray-600 text-sm max-w-96 line-clamp-2">
                      {collection?.subTitle}
                    </h1>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-blue-500 text-white text-sm">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
                <div className="w-full">
                  <img
                    className="h-[9rem]"
                    src={collection?.imageURL}
                    alt={collection?.title}
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
