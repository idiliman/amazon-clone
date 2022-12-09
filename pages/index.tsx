import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amajon</title>
      </Head>
      {/* Header */}
      <Header />
    </div>
  );
}
