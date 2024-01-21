'use client'

//it will take care of nested routes also + for current route as well
//reset not working -> use client in page.tsx
//it won't handle error in layout.tsx of the same folder but in child folders

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