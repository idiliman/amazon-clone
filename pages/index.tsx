
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import ProductFeed from "../src/components/ProductFeed";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Home({ products }: { products: Products[] }) {
  
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amajon</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Main */}
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

// Fetching data from fakestoreapi.com
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
