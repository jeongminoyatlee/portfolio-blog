// components/MainProfile.js
import Link from 'next/link';
import styles from '../styles/MainProfile.module.css';

const MainProfile = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2>Hi, I'm John Doe</h2>
        <p>
          I'm a Landscape, Lifestyle, and Portrait Photographer. 
        </p>
        <p>
          I enjoy capturing the essence of the world and its people. 
          <br />
          My passion lies in uncovering the extraordinary within the everyday.
        </p>
        <p>
          From breathtaking sceneries to genuine moments, 
          <br />I aim to convey stories through my camera.
        </p>
        <Link href="menu/about" legacyBehavior>
          <a className={styles.aboutButton}>Read More</a>
        </Link>
      </div>
      <div className={styles.profileImgContainer}>
        <img src="/images/profile.jpg" alt="Profile Image" className={styles.profileImg} />
      </div>
    </section>
  );
};

export default MainProfile;
