'use client'

//if a page always gives and error like below, building won't be possible
//floor method gives nearest integer to the left on the number line
//random method gives number between 0(inc) and 1(exc)
//not getting error in production build -> use client

function getRandom(count: number){
    return Math.floor(Math.random() * count)
}

export default function ProductList(){
    // if(1 === 1){
    //     throw new Error('error occurred')
    // }
    const random = getRandom(2)
    console.log(random);
    
    if(random === 1){
        throw new Error('custom error message')
    }

    return (
        <h1>
           Products page 
        </h1>
    )
}