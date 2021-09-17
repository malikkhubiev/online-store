const ApiError = require("../error/ApiError")
const { Brand } = require("../models/models")

class BrandController {
    create = async(req, res) => {
        try {
            const { name } = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    getAll = async(req, res) => {
        try {
            const brands = await Brand.findAll()
            return res.json(brands)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    delete = async(req, res, next) => {
        try {
            const { name } = req.body
            const brand = await Brand.findOne({where: {name}})
            if (!brand) next(ApiError.badRequest('Такой бренд не найден'))
            await brand.destroy() 
            return res.json(brand) 
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BrandController()