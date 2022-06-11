import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import Head from 'next/head'
import React, {useEffect} from 'react';
import AOS from 'aos';
export default function Home({ posts} ) {


  useEffect(() => {
    AOS.init({})
  }, [])



  return (
    <>
    <Head>
    <title>Batchforum - Tech Discussions & Resources</title>
    <meta name='description' content='Batchforum - Tech discussions, topics, resources and blogs.'/>
    <meta property='og:title' content='Tech discussions, topics, resources and blogs'/>  
    <link rel="shortcut icon" href="/favicon.ico" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
    </Head>
    <div className="container px-10 mx-auto mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

//