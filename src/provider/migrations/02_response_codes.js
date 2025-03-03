/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("response_codes", (table) => {
    table.increments("response_code_id").primary().notNullable().unsigned();
    table.integer("response_code", 255).unique().notNullable();
    table.string("description", 255).notNullable();
    table.string("image_url", 255).notNullable();
    table.timestamps(true, true);
    table.boolean("is_deleted").notNullable().defaultTo(false);
    table.timestamp("deleted_at").nullable().defaultTo(null);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("response_codes");
};
