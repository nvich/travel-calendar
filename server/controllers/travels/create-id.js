const TravelModel = require('../../models/travel');
const moment = require('moment');

module.exports = (req, res) => {
  const travel = new TravelModel();
  const doc = req.body;
  const author = 'Hemerson Vianna';

  travel.title = doc.title;
  travel.local = doc.local;
  travel.users = doc.users;
  travel.budget = doc.budget;
  travel.formattedStartDate = doc.formattedStartDate;
  travel.formattedEndDate = doc.formattedEndDate;

  travel.createAt = moment().toISOString();
  travel.createBy = author;

  travel.startDate = moment(travel.formattedStartDate, 'DD/MM/YYYY HH:mm').toISOString();
  travel.endDate = moment(travel.formattedEndDate, 'DD/MM/YYYY HH:mm').toISOString();

  // Payload
  const payload = travel.budget.payload;
  // Plane Tickets
  let planeTickets = payload.planeTickets[0]['value'];
  payload.planeTickets.map((item, index) => {
    if(index !== 0 && planeTickets > item.value) {
      planeTickets = item.value;
    }
  });
  // Accommodations
  let accommodations = payload.accommodations[0]['value'];
  payload.accommodations.map((item, index) => {
    if(index !== 0 && accommodations > item.value) {
      accommodations = item.value;
    }
  });
  // Extras
  const extras = payload.extras.reduce((acc, item) => {
    return acc + item.value;
  }, 0);
  // Total
  travel.budget.total = planeTickets + accommodations + extras;

  travel.save((err, travel) => {
    if(err) {
      return res.send(err);
    }
    res.json({ message: 'Travel created!', travel: travel });
  });
};
