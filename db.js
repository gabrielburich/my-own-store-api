import fs from "fs";
import path from "path";
import Sequelize from "sequelize";


let db;

module.exports = server => {
  if (!db) {
    const config = server.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );

    db = {
      sequelize,
      Sequelize,
      models: {}
    };

    const dir = path.join(__dirname, 'models');

    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });
  }

  return db;
};