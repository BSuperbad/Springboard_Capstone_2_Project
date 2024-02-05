const bcrypt = require("bcrypt");
const db = require("../db.js");
const { BCRYPT_WORK_FACTOR } = require("../config");

const testSpaceIds = [];
const testUserIds = [];

async function commonBeforeAll() {
  // Clean up the database
  await db.query("DELETE FROM likes");
  await db.query("DELETE FROM ratings");
  await db.query("DELETE FROM visits");
  await db.query("DELETE FROM comments");
  await db.query("DELETE FROM spaces");
  await db.query("DELETE FROM users");
  await db.query("DELETE FROM locations");
  await db.query("DELETE FROM categories");

  // Insert sample data
  const resultsCategories = await db.query(`
    INSERT INTO categories (cat_type)
    VALUES ('Category1'), ('Category2'), ('Category3')
    RETURNING cat_id`);
  const testCategoryId = resultsCategories.rows[0].cat_id;

  const resultsLocations = await db.query(`
    INSERT INTO locations (city, neighborhood)
    VALUES ('City1', 'Neighborhood1'), ('City2', 'Neighborhood2')
    RETURNING loc_id`);
  const testLocationId = resultsLocations.rows[0].loc_id;

  const resultsSpaces = await db.query(`
    INSERT INTO spaces (title, description, image_url, category_id, address, location_id, est_year)
    VALUES 
      ('Space1', 'Description1', 'http://image1.img', $1, 'Address1', $2, 2022),
      ('Space2', 'Description2', 'http://image2.img', $1, 'Address2', $2, 2023)
    RETURNING space_id`, [testCategoryId, testLocationId]);
  testSpaceIds.splice(0, 0, ...resultsSpaces.rows.map(r => r.space_id));

  const resultsUsers = await db.query(`
    INSERT INTO users (username, password, first_name, last_name, email, is_admin)
    VALUES 
      ('user1', $1, 'User1F', 'User1L', 'user1@email.com', FALSE),
      ('user2', $2, 'User2F', 'User2L', 'user2@email.com', TRUE)
    RETURNING user_id`, [
    await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
    await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
  ]);
  testUserIds.splice(0, 0, ...resultsUsers.rows.map(r => r.user_id));
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testSpaceIds,
  testUserIds,
};
