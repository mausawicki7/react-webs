import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFetch } from '../helpers/getFetch'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getFetch(id) 
        .then(res=> setItem(res))
        .catch((err)=> console.log(err)) 
    }, [])
    
    return (
        <div>
            <ItemDetail item={item}  />
        </div>
    )
}

export default ItemDetailContainer
