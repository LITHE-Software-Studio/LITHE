if (!global.db) {
  const pgp = require('pg-promise')();
  console.log(`==DEBUG== process.env.DB_URL = ${process.env.DB_URL}`);
  db = pgp(process.env.DB_URL);
}

function list() {
  const sql = `
        SELECT *
        FROM users  
        ORDER BY username DESC
        LIMIT 10                            
    `;
  return db.any(sql);
}

function create(username, email) {
  const sql = `
        INSERT INTO users ($<this:name>)
        VALUES ($<username>, $<email>)
        ON CONFLICT (username) DO NOTHING
        RETURNING *
    `;
  return db.oneOrNone(sql, { username, email });
}

module.exports = {
  list,
  create,
};