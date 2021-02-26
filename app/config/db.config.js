module.exports = {
  HOST: "localhost",
  USER: "hdinjos",
  PASSWORD: "123",
  DB: "tes_auth",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
