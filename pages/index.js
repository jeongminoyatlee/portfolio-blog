// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>TRAVELOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main posts={posts} />
      <Footer />
    </div>
  );
}
