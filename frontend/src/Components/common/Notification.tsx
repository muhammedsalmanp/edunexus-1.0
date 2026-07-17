import { useEffect } from 'react';
import { X } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '../../hook/reduxHooks';
import { hideNotification } from '../../store/slices/notificationSlice';

export default function Notification() {
  const dispatch = useAppDispatch();

  const notifications = useAppSelector(
    (state) => state.notification.notifications
  );

  const notificationStyles = {
    success: 'bg-emerald-500 border-emerald-400',
    error: 'bg-red-500 border-red-400',
    warning: 'bg-amber-500 border-amber-400',
    info: 'bg-blue-500 border-blue-400',
  };

  return (
    
    <div
  className="
    fixed
    top-4
    right-4
    z-50
    flex
    flex-col
    gap-3
  "
>
  {notifications.map((notification) => (
    <div
      key={notification.id}
      className="
        animate-slide-in-right
        transition-all
        duration-500
      "
    >
      <NotificationItem notification={notification} />
    </div>
  ))}
</div>
  );
}



function NotificationItem({
  notification,
}: {
  notification: {
    id: string;
    message: string;
    type: string;
  };
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideNotification(notification.id));
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch, notification.id]);

  const notificationStyles = {
    success: 'bg-emerald-500 border-emerald-400',
    error: 'bg-red-500 border-red-400',
    warning: 'bg-amber-500 border-amber-400',
    info: 'bg-blue-500 border-blue-400',
  };

  return (
    <div
      className={`
        ${notificationStyles[
          notification.type as keyof typeof notificationStyles
        ]}
        text-white
        px-4
        py-3
        rounded-lg
        shadow-xl
        border
        flex
        items-center
        gap-3
        min-w-[300px]
        max-w-md
        transition-all
        duration-300
      `}
    >
      <p className="text-sm font-medium flex-1">
        {notification.message}
      </p>

      <button
        onClick={() =>
          dispatch(hideNotification(notification.id))
        }
      >
        <X size={16} />
      </button>
    </div>
  );
}