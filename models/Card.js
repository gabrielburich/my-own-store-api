/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Card', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'user_id',
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'card',
    timestamps: false
  });
};
