import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
// import { useAccount, useBalance } from "wagmi";
import Decimal from "decimal.js";
import Link from "next/link";
import styles from './Header.module.scss'; // Assuming you have an SCSS module for the Header
import { useAccount, useBalance } from "wagmi";

export default function Header() {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });
  const [balanceDec, setBalanceDec] = useState(new Decimal(0));
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    if (balance?.formatted) {
      setBalanceDec(new Decimal(balance.formatted));
    }
  }, [balance]);

  return (
    <div className={`${styles.header} py-4 px-4 w-full flex flex-row justify-between items-center`}>
      <div className={`${styles.nav} flex flex-row items-center gap-4`}>
        <Link href="/">
          <div className={`${styles.logo} text-2xl cursor-pointer`}>SDG 募資平台</div>
        </Link>
        <div className={`${styles.menuItem} relative flex`}>
          <Link href="/no-poverty">
            <div className={`${styles.link}  ${styles.menu} px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer`}>探索</div>
          </Link>
     
          <Link href="/explore">
            <div className={`${styles.link}  ${styles.menu} px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer`}>提案</div>
          </Link>
          
          <Link href="/explore">
            <div className={`${styles.link} ${styles.menu} px-4 py-2  text-gray-700 hover:bg-gray-100 cursor-pointer`}>關於</div>
          </Link>
          </div>
      </div>
      <div className={`${styles.account} flex flex-row items-center gap-2`}>
        <p className={`${styles.balance}`}>Balance: {balanceDec.toFixed(2)}</p>
       {/* <ConnectButton /> */}
      </div>
    </div>
  );
}
