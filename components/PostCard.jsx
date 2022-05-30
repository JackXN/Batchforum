import React from 'react';

// COmponents
import Link from 'next/link';

import photoUrl from '../public/bg.jpeg'



const PostCard = ({post}) => {
    // console.log(post.author)
    console.log(post)
    return (
        <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8'>
            <div className='relative mb-6 overflow-hidden shadow-md pb-80'>
                <img 
                src={post.featuredImage.url}
                alt={post.title}
                className='absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg'
                />
            </div>
            <h1 className='mb-8 text-3xl font-semibold text-center transition duration-100 cursor-pointer hover:text-pink-600'>
<Link href={`/post/${post.slug}`}>
    {post.title}
</Link>
            </h1>
            <div className='items-center justify-center block w-full mb-8 text-center lg:flex'>
                <div className='flex items-center justify-center w-full mb-4 mr-8 lg:mb-0 lg:w-auto'>
                <img
                alt={post.author.name}
                height='30px'
                width='30px'
                className='align-middle rounded-full'
                src='./avatar.png'
                />
                </div>
            </div>
        </div>
    )
}

export default PostCard
