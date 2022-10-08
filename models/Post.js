const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Post.init(
  {
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: User,
          key: 'id'
      },
      
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
    separate: true,
  }
);

module.exports = Post;