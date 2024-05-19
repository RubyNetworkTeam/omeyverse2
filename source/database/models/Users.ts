import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import sequelize from "../database_connection";


export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare name: string;
    declare ruby_id?: CreationOptional<string>;
    declare user_id: string;
    declare password: string
    declare email: string;
    declare screen_name: string;
    declare id: CreationOptional<number>;
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
    },
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    sequelize,
    tableName: "users"
})