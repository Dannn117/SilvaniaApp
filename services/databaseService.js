
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

    //Para la tabla contribuyentes de la bd
    const table = 'contribuyentes';

    const getContribuyentes = () => {
        return knex(table).select();
    };

    const crearContribuyente = (nombre) => {
        return knex(table).insert({
            nombre: nombre
        });
    };

    //Para la tabla propiedades de la bd
    const tablaPropiedades = 'propiedades';

    const getPropiedad = () => {
        return knex(tablaPropiedades).select();
    };

    const crearPropiedad = (id, direccion, valor) => {
        return knex(tablaPropiedades).insert({
            id_propiedad: id,
            direccion: direccion,
            valor_catastral: valor
        });
    };

    return {crearContribuyente, getContribuyentes, crearPropiedad, getPropiedad};
};

module.exports = {
    databaseService
};