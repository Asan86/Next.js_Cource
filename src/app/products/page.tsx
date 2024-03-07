import Link from "next/link";
import React from "react";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>ProductList</h1>
      <h2>
        <Link href="products/1">Produkt 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Produkt 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          Produkt 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Produkt {productId}</Link>
      </h2>
    </>
  );
}
