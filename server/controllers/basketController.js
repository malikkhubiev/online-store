const ApiError = require("../error/ApiError")
const { BasketDevice } = require("../models/models")

class basketController {
    add = async (req, res, next) => {
        try {
            const { basket_id, device_id } = req.query
            if (!basket_id || device_id) return next(ApiError.badRequest('Не указан id корзины или товара'))
            const basketDevice = await BasketDevice.create({ basket_id, device_id })
            return res.json(basketDevice)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    remove = async (req, res, next) => {
        try {
            const { id } = req.query
            if (!basket_id || device_id) return next(ApiError.badRequest('Не указан id корзины или товара'))
            const basketDevice = await BasketDevice.findOne({where: {id}})
            await basketDevice.destroy()
            return res.json(basketDevice)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    get = async (req, res, next) => {
        try {
            const basketDevice = await BasketDevice.findAll()
            return res.json(basketDevice)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new basketController()