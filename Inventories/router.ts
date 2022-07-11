import express from "express";
import InventoryValidators from "./validators";
import InventoryControler from "./Controlers";
import HttpHelper from "../utilities/Helpers/httpResponse";
import { RESPONSE_TYPE } from "../utilities/ENUMS/Common";

const router = express.Router();

router.use( express.json( { type: "application/json" } ) );

router.post( "/create", ( req: any, res ) => {
    
    if ( !InventoryValidators.onInventoryCreation( req.body ) ) {
        return HttpHelper.sendAcknowledgement( res, 400, {
            message: "Mandatory fields are missing!!"
        });
    }

    const isAdminUser = InventoryValidators.validateAdminUser( req );
    const isServiceUser = InventoryValidators.validateAdminUser( req );

    if ( !isAdminUser || !isServiceUser ) {
        return HttpHelper.sendAcknowledgement( res, 400, {
            message: "Unauthorised action!!"
        });
    }

    InventoryControler.createInventory( req.body )
    .then( newInventory => HttpHelper.sendResponse( res, 201, newInventory, null ))
    .catch( err => HttpHelper.sendAcknowledgement( res, 500, err ) );

});

router.get( "/all", ( req: any, res ) => {

    const isAdminUser = InventoryValidators.validateAdminUser( req );
    const isServiceUser = InventoryValidators.validateAdminUser( req );

    if ( !isAdminUser || !isServiceUser ) {
        return HttpHelper.sendAcknowledgement( res, 400, {
            message: "Unauthorised action!!"
        });
    }

    InventoryControler.getAllInventories( )
    .then( orders => HttpHelper.sendResponse( res, 201, orders, null ))
    .catch( err => HttpHelper.sendAcknowledgement( res, 500, err ));
});

router.get( "/byProductId/:productId", ( req: any, res ) => {

    const isAdminUser = InventoryValidators.validateAdminUser( req );
    const isServiceUser = InventoryValidators.validateAdminUser( req );

    if ( !isAdminUser || !isServiceUser ) {
        return HttpHelper.sendAcknowledgement( res, 400, {
            message: "Unauthorised action!!"
        });
    }

    InventoryControler.getInventoriesByProductId( req.params.productId as string, RESPONSE_TYPE.SUMMARY )
    .then( orders => HttpHelper.sendResponse( res, 201, orders, null ))
    .catch( err => HttpHelper.sendAcknowledgement( res, 500, err ));
});

router.get( "/byOrderId/:orderId", ( req: any, res ) => {

    const isAdminUser = InventoryValidators.validateAdminUser( req );
    const isServiceUser = InventoryValidators.validateAdminUser( req );

    if ( !isAdminUser || !isServiceUser ) {
        return HttpHelper.sendAcknowledgement( res, 400, {
            message: "Unauthorised action!!"
        });
    }

    InventoryControler.getInventoriesByOrderId( req.params.orderId as string, RESPONSE_TYPE.SUMMARY )
    .then( orders => HttpHelper.sendResponse( res, 201, orders, null ))
    .catch( err => HttpHelper.sendAcknowledgement( res, 500, err ));
});

router.get( "/on/addition", ( req: any, res ) => {

    const isAdminUser = InventoryValidators.validateAdminUser( req );
    const isServiceUser = InventoryValidators.validateAdminUser( req );

    if ( !isAdminUser || !isServiceUser ) {
        return HttpHelper.sendAcknowledgement( res, 400, {
            message: "Unauthorised action!!"
        });
    }

    InventoryControler.getAddedInventories( RESPONSE_TYPE.SUMMARY )
    .then( orders => HttpHelper.sendResponse( res, 201, orders, null ))
    .catch( err => HttpHelper.sendAcknowledgement( res, 500, err ));
});

router.get( "/on/substraction", ( req: any, res ) => {

    const isAdminUser = InventoryValidators.validateAdminUser( req );
    const isServiceUser = InventoryValidators.validateAdminUser( req );

    if ( !isAdminUser || !isServiceUser ) {
        return HttpHelper.sendAcknowledgement( res, 400, {
            message: "Unauthorised action!!"
        });
    }

    InventoryControler.getSubtractedInventories( RESPONSE_TYPE.SUMMARY )
    .then( orders => HttpHelper.sendResponse( res, 201, orders, null ))
    .catch( err => HttpHelper.sendAcknowledgement( res, 500, err ));
});

export default router;