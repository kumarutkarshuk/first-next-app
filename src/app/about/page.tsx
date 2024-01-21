// export const metadata = {
//     title: 'about meta deta',
// }
import { Metadata } from "next"
// export const metadata: Metadata = {
//     title: "About"
// }
export const metadata: Metadata = {
    title: {absolute:"absolute title"}
}

export default function About(){
    return <h1>about page</h1>
}