exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('teams').del(),

    knex('teams').insert({"teamName": "2 Guys"}),
    knex('teams').insert({"teamName": "Dual Disciples"}),
    knex('teams').insert({"teamName": "Tommya Harding"}),
    knex('teams').insert({"teamName": "Who?*"}),
    knex('teams').insert({"teamName": "Phenahms"}),
    knex('teams').insert({"teamName": "Kill Spike"}),
    knex('teams').insert({"teamName": "Mr. Pockets (Mustache)"}),
    knex('teams').insert({"teamName": "Spiked punch"}),
    knex('teams').insert({"teamName": "Los Chicos"}),
    knex('teams').insert({"teamName": "Danger Zone"}),
    knex('teams').insert({"teamName": "Pacific Effect"}),
    knex('teams').insert({"teamName": "Altitude"}),
    knex('teams').insert({"teamName": "Origin Grunt"}),
    knex('teams').insert({"teamName": "Minnesota Nice"}),
    knex('teams').insert({"teamName": "Purple Parrots"}),
    knex('teams').insert({"teamName": "Bromigo Spikeball"})
  )
};
