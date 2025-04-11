/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Delete all existing entries in the 'users' table
  await knex('users').del();

  // Insert new entries into the 'users' table
  await knex('users').insert([
    { id: 1, first_name: 'John', last_name: 'Doe' },
    { id: 2, first_name: 'Jane', last_name: 'Smith' },
    { id: 3, first_name: 'Alice', last_name: 'Johnson' }
  ]);
}