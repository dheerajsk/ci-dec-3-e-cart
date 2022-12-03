import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";
import { useState } from "react";

function Home() {
  console.log("rerendering");
  const [products, setProducts] = useState([]);
  // async call.
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((jsonResponse) => {
      // we are changing state of component.
      setProducts(jsonResponse);
    });

  return (
    <div>
      <Header />
      This is where title is expected.
      {products.length > 0 && products[0].title}
      {/* <ProductCard /> */}
      <Footer />
    </div>
  );
}

export default Home;
