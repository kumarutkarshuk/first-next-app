// export const metadata = {
//     title: 'about meta deta',
// }
import { Metadata } from "next"
import Link from "next/link"
// export const metadata: Metadata = {
//     title: "About"
// }
// export const metadata: Metadata = {
//     title: {absolute:"absolute title"}
// }

export default function About(){
    return(
        <div>
            <h1>about page</h1>
            <Link href='/about/nest'>Nest</Link>
        </div>
    ) 
}