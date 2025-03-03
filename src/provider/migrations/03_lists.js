/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("lists", (table) => {
    table.increments("list_id").primary().notNullable().unsigned();
    table
      .integer("user_id")
      .unsigned()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE");
    table.string("name", 255).unique().notNullable();
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
  return knex.schema.dropTable("lists");
};
