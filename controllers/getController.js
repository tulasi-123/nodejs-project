const sequelize = require('sequelize');
// const config = require('../database/config/config.json');
// const QueryTypes = require('@sequelize/core');

// const Sequelize = new sequelize(config.development);

async function getController(req, res) {
    // const body = req.body;
    // const name = req.query.name;
    // console.log(name);
    try {
        // const data = await Sequelize.query(`SELECT * FROM employees WHERE name='${name}'`, { type: QueryTypes.SELECT });
        res.status(200).send({
            message: 'retrieved the data',
            data: { name: 'Datthu', designation: 'Engineer' }
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
}

module.exports = getController;