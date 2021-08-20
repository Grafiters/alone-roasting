const { Router } = require('express');
const MainRoute = new Router();

const RoastingRoute = require('./roasting')
MainRoute.use('/roasting', RoastingRoute)

module.exports = MainRoute