import React, {useState, useEffect} from 'react'
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug}) => {

    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
if(slug) {
    getSimilarPosts(categories, slug)
    .then((result) => setRelatedPosts(result))
}else {
    getRecentPosts(categories, slug)
    .then((result) => setRelatedPosts(result))
}
    }, [slug])

console.log(relatedPosts)

return (
    <div className="p-8 pb-12 mb-8 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-light text-white border-b font-sourceL border-emerald-400">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="flex-none w-16">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-400 rounded-lg font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <span className='text-gray-400'>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget
