exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments(); //a unique Id.
      tbl.string('project_name').notNullable(); // a name. This column is required.
      tbl.string('project_description'); // a description.
      tbl
        .boolean('completed') //a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be false.
        .notNullable()
        .defaultTo(0);
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name').notNullable();
      tbl.string('resource_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_description').notNullable();
      tbl.string('task_notes');
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(0);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('projects_resources', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
