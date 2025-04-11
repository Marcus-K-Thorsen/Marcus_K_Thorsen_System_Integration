
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema    
        .createTable('accounts', (table) => {
           table.increments('id').notNullable().primary();
           table.string('name', 50).notNullable();
           table.string('description', 200);
           table.date('created_at').notNullable();

        })    
        .createTable('alembic_version', (table) => {
           table.string('version_num', 32).notNullable().primary();

        })    
        .createTable('products', (table) => {
           table.increments('id').notNullable().unsigned().primary();
           table.decimal('price').notNullable();
           table.string('name', 1000).notNullable();

        })    
        .createTable('users', (table) => {
           table.increments('id').notNullable().unsigned().primary();
           table.string('first_name', 255).notNullable();
           table.string('last_name', 255).notNullable();

        });    
}

export function down(knex) {
    return knex.schema
        .dropTable('users')
        .dropTable('products')
        .dropTable('alembic_version')
        .dropTable('accounts');
}
