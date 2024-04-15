import React from 'react'
import {ProductBadge, ProductRatings} from '.'
const ProdunctDetails = ({product,ratings}) => {
  return (
    <div className="mb-1">
      <div className=" text-xl xl:text-2xl font-medium mb-1">{product.title}</div>
      <div className="text-xm xl:text-base font-medium mb-1">by <span className="text-blue">{product.brand}</span></div>
      {ratings &&
      <div className="text-xm xl:text-base font-medium mb-1"><ProductRatings avgRating={product.avgRating} ratings={product.ratings}/></div>
      }
      <div></div>
      <div className="text-xs xl:text-sm font-bold mb-1">{product.attribute}</div>
      <div><ProductBadge badge={product.badge}/></div>
    </div>
  )
}

export default ProdunctDetails
