exports.up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').unsigned().primary()
    table.string('firstName').nullable()
    table.string('lastName').nullable()
    table.string('email')
    table.string('password')
    table.string('providerId').nullable()
    table.enum('providerType', ['apple', 'google']).nullable()
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').nullable()
    table.unique('email')
  })

exports.down = (knex) => knex.schema.dropTable('users')
