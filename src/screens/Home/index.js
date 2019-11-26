import React, { useEffect } from "react";

export default function Home({ handleMenuActive }) {
  useEffect(() => {
    setTimeout(() => {
      handleMenuActive();
    }, 1000);
  }, []);
  return <h1>Home</h1>;
}
