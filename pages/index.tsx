import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


// Components
import {PostCard, Categories, PostWidget} from '../components';



const posts = [
  {title: 'React Testing', excerpt: 'Learn React Testing'},
  {title: 'React Tailwind', excerpt: 'Learn React Testing'},
]

const Home: NextPage = () => {
  return (
    <div className="container px-10 mx-auto mb-8 bg-gray-300">
      <Head>
        <title>The Jack Track</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
      <div className='col-span-1 lg:col-span-8'>
{posts.map((post, index) => <PostCard post={post} key={post.title}/>)}
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

export default Home
