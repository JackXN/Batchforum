import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { getPostDetails, getPosts} from '../../services';
 import { useRouter } from 'next/router';
import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader} from '../../components';
import { graphCMSImageLoader } from '../../util';
import { GraphQLClient } from 'graphql-request';


const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master'
);


const PostDetails = ( {post} ) => {


const content = {
  
}

  const router = useRouter();
  if(router.isFallback) {
    return <Loader/>
  }
    return (
        <>
        <div className='container px-10 mx-auto mb-8'>
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
                <div className='col-span-1 lg:col-span-8'>
        <PostDetail post={post}/>
        <Author author={post.author}/>
        <CommentsForm slug={post.slug}/>
        <Comments slug={post.slug}/>

                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                        <Categories/>
                    </div>
                    
                </div>
            </div>
        </div>
        <RichText content={post.content.raw.children}/>
        </>
    )
}

export default PostDetails;

export async function getStaticProps({params}) {
    // return posts or return empty array
    const data = await getPostDetails(params.slug);
  
  
    // const post = await graphcms.request(
    //   `
    //   query PostPageQuery($slug: String!) {
    //     name
    //     content {
    //       raw
    //     }
    //   }
    //   `,
    //   {
    //     slug: params.slug,
    //   }
    // );
    
  
  return {
      props: { post: data}
    }
  }


  // Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }

  export const SlugPage = ({post})  => (
    <>
      <h1>{post.Author}</h1>
      {/* <RichText content={post.content.raw.children}/> */}
    </>
  )

  