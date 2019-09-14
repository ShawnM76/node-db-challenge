exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      task_description: 'Mow the lawn',
      task_notes: 'Get the lawnmower and mow',
      completed: 0,
      project_id: 1,
    },
    {
      task_description: 'Clean the House',
      task_notes: 'Get cleaning!',
      completed: 0,
      project_id: 1,
    },
    {
      task_description: 'Drink a beer',
      task_notes: 'Do it Fast',
      completed: 0,
      project_id: 2,
    },
    {
      task_description: 'Go to school',
      task_notes: 'Get out of bed',
      completed: 0,
      project_id: 2,
    },
    {
      task_description: 'Pay the bills',
      task_notes: 'Get money',
      completed: 0,
      project_id: 3,
    },
    {
      task_description: 'Pass Lambda',
      task_notes: 'Pay attention!',
      completed: 0,
      project_id: 3,
    },
  ]);
};
