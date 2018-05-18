export interface OrderDetails {
   orderType: string,
   customerId: string,
   supplierId: string,
   deliveryDate: string,
   itemDetails: Array<OrderItem>
}

export interface OrderItem{
    itemNumber: number,
    description: string,
    quantity: number,
    weight: string,
    upc: string
}
