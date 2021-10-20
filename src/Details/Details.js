import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const [serviceDetails, setServiceDetails] = useState({});

    //useparams use to dynamic id

    let { detailsId } = useParams();

    console.log(detailsId);

    //useEffect  fetch usefor details

    useEffect(() => {
        fetch('/fakeData.JSON')
            .then(res => res.json())
            .then(data => {
                const showData = data.find(showData => showData.id === parseInt(detailsId));
                setServiceDetails(showData);

            })
    }, [detailsId])


    return (
        <div className="mt-5 pt-5">
            <img className="img-size" src={serviceDetails.img} alt="" />
            <p className="p-size">{serviceDetails.details}</p>
        </div>
    );
};

export default Details;