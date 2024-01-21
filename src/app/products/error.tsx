'use client'

//it will take care of nested routes also
//reset not working -> use client in page.tsx
export default function ErrorBoundary({error, reset}:{
    error:Error,
    reset:()=>void
}){
    return (
        <>
            {error.message}
            <button onClick={reset}>Retry</button>
        </>
    )
}