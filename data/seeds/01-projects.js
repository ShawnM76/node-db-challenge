exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    {
      project_name: 'Project 1',
      project_description: 'This is a description for project 1',
      completed: 0,
    },
    {
      project_name: 'Project 2',
      project_description: 'This is a description for project 2',
      completed: 0,
    },
    {
      project_name: 'Project 3',
      project_description: 'This is a description for project 3',
      completed: 0,
    },
  ]);
};
