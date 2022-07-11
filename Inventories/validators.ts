import BaseValidator from "../utilities/baseValidator";
import { iInventoryDTO } from "../utilities/DTO/Inventory";

class Validators extends BaseValidator<iInventoryDTO> {

    onInventoryCreation( orderObj: iInventoryDTO ): boolean {

        return ( this.validateObjFields( orderObj, [ "productId", "orderId", "quantity", "addition", "substraction", "createdTimeStamp" ] ) );
    };
};

export default ( new Validators() );