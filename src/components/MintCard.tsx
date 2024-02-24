import React, { useEffect, useState } from "react";
import Image from "next/image";
import nftImage from "../assets/nft_image.png";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import nftABI from "../abis/nftABI.json";
import { CONFIG } from "../../config";

export default function MintCard() {
  const [totalSupply, setTotalSupply] = useState<string>("0");
  const [balance, setBalance] = useState<string>("0");
  const { address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: CONFIG.NFT_CONTRACT_ADDRESS,
    abi: nftABI,
    functionName: "mint",
  });
  const { data: txHash, write, isSuccess, reset } = useContractWrite(config);
  const { data: total, refetch: refetchTotalSupply } = useContractRead({
    address: CONFIG.NFT_CONTRACT_ADDRESS,
    abi: nftABI,
    functionName: "totalSupply",
  });
  const { data: amount, refetch: refetchBalance } = useContractRead({
    address: CONFIG.NFT_CONTRACT_ADDRESS,
    abi: nftABI,
    functionName: "balanceOf",
    args: [address],
  });

  useEffect(() => {
    if (total) {
      setTotalSupply(total.toString());
    }
  }, [total]);

  useEffect(() => {
    if (amount) {
      setBalance(amount.toString());
    }
  }, [amount]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-10">
      <Image src={nftImage.src} width={300} height={300} alt="nft-image" />
      <p>Total minted: {totalSupply}</p>
      <p>My NFT Balance: {balance}</p>
      <button
        disabled={!write}
        onClick={() => write?.()}
        className="bg-slate-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-slate-700"
      >
        Mint
      </button>
    </div>
  );
}
