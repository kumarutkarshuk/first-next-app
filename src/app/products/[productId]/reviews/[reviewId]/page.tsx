import { notFound } from "next/navigation"
export default function Review({params} : {
    params: {productId: string, reviewId: string}
}){
    // no need of return statement after notFound()
    if(parseInt(params.reviewId)>1000){
        notFound()
    }
    return <h1>review {params.reviewId} for product {params.productId}</h1>
}