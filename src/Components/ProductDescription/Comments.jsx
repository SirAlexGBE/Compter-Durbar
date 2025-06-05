import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, ChevronDown } from "lucide-react";

const SAMPLE_COMMENTS = [
  {
    id: 1,
    author: "Jimmy Smith",
    date: "May 28, 2023",
    rating: 4.9,
    content:
      "This macbook air at first feels just so big to me using it for school.his macbook air at first feels just so big to me using it for school...his macbook air at first feels just so big to me using it for school...his macbook air at first feels just so big to me using it for school...his macbook air at first feels just so big to me using it for school...his macbook air at first feels just so big to me using it for school.....",
    likes: 18,
    dislikes: 12,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 1,
    author: "Jimmy Smith",
    date: "May 28, 2023",
    rating: 4.9,
    content:
      "This macbook air at first feels just so big to me using it for school...",
    likes: 18,
    dislikes: 12,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 1,
    author: "Jimmy Smith",
    date: "May 28, 2023",
    rating: 4.9,
    content:
      "This macbook air at first feels just so big to me using it for school...",
    likes: 18,
    dislikes: 12,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  // Add more sample comments as needed
];

const CommentInput = ({ value, onChange, onSubmit }) => (
  <div className='w-full md:w-1/3 mb-8'>
    <h2 className='text-2xl font-semibold text-gray-900 mb-2'>Comments</h2>
    <p className='text-gray-600 text-sm mb-6'>
      Leave your comments here for other customers
    </p>
    <textarea
      value={value}
      onChange={onChange}
      placeholder='Share your thoughts about this product here'
      className='w-full h-20 p-3 border border-gray-300 rounded-lg resize-none text-sm 
                 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-transparent'
    />
    <div className='mt-3'>
      <button
        onClick={onSubmit}
        className='px-6 py-2 bg-white border border-blue-500 text-blue-500 rounded-md 
                   hover:bg-blue-50 transition-colors text-sm font-medium'>
        Comment
      </button>
    </div>
  </div>
);

const CommentCard = ({ comment }) => (
  <div className='bg-gray-50 rounded-lg p-6'>
    <div className='flex items-start justify-between mb-4'>
      <div className='flex space-x-3'>
        <img
          src={comment.avatar}
          alt={comment.author}
          className='w-10 h-10 rounded-full object-cover'
        />
        <div>
          <h3 className='font-semibold text-gray-900'>{comment.author}</h3>
          <p className='text-sm text-gray-500'>{comment.date}</p>
        </div>
      </div>
      <div className='flex items-center bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium'>
        <span className='text-yellow-300 mr-1'>★</span>
        {comment.rating}
      </div>
    </div>

    <div className='mb-4'>
      <p className='text-gray-700 text-sm leading-relaxed'>{comment.content}</p>
    </div>

    <div className='flex items-center justify-between'>
      <button className='flex items-center text-blue-500 hover:text-blue-600 text-sm'>
        Show More
        <ChevronDown className='ml-1 w-4 h-4' />
      </button>

      <div className='flex items-center space-x-4'>
        <button className='flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors'>
          <ThumbsUp className='w-4 h-4' />
          <span className='text-sm'>{comment.likes}</span>
        </button>
        <span className='text-gray-300'>|</span>
        <button className='flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors'>
          <ThumbsDown className='w-4 h-4' />
          <span className='text-sm'>{comment.dislikes}</span>
        </button>
      </div>
    </div>
  </div>
);

const Comments = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(SAMPLE_COMMENTS);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Current User",
        date: new Date().toLocaleDateString(),
        rating: 5,
        content: newComment,
        likes: 0,
        dislikes: 0,
        avatar: "https://via.placeholder.com/40",
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className='max-w-7xl mx-auto bg-white p-6'>
      <div className='flex flex-col md:flex-row gap-8'>
        <CommentInput
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onSubmit={handleCommentSubmit}
        />

        <div className='w-full md:w-2/3'>
          <div className='space-y-6'>
            {comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
