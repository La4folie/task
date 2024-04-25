import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePostAsync, editPostAsync, fetchPostsAsync } from '../api/posts';
import { IPost } from '../models/IPost';
import { AppDispatch } from '../store';

interface PostItemProps {
  post: IPost
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const dispatch: AppDispatch = useDispatch();

  const handleEditClick = async () => {
    if (updatedTitle.trim() !== '') {
      setIsEditing(!isEditing);
      if (!isEditing) {
        setTimeout(() => {
          const input = document.getElementById(`postInput-${post.id}`);
          input?.focus();
        }, 0);
      } else {
        await dispatch(editPostAsync({ ...post, title:updatedTitle  }));
        dispatch(fetchPostsAsync());
      }
    }
  };

  const handleDeleteClick = () => {
    dispatch(deletePostAsync(post.id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditClick();
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          id={`postInput-${post.id}`}
          type="text"
          value={updatedTitle}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handleEditClick}
          autoFocus
        />
      ) : (
        <>
          <span>{post.title}</span>
        </>
      )}
      
      <button  className="pl-5" onClick={handleEditClick} disabled={isEditing && updatedTitle.trim() === ''}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button className="pl-5" onClick={handleDeleteClick}>Delete</button>
      </div>
   
  );
};

export default PostItem;
