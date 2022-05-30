import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {getPosts} from '../services'

// Components
import {PostCard, Categories, PostWidget} from '../components';




export default function Home ({posts}) {
  return (
    <div className="container px-10 mx-auto mb-8 bg-gray-300">
      <Head>
        <title>The Jack Track</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
      <div className='col-span-1 lg:col-span-8'>
{posts.map((post, index) => <PostCard post={post.node} key={post.title}/>)}
      </div>
 <div className='col-span-1 lg:col-span-4'>
      <div className='relative lg:sticky top-8'>
        <PostWidget/>
        <Categories/>
      </div>
      </div>
    </div>
   
     </div>
  )
}



// NEXT JS DATA FETCHING
export async function getStaticProps() {
  // return posts or return empty array
  const posts = (await getPosts()) || [];

return {
    props: { posts }
  }
}

