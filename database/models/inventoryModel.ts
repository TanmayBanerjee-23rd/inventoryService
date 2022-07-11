import _MongoDb from "../dbConnection";
import { Schema, Model } from 'mongoose';
import { iInventoryEntity } from "../entities/inventoryEntity";

const dbInstance = _MongoDb.getDbInstance();

const inventorySchema: Schema = dbInstance.Schema({
    productId: { type: String, index: true },
    orderId: { type: String, index: true },
    addition: { type: Boolean, index: true, required: true },
    substraction: { type: Boolean, index: true, required: true },
    quantity: { type: Number, index: true, required: true },
    createdTimeStamp: { type: Number, index: true, required: true }
});

const inventoryModel: Model<iInventoryEntity> = dbInstance.model( "Inventory", inventorySchema );

export default inventoryModel;

