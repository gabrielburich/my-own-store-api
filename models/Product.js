/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'store_id'
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_type'
    }
  }, {
    tableName: 'product',
    timestamps: false
  });
};
