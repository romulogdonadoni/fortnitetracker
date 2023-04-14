import { NavBar } from "@/styles/pages/app";
import { globalStyles } from "@/styles/pages/global";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  globalStyles();
  const [name, setName] = useState();

  return (
    <>
      <NavBar>
        <input placeholder="Nome do jogador" onChange={(e) => setName(e.target.value)} />
        <span />
        <Link href={`/tracker/${name}`}>
          <MagnifyingGlass size={20} weight="bold" color="#000" />
        </Link>
      </NavBar>
      <Component {...pageProps} />
    </>
  );
}

