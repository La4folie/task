import React, { useState } from 'react';

interface EditPostFormProps {
  postId: number;
  initialTitle: string;
  onCancel: () => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ postId, initialTitle, onCancel }) => {
  const [title, setTitle] = useState(initialTitle);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSaveClick = () => {
    onCancel(); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        autoFocus
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
        Save
      </button>
      <button onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded-md ml-2">
        Cancel
      </button>
    </div>
  );
};

export default EditPostForm;
