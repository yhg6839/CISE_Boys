// components/NavBar.js
import Link from 'next/link';
import styles from './NavBar.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/SubmitArticle">Submit Article</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/ViewArticle">View Articles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
