import { DataTypes, Model } from "sequelize";
import sequelize from "../database_connection";
type RubyTokenAttributes = {
    token: string,
    user_id: number;
};

export class RubyToken extends Model<RubyTokenAttributes> {
    /*** @type {string} */
    declare token: string;
    /*** @type {number} */
    declare user_id: number;
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
}, { sequelize, tableName: "tokens" })