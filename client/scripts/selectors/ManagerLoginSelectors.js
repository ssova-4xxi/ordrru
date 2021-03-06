import { createSelector } from 'reselect';

const notificationsSelector = state => state.notification.get('notifications');

export const ManagerLoginSelectors = createSelector(
  notificationsSelector,
  (notifications) => {
    return {
      notifications,
    };
  }
);
