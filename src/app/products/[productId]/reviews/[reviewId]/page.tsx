export default function Review({params} : {
    params: {productId: string, reviewId: string}
}){
    return <h1>review {params.reviewId} for product {params.productId}</h1>
}