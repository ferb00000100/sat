import React, { useState} from 'react';
import Select from 'react-select';
import { Col, Row } from 'reactstrap';
import Audit from './Audit';


const options = [
    { value: 'Lawson', label: 'Lawson' },
    { value: 'M3', label: 'M3' },
    { value: 'LN', label: 'LN' },
    { value: 'CRM', label: 'CRM' },
    { value: 'network', label: 'network' },
    { value: 'Other', label: 'Other' },
]   ;


const Form = () => {

    const [productInfo, setProduct] = useState({
        product: 'saas.aws.st'
    })

    const [count, setCount] = useState(0);

    const { product } = productInfo;
    const { counter } = count;

    const addProduct = (e) => {
        // console.log('EVENT',e);
        // const {value, label} = e;
        const product = e.value;

            setProduct({
                product: product,
            })
            setCount({
                counter: count +1
            })
    }


    const getPercentage = () => {


    }



        return (
       <>
           <Col>
            <Select
                type="text"
                name={options}
                onChange={addProduct}
                options={options}
            />
           <Audit
            product={product}
            count={counter}
           />
           </Col>

    </>
        );
    }


export default Form;