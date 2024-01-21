//react server components
//default -> server components
//component name can be anything
//export default is mandatory

import Link from "next/link";

export default function Home(){
    return (
        <>
            <h1>home page</h1>
            <div className="flex gap-2">
                <Link href='/about'>about</Link>
                <Link href='/docs'>docs</Link>
                <Link href='/products' replace>products</Link>
            </div>
        </>
    )
}