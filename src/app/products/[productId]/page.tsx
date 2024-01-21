import { Metadata } from "next"

type Params = {
    params: {productId: string}
}

//props are passed to page.tsx and not only component function
//it can be a async-await function
//promise data type in typescript if async-await is used
//only one of metadata and generateMetadata can be present
export const generateMetadata = ({params}:Params) : Metadata => {
    return{
        title: `product ${params.productId}`
    }
}

export default function ProductDetails({params} : Params){
    return (
        <h1>{`details about product ${params.productId}`}</h1>
    )
}