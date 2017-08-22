
const readAll = require('./read-all');
const readId = require('./read-id');
const createId = require('./create-id');
const updateId = require('./update-id');
const deleteId = require('./delete-id');

module.exports = {
  // GET /travels
  readAll: readAll,
  // GET /travels/:id
  readId: readId,
  // POST /travels
  createId: createId,
  // PUT /travels/:id
  updateId: updateId,
  // DELETE /travels/:id
  deleteId: deleteId
};
