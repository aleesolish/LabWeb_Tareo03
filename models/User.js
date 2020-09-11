const knex = require('../database/connection');
const bcrypt = require('bcryptjs');

exports.findById = (id) => {
    return knex
      .select('*')
      .from('users')
      .where('id', id)
      .first();
  }

  exports.findByEmail = (email) => {
    return knex
      .select('*')
      .from('users')
      .where('email', email)
      .first();
  }

exports.create =(user) => {
    let pass = user.password;
    pass = bcrypt.hashSync(pass, 10);
    return knex ('users')
        .insert({name: user.name, email: user.email, password: pass, roll: user.roll })
}