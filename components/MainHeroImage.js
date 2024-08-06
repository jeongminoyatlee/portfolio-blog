// components/MainHeroImage.js
import styles from '../styles/MainHeroImage.module.css';

const MainHeroImage = () => {
  return (
    <div className={styles.heroImage}>
      <img src="/images/hero.jpg" alt="Hero Image" className={styles.heroImg} />
      <div className={styles.heroText}>
        <h1>Explore More</h1>
        <br />
        <p>- Discover the world's hidden gems and create unforgettable memories -</p>
      </div>
    </div>
  );
};

export default MainHeroImage;