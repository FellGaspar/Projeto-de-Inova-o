'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Vendedor.hasMany(models.Venda,
        {foreignKey: 'VendedorId',}
        );

      Team.hasMany(Player, {
        foreignKey: 'clubId',
      });
      Player.belongsTo(Team);
    }
  }
  Vendedor.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendedor',
  });
  return Vendedor;
};