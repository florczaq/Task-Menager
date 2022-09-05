import notifee, { TriggerType } from "@notifee/react-native";

export function createTaskReminders(
  { taskId, title, description, taskDate, reminders }
) {
  const substractHoursFromDate = ({ date, hours }) => {
    return new Date(date).setHours(date.getHours() - hours)
  }

  cancelAllTaskNotifications({ taskId: taskId });

  reminders.forEach((element) => {
    createReminderNotification({
      title: title,
      description: description,
      triggerDate: new Date(substractHoursFromDate({
        date: taskDate,
        hours: element
      })),
      triggerId: `${taskId}-${element}`,
      taskDate: taskDate
    }).catch(err => {
      console.error(err)
      alert("Something went wrong with saving reminders. Make sure all reimnders are in the future.")
    })
  })
}

async function createReminderNotification(
  { triggerDate, title, description, triggerId, taskDate }) {

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: triggerDate.getTime(),
  };

  const convertDate = (date) => {
    if (!date) return "";
    const timeString = new Date(date).toLocaleTimeString();
    const time = timeString.substring(0, timeString.length - 3)
    return `Date:  ${new Date(date).toLocaleDateString()} ${time}`
  };


  await notifee.createTriggerNotification({
    id: triggerId,
    title: title,
    body: `${convertDate(taskDate)}  ${description}`,
    android: {
      channelId: channelId,
    },
  }, trigger,
  );
}

export function cancelAllTaskNotifications({ taskId }) {
  [24, 12, 6, 4, 2, 1].forEach((element) => {
    const triggerId = `${taskId}-${element}`;

    notifee.getTriggerNotifications()
      .then(
        res => {
          res.indexOf(triggerId) !== -1
            && notifee.cancelTriggerNotification(triggerId);
        }
      )
      .catch(err => { console.error(err) })
  })
}