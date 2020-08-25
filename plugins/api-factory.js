import axios from "axios"
import dotenv from "dotenv"

class ApiFactory{
    constructor(){
        // Get data from .env
        dotenv.config()
        // Initate variable axios create instance
        this.request = axios.create({
            baseURL: process.env.ZOMATO_API_URL,
            headers:{'user-key': process.env.ZOMATO_API_KEY}
        })
    }

    /**
     * Get All Collections
     * @param {string} city_id ID City
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     */
    async getAllCollections(city_id, lat, lon){
        const config = ['/collections', { params: { city_id, lat, lon } }]
        const response = await this.request.get(...config)
        return response
    }

    /**
     * Get Detail Restaurant By ID
     * @param {number} res_id Restaurant ID
     */
    async getDetailRestaurant(res_id){
        const config = ['/restaurant', { params: { res_id } }]
        const response = await this.request.get(...config)
        return response
    }

    /**
     * Get Data Review By Restaurant ID
     * @param {number} res_id Restaurant ID
     */
    async getReviewRestaurant(res_id){
        const config = ['/reviews', { params: { res_id } }]
        const response = await this.request.get(...config)
        return response
    }

    /**
     * Get Result from Restaurant Search
     * @param {*} entity_id Entity ID
     * @param {*} entity_type Entity Type
     * @param {*} q Query Search
     * @param {*} order Order Result
     */
    async searchRestaurant(entity_id, entity_type, q, order){ 
        const config = ['/search', { params: { entity_id, entity_type, q, order } }]
        const response = await this.request.get(...config)
        return response
    }
}

export default new ApiFactory()