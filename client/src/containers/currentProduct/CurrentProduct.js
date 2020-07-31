import React,{useEffect} from 'react';

function CurrentProduct(props) {
    useEffect(()=>{
        if(!props.match.params.id){
           
        }
        
    })
    return (
        <div>
            Current Product {props.match.params.id}
        </div>
    )
}

export default CurrentProduct;
