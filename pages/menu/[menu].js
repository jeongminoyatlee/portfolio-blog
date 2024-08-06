// pages/menu/[menu].js
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import MainPosts from '../../components/MainPosts';
import Footer from '../../components/Footer';
import posts from '../../data/posts';
import { continents } from '../../data/continents';
import mainStyles from '../../styles/MainPosts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContinentPage() {
  const router = useRouter();
  const { menu } = router.query; 
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const continentName = menu ? continents[menu.toLowerCase()] : '';

  if (!continentName) {
    return null;
  }

  return (
    <div className={mainStyles.pageContent}>
      <Head>
        <title>TRAVELOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MainPosts posts={posts} currentPage={currentPage} paginate={paginate} continent={continentName} />
      <Footer />
    </div>
  );
}
