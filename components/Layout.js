import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/tracks" style={styles.link}>Learning Tracks</Link>
          <Link href="/categories" style={styles.link}>Categories</Link>
          <Link href="/about" style={styles.link}>About Us</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

const styles = {
  header: {
    padding: '1rem',
    borderBottom: '1px solid #ddd',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#0070f3',
  },
};