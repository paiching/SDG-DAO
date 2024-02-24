import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import Decimal from "decimal.js";
import Link from "next/link";

export default function Header() {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    addressOrName: address,
  });
  const [balanceDec, setBalanceDec] = useState(new Decimal(0));

  useEffect(() => {
    if (balance?.formatted) {
      setBalanceDec(new Decimal(balance.formatted));
    }
  }, [balance]);

  return (
    <div className="py-4 px-4 w-full flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        <Link href="/">
          <div className="text-2xl cursor-pointer">SDG 眾籌平台</div>
        </Link>
        <div className="relative flex">
          <div className="text-lg cursor-pointer"> 
             <Link href="/no-poverty">
              <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">探索</div>
            </Link>
          </div>
          <div className="text-lg cursor-pointer"> 
             <Link href="/no-poverty">
              <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">提案</div>
            </Link>
          </div>
          <div className="text-lg cursor-pointer"> 
             <Link href="/no-poverty">
              <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">鑄幣</div>
            </Link>
          </div>
          <div className="text-lg cursor-pointer"> 
             <Link href="/no-poverty">
              <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">NFT</div>
            </Link>
          </div>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1">
            <Link href="/content">
              <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">NFT</div>
            </Link>
            {/* Add other menu items here */}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <p>Balance: {balanceDec.toFixed(2)}</p>
        <ConnectButton />
      </div>
    </div>
  );
}
