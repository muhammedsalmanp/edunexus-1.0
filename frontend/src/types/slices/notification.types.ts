export type NotificationType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
}

export interface NotificationState {
  notifications: Notification[];
}

export interface NotificationPayload {
  message: string;
  type: NotificationType;
}