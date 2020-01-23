const pg = require('pg');
const fs = require('fs-extra');

const conString = "postgres://lzxdfpik:bILzLD1yrycRbYZb74fckcKt2tJTiqZF@balarama.db.elephantsql.com:5432/lzxdfpik";
const client = new pg.Client(conString);
const sql = fs.readFileSync( "../../init_db.sql", { encoding: "UTF-8" } );

client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    client.query(sql, function(err, result) {
        if(err) {
            client.end();
            return console.error('table users already create', err);
        }
        console.log(result);
        client.end();
    });
});