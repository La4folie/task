import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../models/IPost';
import { addPostAsync, deletePostAsync, editPostAsync, fetchPostsAsync } from '../api/posts';

interface PostsState {
  data: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addPostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error adding post';
      })
      .addCase(editPostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.map(post => post.id === action.payload.id ? action.payload : post);
      })
      .addCase(editPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error editing post';
      })
      .addCase(fetchPostsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(deletePostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(post => post.id !== action.payload);
      })
      .addCase(deletePostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error deleting post';
      });
  },
});

export default postsSlice.reducer;