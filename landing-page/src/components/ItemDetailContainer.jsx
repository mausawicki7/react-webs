import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFetch } from '../helpers/getFetch'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        getFetch(id) 
        .then(res=> setItem(res))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false)) 
    }, [])
    
    return (
        <div>
            {loading ? <div><div className="lds-ring"><div></div></div><br></br>Cargando..</div> 
      : <ItemDetail item={item} />}
            
        </div>
    )
}

export default ItemDetailContainer
