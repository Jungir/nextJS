import { useRouter } from 'next/router';
import Layout from '../components/myLayout';

//to add to the component directly rather than export 
const Content = () => {
    //useRouter hook to get our router with query object
    const router = useRouter();
    return (
      <>
        <h1>{router.query.title}</h1>
        <p>This is the blog post content.</p>
      </>
    );
  };

//to get the route params use next/router
const Page = () => {
  return (
    <Layout>
        <Content/>
    </Layout>
  );
};

export default Page;
