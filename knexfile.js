// Update with your config settings.

require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      timezone: "+05:30",
      dateStrings: true,
    },
    migrations: {
      directory: `${__dirname}/src/provider/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/provider/seeds`,
    },
  },
  pool: {
    min: 2,
    max: 10,
    afterCreate: (conn, done) => {
      // Disable ONLY_FULL_GROUP_BY for the session
      conn.query(
        "SET SESSION sql_mode = (SELECT REPLACE(@@sql_mode, 'ONLY_FULL_GROUP_BY', ''))",
        (err) => {
          done(err, conn);
        }
      );
    },
  },
};
