//react server components
//default -> server components
//component name can be anything
//export default is mandatory

import Link from "next/link";

export default function Home(){
    return (
        <>
            <p>hello</p>
            <Link href='/about'>about</Link> <br />
            <Link href='/docs'>docs</Link> <br />
            <Link href='/products' replace>products</Link>
        </>
    )
}