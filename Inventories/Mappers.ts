import { iInventoryEntity } from "../database/entities/inventoryEntity";
import { iInventoryDTO, iInventorySummaryDTO} from "../utilities/DTO/Inventory";

class InventoryMapper {

    mapToEntity( inventoryObj: iInventoryDTO ): iInventoryEntity{

        return ({
            productId: inventoryObj.productId ? inventoryObj.productId : null,
            orderId: inventoryObj.orderId ? inventoryObj.orderId : null,
            quantity: inventoryObj.quantity ? inventoryObj.quantity : null,
            addition: inventoryObj.addition ? inventoryObj.addition : null,
            substraction: inventoryObj.substraction ? inventoryObj.substraction : null,
            createdTimeStamp: inventoryObj.createdTimeStamp ? inventoryObj.createdTimeStamp : null
        });
    };

    mapToDTO( inventoryObj: iInventoryEntity ): iInventoryDTO {

        return ({
            id: inventoryObj.id,
            productId: inventoryObj.productId,
            orderId: inventoryObj.orderId,
            quantity: inventoryObj.quantity,
            addition: inventoryObj.addition,
            substraction: inventoryObj.substraction,
            createdTimeStamp: inventoryObj.createdTimeStamp
        });
    };

    mapToSummaryDTO( inventoryObj: iInventoryEntity ): iInventorySummaryDTO {
        
        return {
            id: inventoryObj.id,
            productId: inventoryObj.productId,
            orderId: inventoryObj.orderId,
            quantity: inventoryObj.quantity,
            createdTimeStamp: inventoryObj.createdTimeStamp
        };
    };

};

export default ( new InventoryMapper() );