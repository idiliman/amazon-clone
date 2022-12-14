import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sign } from "crypto";

type Props = {};

function Header({}: Props) {
// const handleSignin:any  = signIn();


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
          <div onClick={signIn<any>} className="link">
            <p>Hello Username</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center space-x-0.5">
            <span className="absolute top-0 -right-2 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-lg text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:block font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom navi */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars4Icon className="h-6 mr-1" />
          All
        </p>
        {/* FIXME: Show hidden item in small screen / "View more:" */}
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="link hidden lg:block">Electronics</p>
        <p className="link hidden lg:block">Food & Grocery</p>
        <p className="link hidden lg:block">Prime</p>
        <p className="link hidden lg:block">Buy Again</p>
        <p className="link hidden lg:block">Shopper & Toolkit</p>
        <p className="link hidden lg:block">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
