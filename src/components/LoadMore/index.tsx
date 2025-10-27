import { useState, useRef, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import type { Product, Products } from "./types";
import styles from "./styles.module.css";

type LoadMoreProps = {
  url: string;
  limit?: number;
};

const LoadMore = ({ url, limit = 10 }: LoadMoreProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const hasMounted = useRef(false); //Used to prevent rerendering that would otherwise be caused by the loading state
  const {
    data: productData,
    loading,
    error,
  } = useFetch<Products>(`${url}?limit=${limit}&skip=${skip}`);

  useEffect(() => {
    if (productData?.products)
      setProducts((prevProducts) => [...prevProducts, ...productData.products]);
  }, [productData]);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const loadMore = (): void => {
    if (!productData) return;

    if (skip + limit < productData.total)
      setSkip((prevSkip) => prevSkip + limit);
  };

  if (!hasMounted.current && loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!products || !products.length) return <p>No products found!</p>;

  return (
    <div className={styles["products-container"]}>
      {products &&
        products.length &&
        products.map((product) => (
          <div key={product.id} className={`${styles["product-card"]}`}>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default LoadMore;
