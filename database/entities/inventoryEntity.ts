export interface iInventoryEntity {
    id?: number,
    productId: string,
    orderId: string,
    addition: boolean,
    substraction: boolean,
    quantity: number,
    createdTimeStamp: number
};