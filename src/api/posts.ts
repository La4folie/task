import axios from 'axios';
import { IPost } from '../models/IPost';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = async () => {
  const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};
export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await fetchPosts();
      return response;
    } catch (error) {
      throw Error('Failed to fetch posts');
    }
  }
);

export const updatePost = async (post: IPost) => {
  const response = await axios.put<IPost>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  return response.data;
};
export const editPostAsync = createAsyncThunk(
  'posts/editPost',
  async (post: IPost) => {
    try {
      const response = await updatePost(post);
      return response;
    } catch {
      throw Error('Failed to update a post');
    }
  }
);

export const addPost = async (post: {title: string, body: string, userId: number}) => {
  const response = await axios.post<IPost>(`https://jsonplaceholder.typicode.com/posts`, post);
  return response.data;
};
export const addPostAsync = createAsyncThunk(
  'posts/addPost',
  async (title: string) => {
    try {
      const response = await addPost({title, body: '', userId: 1});
      return response;
    } catch {
      throw Error('Failed to add a post');
    }
  }
);


export const deletePost = async (postId: number) => {
  const response = await axios.delete<void>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
};
export const deletePostAsync = createAsyncThunk(
  'posts/deletePost',
  async (postId: number) => {
    try {
      await deletePost(postId);
      return postId;
    } catch {
      throw Error('Failed to delete a post');
    }
  }
);
