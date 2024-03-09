import { Metadata } from "next"

type Params = {
    params: {productId: string}
}

//props are passed to page.tsx and not only component function
//it can be an async-await function also
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

//extra code for static site generation
// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())
   
//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
//   export default function Page({ params }) {
//     const { slug } = params
//     // ...
//   }