const { sequelize, Sequelize } = require('../sequelize');

const CustomChannels = sequelize.define(
	'customChannels',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		userId: {
			type: Sequelize.STRING,
			allowNull: false
		},
		channelId: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{
		freezeTableName: true,
		timestamps: false
	}
);

module.exports = CustomChannels;