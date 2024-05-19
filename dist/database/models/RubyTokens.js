import { DataTypes, Model } from "sequelize";
import sequelize from "../database_connection";
export class RubyToken extends Model {
}
RubyToken.init({
    token: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, { sequelize });
