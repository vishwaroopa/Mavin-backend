// path: ./my-project/config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "database-1.c1a2k2wquows.ap-southeast-2.rds.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "Mavininfotech"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Mavin2024"),
    },
    useNullAsDefault: true,
  },
});
