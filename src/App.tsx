import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './components/PostList';
import AddPostForm from './components/AddPostForm';

const App: React.FC = () => {
  return (  
    <Provider store={store}>
      <div className="relative w-full min-h-screen bg-gradient-to-t from-black to-cus-purple text-white">
        <AddPostForm />
        <PostList />
      </div>
    </Provider>
  );
};

export default App;