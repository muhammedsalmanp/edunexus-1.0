import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  NotificationState,
  NotificationPayload,
} from '../../types/slices/notification.types';

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,

  reducers: {
    showNotification: (
      state,
      action: PayloadAction<NotificationPayload>
    ) => {
      state.notifications.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });
    },

    hideNotification: (
      state,
      action: PayloadAction<string>
    ) => {
      state.notifications = state.notifications.filter(
        (notification) =>
          notification.id !== action.payload
      );
    },
  },
});

export const {
  showNotification,
  hideNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;