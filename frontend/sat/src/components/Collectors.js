import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ALL_COLLECTORS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        collectors {
            name
            instanceID
            owner
            }
    }
`;

const Collectors = () => {
    const { loading, error, data } = useQuery(ALL_COLLECTORS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.collectors.map(collector => (
        <ul>
            <li>Collector: {collector.name}</li>
            <li>Instance: {collector.instanceID}</li>
            <li>Owner: {collector.owner}</li>
        </ul>
    ));

}

export default Collectors;