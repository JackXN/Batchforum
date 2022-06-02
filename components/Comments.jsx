import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="p-8 pb-12 mb-8 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="pb-4 mb-8 text-xl font-semibold text-white border-b border-emerald-400">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="pb-4 mb-4 border-b border-emerald-400">
                <p className="mb-4 text-gray-500">
                  <span className="font-semibold text-white">{comment.name} </span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="w-full text-gray-400 whitespace-pre-line">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;