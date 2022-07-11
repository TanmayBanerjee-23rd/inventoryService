import InventoryRepo from "../database/repositories/InventoryRepo";
import InventoryMapper from "./Mappers";
import { iInventoryEntity } from "../database/entities/inventoryEntity";
import { iInventoryDTO, iInventorySummaryDTO } from "../utilities/DTO/Inventory";
import { RESPONSE_TYPE } from "../utilities/ENUMS/Common";


class InventoryController {

    async createInventory( inventoryObj: iInventoryDTO ): Promise<iInventorySummaryDTO> {

        const inventoryEntity: iInventoryEntity = InventoryMapper.mapToEntity( inventoryObj );

        const createdInventoryEntity = await InventoryRepo.create( inventoryEntity ) ;

        return Promise.resolve( InventoryMapper.mapToSummaryDTO( createdInventoryEntity ) );
    };

    async getAllInventories( ): Promise<iInventorySummaryDTO[]> {

        const inventoryEntities: iInventoryEntity[] = await InventoryRepo.getAllInventories( );

        const inventoryDTOs: iInventorySummaryDTO[] = inventoryEntities.map( inventoryEntity => InventoryMapper.mapToSummaryDTO( inventoryEntity ) );

        return Promise.resolve( inventoryDTOs );
    };

    async getInventoryById( inventoryId: number, responseType: string ): Promise<iInventoryDTO | iInventorySummaryDTO> {

        const inventoryEntity: iInventoryEntity = await InventoryRepo.findOneById( inventoryId );

        let inventoryDTO: iInventoryDTO | iInventorySummaryDTO;

        if ( responseType === RESPONSE_TYPE.SUMMARY ) inventoryDTO = InventoryMapper.mapToSummaryDTO( inventoryEntity );
        else inventoryDTO = InventoryMapper.mapToDTO( inventoryEntity );

        return Promise.resolve( inventoryDTO );
    };

    async getInventoriesByProductId( productId: string, responseType: string ): Promise<iInventoryDTO | iInventorySummaryDTO> {

        const inventoryEntity: iInventoryEntity = await InventoryRepo.getInventoriesByProductId( productId );

        let inventoryDTO: iInventoryDTO | iInventorySummaryDTO;

        if ( responseType === RESPONSE_TYPE.SUMMARY ) inventoryDTO = InventoryMapper.mapToSummaryDTO( inventoryEntity );
        else inventoryDTO = InventoryMapper.mapToDTO( inventoryEntity );

        return Promise.resolve( inventoryDTO );
    };

    async getInventoriesByOrderId( orderId: string, responseType: string ): Promise<iInventoryDTO | iInventorySummaryDTO> {

        const inventoryEntity: iInventoryEntity = await InventoryRepo.getInventoriesByOrderId( orderId );

        let inventoryDTO: iInventoryDTO | iInventorySummaryDTO;

        if ( responseType === RESPONSE_TYPE.SUMMARY ) inventoryDTO = InventoryMapper.mapToSummaryDTO( inventoryEntity );
        else inventoryDTO = InventoryMapper.mapToDTO( inventoryEntity );

        return Promise.resolve( inventoryDTO );
    };

    async getAddedInventories( responseType: string ): Promise<iInventoryDTO | iInventorySummaryDTO> {

        const inventoryEntity: iInventoryEntity = await InventoryRepo.getAddedInventories();

        let inventoryDTO: iInventoryDTO | iInventorySummaryDTO;

        if ( responseType === RESPONSE_TYPE.SUMMARY ) inventoryDTO = InventoryMapper.mapToSummaryDTO( inventoryEntity );
        else inventoryDTO = InventoryMapper.mapToDTO( inventoryEntity );

        return Promise.resolve( inventoryDTO );
    };

    async getSubtractedInventories( responseType: string ): Promise<iInventoryDTO | iInventorySummaryDTO> {

        const inventoryEntity: iInventoryEntity = await InventoryRepo.getSubtractedInventories();

        let inventoryDTO: iInventoryDTO | iInventorySummaryDTO;

        if ( responseType === RESPONSE_TYPE.SUMMARY ) inventoryDTO = InventoryMapper.mapToSummaryDTO( inventoryEntity );
        else inventoryDTO = InventoryMapper.mapToDTO( inventoryEntity );

        return Promise.resolve( inventoryDTO );
    };
};

export default ( new InventoryController() );