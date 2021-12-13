import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const pingApi = async () => await fetch('/api/ping');

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <button type='button' onClick={pingApi}>
            Ping server
          </button>
        </section>
      </main>
    </Layout>
  );
}
