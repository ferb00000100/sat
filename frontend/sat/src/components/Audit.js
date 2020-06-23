import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
//
// const PRODUCT_QUERY = gql`
//     query PRODUCT_QUERY($product: String!) {
//         collectors (where: {
//             name_contains: $product
//         })
//         {
//             name
//             instanceID
//             owner
//         }
//     }
//     `;

const PRODUCT_COUNT = gql`
    query PRODUCT_QUERY($product: String!) {
        collectors (where: {
            name_contains: $product
        })
        {
            name
            instanceID
            owner
        }
    }
    `;


const Collectors = (props) => {
    const name = props.name
    const product = props.product
    const count = props.count
    // console.log("Product", product)
    // console.log("Name", name)
    // console.log("Count", count)

    const { loading, error, data } = useQuery(PRODUCT_QUERY, {
        variables: {product},
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.collectors.map(collector => (
        <>

        <ul>
            <li>Collector: {collector.name}</li>
            <li>Instance: {collector.instanceID}</li>
            <li>Owner: {collector.owner}</li>
            <li>Count: {count}</li>
        </ul>
</>
    ));

}

export default Collectors;