const travelsController = require('../../../controllers/travels');
// Travels
module.exports = (router, isAuthenticated) => {
  // get all travels
  router.get('/admin/travels', isAuthenticated, travelsController.readAll);

  router.get('/admin/travels/cadastre', travelsController.showCadastre);

  router.post('/admin/travels/cadastre', travelsController.createId);
  // get a single travel
  router.get('/admin/travels/:id', travelsController.readId);
  // update a travel
  router.put('/admin/travels/:id', travelsController.updateId);
  // delete a travel
  router.delete('/admin/travels/:id', travelsController.deleteId);
};
