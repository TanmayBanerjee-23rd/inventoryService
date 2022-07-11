import { Model } from 'mongoose';

import PaginateRepo from './paginateRepo';
import inventoryModel from "../models/inventoryModel";
import { iInventoryEntity } from "../entities/inventoryEntity";

const SKIP_COUNT = 0;
const LIMIT_COUNT = 25;

class InventoryRepo extends PaginateRepo<iInventoryEntity> {

    protected getModel(): Model<iInventoryEntity> {
        return inventoryModel as Model<iInventoryEntity>;
    };

    async createInventory( inventoryObj: iInventoryEntity ) {
        return ( await this.create( inventoryObj ) );
    };

    async getAllInventories() {
        return ( await this.findAll( {} ) );
    };

    async getAllInventoriesPageWise( skipCount: number, limitCount: number ) {
        return ( await this.findAllPageWise( {}, skipCount || SKIP_COUNT, limitCount || LIMIT_COUNT ) );
    }

    async getInventoriesByProductId( productId: string ) {
        return ( await this.findOne({ productId: productId }) );
    };

    async getInventoriesByOrderId( orderId: string ) {
        return ( await this.findOne({ orderId: orderId }) );
    };

    async getAddedInventories( ) {
        return ( await this.findOne({ addition: true }) );
    };

    async getSubtractedInventories( ) {
        return ( await this.findOne({ substraction: true }) );
    };
};

export default ( new InventoryRepo() );
