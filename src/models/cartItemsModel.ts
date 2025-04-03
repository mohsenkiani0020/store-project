export interface CartItems {
    id : number,
    qty : number
}

export interface CartItemsArr {
    allCartItems : CartItems[]
    handleAddOrUpdateCartItem : (id:number)=> void
    getProductsQty : (id:number)=> number
    totalQty : number
}