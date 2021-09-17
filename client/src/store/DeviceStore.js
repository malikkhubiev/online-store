import { makeAutoObservable } from "mobx";

export class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lemovo'},
            {id: 4, name: 'Asus'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/search?q=iphone+12+pro&source=lnms&tbm=isch&sa=X&ved=2ahUKEwim-svbld7yAhXvRvEDHYGdDZoQ_AUoAnoECAIQBA&biw=754&bih=703&dpr=1.25#imgrc=NLwQuZ4ImiMhLM'},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/search?q=iphone+12+pro&source=lnms&tbm=isch&sa=X&ved=2ahUKEwim-svbld7yAhXvRvEDHYGdDZoQ_AUoAnoECAIQBA&biw=754&bih=703&dpr=1.25#imgrc=NLwQuZ4ImiMhLM'},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/search?q=iphone+12+pro&source=lnms&tbm=isch&sa=X&ved=2ahUKEwim-svbld7yAhXvRvEDHYGdDZoQ_AUoAnoECAIQBA&biw=754&bih=703&dpr=1.25#imgrc=NLwQuZ4ImiMhLM'},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/search?q=iphone+12+pro&source=lnms&tbm=isch&sa=X&ved=2ahUKEwim-svbld7yAhXvRvEDHYGdDZoQ_AUoAnoECAIQBA&biw=754&bih=703&dpr=1.25#imgrc=NLwQuZ4ImiMhLM'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes = types => this._types = types
    setBrands = brands => this._brands = brands
    setDevices = devices => this._devices = devices
    setSelectedType = type => this._selectedType = type 
    setSelectedBrand = brand => this._selectedBrand = brand 

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}