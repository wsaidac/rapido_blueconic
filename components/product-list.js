import React from 'react'
import { get } from 'lodash'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import ProductItem from './product-item'

const GET_PAGE = gql`
# Write your query or mutation here
# Write your query or mutation here
query {
  post: postBySlug(slug: "home") {
    ... on Home {
      title
      meta {
        title
        description
      }

      popularProducts {
        title
        subtitle
        items {
          image {
            regular: sharpieUrl(height: 84, width: 253)
            retina: sharpieUrl(height: 168, width: 506)
            altText
            description
          }
          category {
            id
            slug
          }
          brand {
            id
            name
            categoryHeader {
              title
              image {
                regular: sharpieUrl(height: 84, width: 253)
                retina: sharpieUrl(height: 168, width: 506)
                altText
                description
              }
            }
            slug
          }
        }
      }
      header {
        titlePart1
        titlePart2
        image {
          desktop: sharpieUrl(height: 456, width: 1920)
          mobile: sharpieUrl(height: 300, width: 768)
          altText
          description
        }
      }
    }
  }
}
`

const ProductList = () => {

  const { loading, error, data } = useQuery(GET_PAGE);
  console.log("TCL: ProductList -> loading", loading)
  console.log("TCL: ProductList -> data", data)
  console.log("TCL: ProductList -> error", error)

  if (loading) return <h1>Loading products</h1>

  if (error) return <h1>Error, check the logs</h1>

  const items = get(data, 'post.popularProducts.items', [])

  return (
    <ul>
      {
        items.map((item, index) => <ProductItem key={index.toString()} {...item} />)
      }
      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </ul>
  )
}

export default ProductList 