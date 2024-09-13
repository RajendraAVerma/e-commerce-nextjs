import Link from "next/link";

export default function Header() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <nav className="py-2 px-7 md:py-4 md:px-14 border-b flex items-center justify-between">
      <img className="h-5 md:h-9" src="/logo.png" alt="" />
      <div className="hidden md:flex gap-4 items-center font-semibold">
        {menuList?.map((item) => {
          return (
            <Link href={item?.link}>
              <button>{item?.name}</button>
            </Link>
          );
        })}
      </div>
      <Link href={"/login"}>
        <button className="bg-blue-600 px-5 font-bold py-2 rounded-full text-white">
          Login
        </button>
      </Link>
    </nav>
  );
}
