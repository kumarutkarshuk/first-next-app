'use client'

//hookes work with client components only

import Link from "next/link"
import { usePathname } from "next/navigation"
const data = [
  {name:'register', href:'/register'},
  {name:'forgot password', href:'/forgot-password'}
]
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
          
          <div className="flex gap-2">
            {
              
              data.map((element)=>{
                const isActive = usePathname().startsWith(element.href)

                return(
                  <Link href={element.href} className={isActive ? 'font-bold' : 'italic'}>{element.name}</Link>
                )
              })
            }
          </div>
          {children}
          
        </div>
    )
  }
  