import ApiError from "../error/ApiError.js";
import Barcode from "../models/Barcodes.entity.js";
class BarcodeController {
    async getBarcode(req, res, next) {
        const {code} = req.query;
        if(!code) {
           return next(ApiError.badRequest('Не задан штрих-код'));
        }
        const url = await Barcode.findOne(
            {
                where: {code},
            }
        )
        return res.json(url);
    }
}

export default new BarcodeController;