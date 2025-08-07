"use client";
import React from "react";
import Card from "../componentes/ProductCard";
import Header from "../componentes/Header";
import styles from "./page.module.css"
import { useState, useEffect } from "react";
import { productsData } from "../data/products"

export default function Page() {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    useEffect(() => {
        setProductCount(products.length);
    }, [products]);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.productsGrid}>
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}