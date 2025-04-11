/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id'); // Auto-incrementing primary key
            table.string('first_name', 255).notNullable(); // First name (required)
            table.string('last_name', 255).notNullable(); // Last name (required)
        })
        .createTable('products', (table) => {
            table.increments('id'); // Auto-incrementing primary key
            table.decimal('price', 10, 2).notNullable(); // Price with 2 decimal places (required)
            table.string('name', 1000).notNullable(); // Product name (required)
        });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema
        .dropTable('products') // Drop the products table
        .dropTable('users'); // Drop the users table
}