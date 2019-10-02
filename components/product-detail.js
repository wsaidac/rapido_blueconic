import React from 'react'
import { get } from 'lodash'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useRouter } from 'next/router'

const GET_PAGE = gql`
    # Write your query or mutation here
query ($slug: String!) {
  post: postBySlug(slug: $slug) {
    ...brandTermFields
  }
}


fragment brandTermFields on BrandTerm {
  name
  description
  slug
  id
  meta {
    title
    description
    
  }
  categoryHeader {
    title
    image {
      regular: sharpieUrl(height: 185, width: 250)
      retina: sharpieUrl(height: 370, width: 500)
      altText
      description
      
    }
    banner {
      desktop: sharpieUrl(height: 300, width: 1920)
      mobile: sharpieUrl(height: 300, width: 768)
      altText
      description
      
    }
    
  }
  terms {
    title
    text
    
  }
  infoBlock {
    title
    text
    
  }
  faqQuestions {
    title
    questions {
      question
      answer
      
    }
    
  }
  highlight {
    title
    content
    
  }
  products {
    nodes {
      title
      id
      link
      uri
      slug
      information {
        issueValue
        
      }
      content {
        image {
          regular: sharpieUrl(height: 159, width: 217)
          retina: sharpieUrl(height: 318, width: 434)
          altText
          description
          
        }
        tooltip {
          title
          content
          
        }
        
      }
      brands: brandTerms {
        nodes {
          id
          name
          slug
          categoryHeader {
            title
            image {
              regular: sharpieUrl(height: 159, width: 217)
              retina: sharpieUrl(height: 318, width: 434)
              altText
              description
              
            }
            
          }
          
        }
        
      }
      kinds: kindTerms {
        nodes {
          name
          kindTitle {
            title
            
          }
          
        }
        
      }
      rapidoProduct {
        id
        
      }
      
    }
    
  }
  
}

`

const ProductDetail = () => {
    const router = useRouter()
    const { slug } = router.query
    const { loading, error, data } = useQuery(GET_PAGE, {
        variables: { slug }
    });
    console.log("TCL: ProductDetail -> loading", loading)
    console.log("TCL: ProductDetail -> data", data)
    console.log("TCL: ProductDetail -> error", error)
  
    if (loading) return <h1>Loading products...</h1>
  
    if (error) return <h1>Error, check the logs</h1>

    const { post } = data
    const banner = get(data, 'post.categoryHeader.banner.desktop', '')

    const { name, slug:sl } = post



    return (
       <Detail  name={name} sl={sl} banner={banner}/> 
    )
}


const Detail = ({ banner, name, sl }) => (
        <div>
            <img src={banner} />
            <h1>Name: { name }</h1>
            <h2>slug: { sl }</h2>

        </div>
)

export default ProductDetail