import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { Notification } from '../../types/notifications';
import { NameSpace } from '../../const';

export type NotificationsSlice = {
    notifications: Notification[];
  }

const initialState: NotificationsSlice = {
  notifications: []
};

export const notificationsSlice = createSlice({
  name: NameSpace.Notification,
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      const id = nanoid();
      // eslint-disable-next-line no-debugger
      debugger;
      // eslint-disable-next-line no-console
      console.log(id);


      state.notifications.push({ id, ...action.payload });
    },
    clearNotification: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-debugger
      debugger;
      state.notifications = state.notifications.filter((item) => item.id !== action.payload);
    }
  }
});

export const { pushNotification, clearNotification } = notificationsSlice.actions;
