const sequelize = require('sequelize');
const QueryTypes = require('@sequelize/core');
const config = require('../database/config/config.json');


const Sequelize = new sequelize(config.development);

async function postController(req, res) {
    const body = req.body;
    console.log(body);
    try {
        const users = await Sequelize.query(`INSERT INTO employees (name,designation) VALUES ('${req.body.employeeName}','${req.body.designation}')`, { type: QueryTypes.INSERT });
        res.status(200).send({
            message: 'received the data',
            users: users
        });
    } catch (e) {
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
}

module.exports = postController;