/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("list_items", (table) => {
    table.increments("list_item_id").primary().notNullable().unsigned();
    table
      .integer("list_id")
      .unsigned()
      .references("list_id")
      .inTable("lists")
      .onDelete("CASCADE");
    table
      .integer("response_code_id")
      .unsigned()
      .references("response_code_id")
      .inTable("response_codes")
      .onDelete("CASCADE");
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
  return knex.schema.dropTable("list_items");
};
