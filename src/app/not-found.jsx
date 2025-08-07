import Link from "next/link";
import styles from './notfound.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
                <h1>🔎 A Página que você está procurando não foi encontrada</h1>
                <p>Desculpe, a página que você está procurando não existe ou está em construção.</p>
                    <div className={styles.actions}>
                        <Link className={styles.link} href="/">Voltar para a página inicial</Link>
                    </div>
            
        </div>
    );
}
