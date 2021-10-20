import React, { useEffect, useState } from 'react';
import './Services.css'
import { Link } from 'react-router-dom';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="sevices-border">

            <div className="row">
                {
                    // Using-map-function-to-show-data-in-cart

                    services.map(service =>
                        <div className="col-md-3" key={service.id}>
                            <div className="cart mt-5">
                                <div>
                                    <img className="img-wrap" src={service.img} alt="" />
                                </div>
                                <div className="mt-2">
                                    <h6>Name:  {service.name}</h6>
                                    <p>Type:  {service.type}</p>
                                    <p>Place:  {service.place}</p>
                                    <Link to={`/details/${service.id}`}> <button className="btn btn-warning">Details</button></Link>



                                    {/* <p className="p-4 text-justify"><span className="fw-bold">Details:</span> {service.details}</p> */}
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>


        </div>
    );
};

export default Services;