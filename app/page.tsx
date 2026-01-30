"use client";

import { useEffect, useRef } from "react";
import { ConnectWallet } from "@coinbase/onchainkit/wallet";

export default function Home() {
  const car = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e:any) => {
      if(!car.current) return;

      let left = car.current.offsetLeft;

      if(e.key === "ArrowLeft") car.current.style.left = left - 20 + "px";
      if(e.key === "ArrowRight") car.current.style.left = left + 20 + "px";
    };

    window.addEventListener("keydown", move);
  }, []);

  return (
    <div style={{height:"100vh", background:"#333", position:"relative"}}>

      <div style={{padding:10}}>
        <ConnectWallet />
      </div>

      <div
        ref={car}
        style={{
          width:50,
          height:80,
          background:"red",
          position:"absolute",
          bottom:40,
          left:"45%"
        }}
      />
    </div>
  );
}
