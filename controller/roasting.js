const models = require("../models");
const roasting = models.Roast

exports.index = async (req, res) => {
    return res.status(200).json([
        {
            alert: 'hello man',
            contact: '@Gafiters'
        }
    ]);
}

exports.allroast = async(req, res) => {
    try {
        roasting.findAll()
            .then(roasting => res.status(200)
                .send({
                    status: 200,
                    msg: 'get all data roasting success',
                    data: roasting
                })
            )
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.post = async (req, res) => {
    const data = {
        username: req.body.username,
        description: req.body.description
    }

    try {
        roasting.create(data)
        .then(submit => res.status(200)
            .send({
                status: 200,
                msg: 'your roasting success to input',
                data: submit
            })
        )
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}

exports.getPostById = async (req, res) => {
    const id = req.params.id
    try {
        
    } catch (error) {
        
    }
}