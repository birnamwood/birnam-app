import logo from '../assets/logo.svg';
import styles from '../styles/pages/home.module.scss';

function Home() {
  return (
    <div className={styles.Home}>
      <header className={styles.AppHeader}>
        <p className={styles.AppTitle}>Birnam-App</p>
        <img src={logo} className={styles.AppLogo} alt="logo" />
      </header>
    </div>
  );
}

export default Home;
