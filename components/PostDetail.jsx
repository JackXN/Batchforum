import React from 'react';

import moment from 'moment';


const PostDetail = ({post}) => {

const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if(obj) {
        if(obj.bold) {
            modifiedText = (<em key={index}>{text}</em>);
        }
        if(obj.italic) {
            modifiedText = (<em key={index}>{text}</em>)
        }
        if(obj.underline) {
            modifiedText = (<u key={index}>{text}</u>)
        }
    }

switch(type) {
    case 'heading-three': 
    return <h3 key={index} className='mb-4 text-xl font-semibold'>{modifiedText.map((item,i) => <React.fragment key={i}>{item}</React.fragment>)}</h3>
    case 'paragraph':
        return <p key={index} className='mb-8'>{modifiedText.map((item,i) => <React.fragment key={i}>{item}</React.fragment>)}</p>
        case 'heading-four':
            return <h4 key={index} className='mb-4 font-semibold text-md'>{modifiedText.map((item, i) => <React.fragment key={i}>{item}</React.fragment>)}</h4>
            case 'image':
                return (
                    <img
                    key={index}
                    alt={obj.title}
                    height={obj.height}
                    width={obj.width}
                    src={obj.src}
                    />
                )
                default: 
                return modifiedText;
        }

}

    return (
        <div className='pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8'>
            <h1>Post Details</h1>
        </div>
    )
}

export default PostDetail
