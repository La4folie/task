import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addPostAsync } from '../api/posts';

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (title.trim() !== '') {
      await dispatch(addPostAsync(title));
      setTitle('');
    }
  };

  return (
    <div className="flex justify-center pt-10 mb-10">
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        placeholder="Enter post title..."
        className="flex w-[245px] p-2 h-[44px] text-base font-normal text-white bg-cus-black border-2 rounded-md"
      />
      <button onClick={handleSubmit} disabled={title.trim() === ''} className="flex items-center pl-2 text-white" >
        Add Post
      </button>
    </div>
  );
};

export default AddPostForm;
