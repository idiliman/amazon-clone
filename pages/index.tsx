import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1 className="text-red-500">Test</h1>
      {/* Header */}
      <Header />
    </div>
  );
}
