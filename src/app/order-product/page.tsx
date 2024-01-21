'use client'

import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router = useRouter()
    function handleClick(){
        console.log('order placed successfully')
        router.push('/')
        // router.replace('/')
        // router.back()
        // router.forward()
    }
    return (
        <div>
            <h1>Order product</h1>
            <button onClick={handleClick}>Order</button>
        </div>
    )
}