import Image from "next/image";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-6 grow py-2 space-x-3">
        {/* Logo */}
        <div className="mt-2 flex item-center grow sm:grow-0">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            alt={""}
            className="cursor-pointer"
          />
        </div>

        {/* Search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          {/* TODO:flex-shrink? */}
          <input
            className="p-2 h-full w-6 grow shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* Right item */}
        <div className=" text-white flex items-center text-xs space-x-6">
          <div className="link">
            <p>Hello Username</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="link flex items-center space-x-0.5">
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:block font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom navi */}
      <div></div>
    </header>
  );
}

export default Header;
