export interface GetParams {
    params : Promise<{id : string}>
    searchParams : Promise<{page : string , limit : string , title : string}>
}