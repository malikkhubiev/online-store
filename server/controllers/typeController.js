const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    create = async(req, res) => {
        try {
            const { name } = req.body
            const type = await Type.create({name})
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    getAll = async(req, res) => {
        try {
            const types = await Type.findAll()
            return res.json(types)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    delete = async(req, res, next) => {
        try {
            const { name } = req.body
            const type = Type.findOne({where: {name}})
            if (!type) next(ApiError.badRequest('Такой тип товара не найден'))
            await type.destroy();
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new TypeController()