const travelsController = require('../../controllers/travels');
// Travels
module.exports = (router) => {
  // get all travels
  router.get('/admin/travels', travelsController.readAll);

  router.post('/admin/travels/cadastre', travelsController.createId);
  // get a single travel
  router.get('/admin/travels/:id', travelsController.readId);
  // update a travel
  router.put('/admin/travels/:id', travelsController.updateId);
  // delete a travel
  router.delete('/admin/travels/:id', travelsController.deleteId);
};
