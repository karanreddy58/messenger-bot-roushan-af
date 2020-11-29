
exports.up = function(knex) {
    return knex.schema.createTable('fb_users', function (table) {
        table.increments('id')
        table.string('sender_id').index()
        table.string('lang_preference')
        table.timestamp('last_message_at')
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fb_users')
};
