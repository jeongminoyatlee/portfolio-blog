// pages/menu/about.js
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import aboutStyles from '../../styles/About.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div className={aboutStyles.pageContent}>
      <Head>
        <title>TRAVELOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={aboutStyles.content}>
        <img src="/images/profile.jpg" alt="About TRAVELOG" className={aboutStyles.image} />
        <div className={aboutStyles.textContent}>
          <h1>About TRAVELOG</h1>
          <br/> <br/>
          <p>Welcome to TRAVELOG, your number one source for all travel-related content.</p>
          <p>We are dedicated to giving you the very best travel guides, with a focus on adventure, cultural experiences, and unforgettable memories.</p>
          <p>Founded in 2024, TRAVELOG has come a long way from its beginnings.</p>
          <p>When we first started out, our passion for exploring the world drove us to start our own blog.</p>
          <p>We hope you enjoy our travel guides and stories as much as we enjoy offering them to you.</p>
          <p>If you have any questions or comments, please don't hesitate to contact us.</p> <br/>
          <p>Sincerely,<br />The TRAVELOG Team</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
