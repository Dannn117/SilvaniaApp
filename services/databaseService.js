
const databaseService = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });
    const table = 'contribuyentes';

    const getContribuyentes = () => {
        return knex(table).select();
    };

    const crearContribuyente = (nombre) => {
        return knex(table).insert({
            nombre: nombre
        });
    };

    return {crearContribuyente, getContribuyentes};
};

module.exports = {
    databaseService
};