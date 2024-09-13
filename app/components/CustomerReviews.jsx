import { Rating } from "@mui/material";

export default function CustomerReviews() {
  const list = [
    {
      name: "Penny albritoon",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      rating: 4.5,
      imageLink:
        "https://emilly-store1.myshopify.com/cdn/shop/files/bakery-testi-1.jpg?v=1721992196&width=512",
    },
    {
      name: "Oscar Nommanee",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      rating: 5,
      imageLink:
        "https://emilly-store1.myshopify.com/cdn/shop/files/bakery-testi-5.jpg?v=1721992196&width=512",
    },
    {
      name: "Emma Watsom",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      rating: 4.5,
      imageLink:
        "https://emilly-store1.myshopify.com/cdn/shop/files/bakery-testi-6.jpg?v=1721992197&width=512",
    },
  ];
  return (
    <section className="flex justify-center">
      <div className="w-full p-5 md:max-w-[900px] flex flex-col gap-3">
        <h1 className="text-center font-semibold text-xl">
          Our customers love
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {list?.map((item) => {
            return (
              <div className="flex flex-col gap-2 p-4 rounded-lg justify-center items-center border">
                <img
                  src={item?.imageLink}
                  className="h-32 w-32 rounded-full object-cover"
                  alt=""
                />
                <h1 className="text-sm font-semibold">{item?.name}</h1>
                <Rating
                  size="small"
                  name="customer-rating"
                  defaultValue={item?.rating}
                  precision={item?.rating}
                  readOnly
                />
                <p className="text-sm text-gray-500 text-center">
                  {item?.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
