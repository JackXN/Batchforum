import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, Footer} from '../components';
import { getPosts } from '../services';
import React, {useEffect} from 'react';
import Head from 'next/head';
import AOS from 'aos';
export default function Home({ posts} ) {


  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
    <Head>
      <title>Batch Forum</title>
    </Head>
    <div className="container px-10 mx-auto mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node}/>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div> 
      <Footer/>
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