import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState,LoginResponse,} from '../../types/slices/auth.type';

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      const { id, name, email, role, accessToken } = action.payload;

      state.user = {
        id,
        name,
        email,
        role,
      };

      state.token = accessToken;
      state.isAuthenticated = true;

      localStorage.setItem(
        'user',
        JSON.stringify(state.user)
      );

      localStorage.setItem('token', accessToken);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;