export const NotesGenerator = count => {
  let notes = [];
  for (let i = 0; i < count; i++)
    notes.push({
      title: `Title ${i + 1}`,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis odio nec urna faucibus placerat quis non odio.',
    });
  return notes;
};

export const TaskGenerator = count => {
  let tasks = [];
  for (let i = 0; i < count; i++)
    tasks.push({
      title: `Task ${i + 1}`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis odio nec urna faucibus placerat quis non odio. ',
      date: new Date(),
    });
  return tasks;
};
