exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').insert([
    {
      resource_name: 'resource 1',
      resource_description: 'resource description for 1',
    },
    {
      resource_name: 'resource 2',
      resource_description: 'resource description for 2',
    },
    {
      resource_name: 'resource 3',
      resource_description: 'resource description for 3',
    },
    {
      resource_name: 'resource 4',
      resource_description: 'resource description for 4',
    },
    {
      resource_name: 'resource 5',
      resource_description: 'resource description for 5',
    },
    {
      resource_name: 'resource 6',
      resource_description: 'resource description for 6',
    },
  ]);
};
