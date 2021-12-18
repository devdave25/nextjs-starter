import { useState } from 'react';

import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import Seo from '@/components/seo';

export default function HomePage() {
  const [status, setStatus] = useState<string>('');

  const pingApi = async () => {
    setStatus('');
    const result = await fetch('/api/ping');
    setStatus(result.statusText);
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <Button className='mx-2 my-2' onClick={pingApi}>
            Ping server
          </Button>
          <strong>{status}</strong>
        </section>
      </main>
    </Layout>
  );
}
