import React from "react";

import goldenImg from '../../img/golden.jpg'
//Card component
export const Card = () => {
	return (
        <div className="card">
            <img src={goldenImg} className="card-img-top" alt="Golden Retriver" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
	);
};