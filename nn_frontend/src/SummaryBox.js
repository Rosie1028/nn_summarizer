import React, { useState,useEffect } from 'react'
import axios from 'axios'


 export default function SummaryBox(){
    const [result, setResult] = useState(null)
    const message = async () => {
        try{
            let response = await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/',
                headers:{},
                data:{
                    article:'article',
                }
            });
            let result = response.data
            setResult(result)
        }catch(e){
            console.log(e)
        }
    };

    useEffect(()=>{
        message()
    },[])

    return(
    <p class="alert alert-success mt-4">{result}</p>
    )  
    
}
 
 


