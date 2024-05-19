import { DataTypes, Model } from "sequelize";
import sequelize from "../database_connection";
export class User extends Model {
}
User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    screen_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ruby_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize
});
