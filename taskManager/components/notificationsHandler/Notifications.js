import notifee, {TriggerType} from '@notifee/react-native';
import {REMINDERS_TIMES_LIST} from '../elements/taskEdit/ReminderList';

const NEW_REMINDERS_TIMES_LIST = [...REMINDERS_TIMES_LIST, 0];

export function createTaskReminders({
  taskId,
  title,
  description,
  taskDate,
  reminders,
}) {
  const substractHoursFromDate = ({date, hours}) => {
    return new Date(date).setHours(date.getHours() - hours);
  };

  cancelAllTaskNotifications({taskId: taskId});

  [...reminders, 0].forEach(element => {
    createReminderNotification({
      title: title,
      description: description,
      triggerDate: new Date(
        substractHoursFromDate({
          date: taskDate,
          hours: element,
        }),
      ),
      triggerId: `${taskId}-${element}`,
      taskDate: taskDate,
    }).catch(err => {
      console.error(err);
      alert('Something went wrong with saving reminders.');
    });
  });
}

async function createReminderNotification({
  triggerDate,
  title,
  description,
  triggerId,
  taskDate,
}) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: triggerDate.getTime(),
  };

  const convertDate = date => {
    if (!date) return '';
    const timeString = new Date(date).toLocaleTimeString();
    const time = timeString.substring(0, timeString.length - 3);
    return `Date:  ${new Date(date).toLocaleDateString()} ${time}`;
  };

  await notifee.createTriggerNotification(
    {
      id: triggerId,
      title: title,
      body: `${convertDate(taskDate)}  ${description}`,
      android: {
        channelId: channelId,
      },
    },
    trigger,
  );
}

export function cancelAllTaskNotifications({taskId}) {
  NEW_REMINDERS_TIMES_LIST.forEach(element => {
    const triggerId = `${taskId}-${element}`;
    notifee
      .getTriggerNotificationIds()
      .then(res => {
        res.indexOf(triggerId) !== -1 &&
          notifee
            .cancelTriggerNotification(triggerId)
            .catch(err => console.error(err));
      })
      .catch(err => {
        console.error(err);
      });
  });
}
