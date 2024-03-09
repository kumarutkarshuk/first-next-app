'use client'

//hookes work with client components only
//metadata can't be used with client components
//try switching between template.tsx and layout.tsx and find out the difference after filling in input field
//both template.jsx and layout.tsx can also be used together
//hookes can't be directly inside callback
//checkout what pathname gives

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
const data = [
  {name:'register', href:'/register'},
  {name:'forgot password', href:'/forgot-password'}
]
  export default function AuthTemplate({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [input, setInput] = useState("")
    const pathname = usePathname()
    return (
        <div>
          
          <div className="flex gap-2">
            {
              
              data.map((element, index)=>{
                const isActive = pathname.startsWith(element.href)

                return(
                  <Link href={element.href} className={isActive ? 'font-bold' : 'italic'}
                  key={index}>{element.name}</Link>
                )
              })
            }
          </div>
          <input value={input} onChange={(e)=>setInput(e.target.value)}/>
          {children}
          
        </div>
    )
  }
  