import axios from "axios";

export default class ConverterService {
    static async getCurrency() {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/c43eb6b3e25c81952241198e/latest/USD');
        return response;
    }
}