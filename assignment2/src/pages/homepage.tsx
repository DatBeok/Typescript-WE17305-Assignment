import { useEffect, useState } from "react";
import { getAll } from "../api/products";
import Product from "../components/product";
import { IProduct } from "../models";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const { data } = await getAll();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
