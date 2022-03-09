const sequelize = require('sequelize');
const QueryTypes = require('@sequelize/core');
const config = require('../database/config/config.json');


const Sequelize = new sequelize(config.development);

async function updateController(req, res) {
    const name = req.body.name;
    const designation = req.body.designation;
    console.log(designation);
    try {
        const users = await Sequelize.query(`UPDATE employees SET designation='${designation}' WHERE name='${name}'`, { type: QueryTypes.UPDATE });
        res.status(200).send({
            message: 'updated the data',
            users: users
        });
    } catch (e) {
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
}

module.exports = updateController;