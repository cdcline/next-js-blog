import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Oh Hello World! Nunc accumsan eleifend est, in ornare lectus blandit id. Donec sollicitudin massa sed ipsum dignissim, at tempus urna malesuada. Sed gravida quam sit amet suscipit interdum. Nulla vitae bibendum nibh. Nullam eu metus dolor. Phasellus dapibus, tellus nec accumsan consequat, mi mi iaculis nunc, eu viverra mauris ligula nec mi. Curabitur vehicula sed orci id dictum. Sed vel aliquam augue, a finibus eros.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}