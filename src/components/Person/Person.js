import React from 'react';
import './Person.css';

const Person = (props) => {
    // destructuring data
    const { name, img, Age, Education, Salary, purpose } = props.person;

    return (
        <div className="col-md-4 mb-3">
            <div className="card image-width overflow-auto">
                <img src={img} className="card-img-top img-fluid rounded-start w-100" alt="..." />
                <div className="card-body text-center">
                    <h2 className="card-title">{name}</h2>
                    <h4>Age: {Age}</h4>
                    <h4>Salary: {Salary}</h4>
                    <h4 className="card-text">Education: {Education}</h4>
                    <h4 className="card-text">Purpose: {purpose}</h4>
                    <button onClick={() => props.handleAddPerson(props.person)} className="btn btn-success"><i className="fas fa-check-circle"></i> Add to List</button>
                    <p className="text-warning fs-2"><i className="fab fa-youtube"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Person;