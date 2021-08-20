const { Router } = require('express');
const RoastingRoute = new Router();

const {
    index,
    post,
    allroast
} = require('../controller/roasting')

RoastingRoute.get('/', index)
                .post('/roasting', post)
                .get('/roast', allroast)

module.exports = RoastingRoute