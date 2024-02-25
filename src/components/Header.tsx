import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import Decimal from "decimal.js";
import Link from "next/link";
import styles from './Header.module.scss'; // Assuming you have an SCSS module for the Header

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
          <div className={`${styles.logo} text-2xl cursor-pointer`}>SDG 眾籌平台</div>
        </Link>
        <div className={`${styles.menuItem} relative flex`}>
          <Link href="/explore">
            <div className={`${styles.link} px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer`}>探索</div>
          </Link>
          <div className={`${styles.menuItem} text-lg cursor-pointer`}
               onMouseEnter={() => setIsMegaMenuOpen(true)}
               onMouseLeave={() => setIsMegaMenuOpen(false)}>
            <div className={`${styles.link} px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer`}>提案</div>
            {isMegaMenuOpen && (
              <div className={`${styles.megaMenu} absolute z-10 grid grid-cols-4 bg-white shadow-lg`}
                   onMouseEnter={() => setIsMegaMenuOpen(true)}
                   onMouseLeave={() => setIsMegaMenuOpen(false)}>
                {[...Array(17)].map((_, index) => (
                  <div key={index} className="p-4">
                    <Link href={`/proposal/${index + 1}`}>
                      <div className="hover:text-blue-500 cursor-pointer">Proposal {index + 1}</div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href="/explore">
            <div className={`${styles.link} px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer`}>探索</div>
          </Link>
        </div>
      </div>
      <div className={`${styles.account} flex flex-row items-center gap-2`}>
        <p className={`${styles.balance}`}>Balance: {balanceDec.toFixed(2)}</p>
        <ConnectButton />
      </div>
    </div>
  );
}
