import React from "react";

export const Landing = () =>{

    
        const getData = async () => {
            try{
                const res = await fetch("/api/products");
                console.log(await res.json());
            }
            catch(e){
                console.log(e);
            }
        }
    
    return(
        <h1 onClick={getData}>Hello Neog People</h1>
    )
}