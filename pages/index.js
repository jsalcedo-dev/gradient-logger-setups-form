import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import LoggerSetupsForm from "../components/LoggerSetupsForm";
import TestDatabase from "@/components/TestDatabase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logger Setups</title>
        <meta name="description" content="Logger Setups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-64">
          <div
            className="flex flex-auto justify-center items-center 
            h-full bg-[#5f5d5e] border-black border-2
            bg-[url('https://i.imgur.com/NlyiyoK.jpg')]  bg-no-repeat bg-center bg-auto"
          />
        </div>
        {/* <LoggerSetupsForm></LoggerSetupsForm> */}
        <TestDatabase></TestDatabase>
      </main>
    </div>
  );
}
