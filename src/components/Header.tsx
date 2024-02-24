import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import Decimal from "decimal.js";
import Link from "next/link";

export default function Header() {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });
  const [balanceDec, setBalanceDec] = useState<Decimal>(new Decimal(0));

  useEffect(() => {
    if (balance) {
      setBalanceDec(new Decimal(balance.formatted));
    }
  }, [balance]);

  return (
    <div className=" py-4 px-4 w-full flex flex-row justify-between items-center">
      <Link href="/"><p className="text-2xl">SDG 眾籌平台</p></Link>
      
        <Link href="/content">
              Content {/* 選單項目指向 Content 頁面 */}
        </Link>
      <div className="flex flex-row items-center gap-2">
        <p>Balance: {balanceDec.toFixed(2)}</p>
        <ConnectButton />
      </div>
    </div>
  );
}
