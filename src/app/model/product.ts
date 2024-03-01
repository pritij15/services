export interface Iproduct {
    pname : string;
    pdetails : string;
    pstatus : ProductsStatus;
    id : string;
}

export enum ProductsStatus {
    InProgress = "In Progress",
    Dispatched = "Dispatched",
    Delivered = "Delivered"
}