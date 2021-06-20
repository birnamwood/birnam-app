import { Link } from 'react-router-dom';
import styles from '../styles/components/header.module.scss';

function Header() {
  return (
    <div className={styles.Header}>
        <Link to="/" className={styles.HeaderItem}>Home</Link>
        <Link to="/hello" className={styles.HeaderItem}>Hello</Link>
        {/* <Link to="/404" className="header-item">404</Link> */}
    </div>
  );
}

export default Header;