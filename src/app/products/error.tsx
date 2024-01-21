'use client'

//it will take care of nested routes also
export default function ErrorBoundary({error}:{error:Error}){
    return <p>{error.message}</p>
}