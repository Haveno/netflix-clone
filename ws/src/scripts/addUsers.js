const database = require('./src/services/database');
const Usuario = require('../models/usuario');

const usuariosJSON = require('../data/usuario.json');

const addUsers = async () => {
    try {
        for (let usuario of usuariosJSON) {

        }
    } catch (err) {
        console.log(err.message);
    }
}

addUsers();