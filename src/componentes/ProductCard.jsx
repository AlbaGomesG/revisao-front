import React from "react";
import styles from "./ProductCard.module.css"

export default function ProductCard({ product }) {
    
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.alt} className={styles.productImage} />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productPrice}>{product.price}</p>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.productRating}>
                <span>{'⭐'.repeat(product.rating.stars)}</span>
                <span>({product.rating.count})</span>
            </div>
        </div>
    );
}