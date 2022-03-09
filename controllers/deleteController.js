const sequelize = require('sequelize');
const QueryTypes = require('@sequelize/core');
const config = require('../database/config/config.json');


const Sequelize = new sequelize(config.development);

async function deleteController(req, res) {
    const body = req.body;
    console.log(body);
    try {
        const users = await Sequelize.query(`DELETE FROM employees WHERE name='${req.headers['name']}'`, { type: QueryTypes.DELETE });
        res.status(200).send({
            message: 'deleted the data',
            users: users
        });
    } catch (e) {
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
}

module.exports = deleteController;