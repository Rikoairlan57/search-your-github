import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex felx-row items-center space-x-5 justify-center">
      <Image alt="logo" src={"/logo.png"} width={100} height={100} />
      <div>
        <p className="text-5xl">Cari Orang</p>
        <p className="text-4xl font-bold">Github</p>
      </div>
    </div>
  );
};

export default Header;
