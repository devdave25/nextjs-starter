import * as React from 'react';

import Button from '@/components/button/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const pingApi = async () => await fetch('/api/ping');

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <Button className='mx-2 my-2' onClick={pingApi}>
            Ping server
          </Button>
        </section>
      </main>
    </Layout>
  );
}
