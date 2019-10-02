import React from 'react'
import ProductDetail from '../../components/product-detail'

import { useRouter } from 'next/router'
import withData from "../../lib/apollo";

const ProductPage = () => {
    const router = useRouter()
  const { slug } = router.query
  console.log('SLUG IN PA~GE', slug)
    return (
    <div>
        <ProductDetail />
    </div>
 )
}


export default withData(ProductPage)