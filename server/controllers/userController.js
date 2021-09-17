const ApiError = require('../error/ApiError')
const { User, Basket } = require('../models/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateJwt = (id, email, role) => {
    const payload = {id, email, role} 
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24h'}) // Proove it
}

class UserController {
    registration = async(req, res, next) => {
        try {
            const { email, password, role } = req.body
            if(!email || !password){
                return next(ApiError.badRequest('Некорректный email или password'))
            }

            const candidate = await User.findOne({where: {email}})
            if (candidate) return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            const hashedPassword = bcrypt.hashSync(password, 3)
            const user = await User.create({email, password: hashedPassword, role}) 
            const basket = await Basket.create({userId: user.id})
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    login = async(req, res, next) => {
        try {
            const { email, password } = req.body
            const user = await User.findOne({where: {email}})
            if (!user) return next(ApiError.internal('Пользователь не найден'))
            const comparePassword = bcrypt.compareSync(password, user.password)
            if(!comparePassword) return next(ApiError.internal('Неверный пароль'))
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    getIsAuth = async(req, res, next) => {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()