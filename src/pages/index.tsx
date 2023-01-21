// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
import Main from './main';

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push('/store', undefined, { shallow: true });
  // }, []);

  // useEffect(() => {
  // }, [router.query.counter]);

  return (
    <div>
      <Main></Main>
    </div>
  );
}
