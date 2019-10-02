import React from 'react'
import Link from 'next/link';

const ProductItem = ({ image = {} , category = {}, brand = {}}) => {
    const { name, slug } = brand
    return (
        <Link href={`/brand/[slug]`} as={`/brand/${slug}`}>
            <div className="item">
                <img src={image.regular} width="200" height="150" />
                <h2 className="item_name">{ name }</h2>
                <style jsx>{`
                    .item {
                        margin: 1rem;
                        padding: 1rem;
                        border: 1px solid #ccc;
                        cursor: pointer;
                    }

                    .item:hover {
                        border: 1px solid #666;
                    }

                    img {
                        object-fit: contain;
                    }
                `}</style>
            </div>
        </Link>
    )
}

export default ProductItem