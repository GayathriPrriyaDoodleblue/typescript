import { Sequelize, DataTypes, Model } from 'sequelize';

interface DivisionAttributes {
    divisionName: string;
   
}
class Division extends Model<DivisionAttributes> implements DivisionAttributes {
    public divisionName!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof Division {
    Division.init(
        {
            divisionName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Division',
            tableName: 'divisions',
        }
    );

    return Division;
}