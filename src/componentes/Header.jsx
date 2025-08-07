import React from "react";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { productsData } from "../data/products";

export default function Header() {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    useEffect(() => {
        setProductCount(products.length);
    }, [products]);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <h1 className={styles.title}>🛒 Bem - vindo(a) a nossa loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços</p>
            </div>
            <h1 className={styles.title}>Total de produtos: {productCount}</h1>
        </header>
    );
}