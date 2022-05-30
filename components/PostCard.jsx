import React from 'react';

const PostCard = ({post}) => {
    // console.log(post)
    return (
        <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8'>
            <div className='relative mb-6 overflow-hidden shadow-md pb-80'>
                <img 
                src={post.featuredImage.url}
                alt={post.title}
                className='absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg'
                />
            </div>
        </div>
    )
}

export default PostCard
