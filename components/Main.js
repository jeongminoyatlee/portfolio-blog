// components/Main.js
import { useState } from 'react';
import MainHeroImage from '../components/MainHeroImage';
import MainProfile from '../components/MainProfile';
import MainPosts from '../components/MainPosts';
import posts from '../data/posts';

export default function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <main>
      <MainHeroImage />
      <MainProfile />
      <MainPosts posts={posts} currentPage={currentPage} paginate={paginate} continent="" />
    </main>
  );
}
