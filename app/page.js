import styles from './page.module.css';


export default async function Home() {
  return (
    <main className={styles.startPage}>
        <div>
          <h2 className={styles.firstPage}>Get your popcorn ready... 🍿</h2>
            <a className={styles.linkButton} href="/movies/popular">Browse movies</a>
            <a  className={styles.linkButton} href="/register">Register</a>
        </div>
    </main>
  );
}
