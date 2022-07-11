export interface iInventoryDTO {
    id?: number,
    productId: string,
    orderId: string,
    addition: boolean,
    substraction: boolean,
    quantity: number,
    createdTimeStamp: number
};

export interface iInventorySummaryDTO {
    id?: number,
    productId: string,
    orderId: string,
    quantity: number,
    createdTimeStamp: number
};