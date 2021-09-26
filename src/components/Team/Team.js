import React, { useEffect, useState } from 'react';
import './Team.css';
import Person from '../Person/Person';
import PersonInfo from '../PersonInfo/PersonInfo';

const Team = () => {
    const [persons, setPersons] = useState([]);

    // state for personInfo
    const [info, setInfo] = useState([]);

    const handleAddPerson = (person) => {
        const newPersonInfo = [...info, person]
        setInfo(newPersonInfo);
    }

    useEffect(() => {
        fetch('./persons.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    return (
        <div className="">
            <div className="row">
                <div className="col-md-9 team-background p-2">
                    <div className="row">
                        {
                            persons.map(person => <Person
                                key={person.key}
                                person={person}
                                handleAddPerson={handleAddPerson}
                            ></Person>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <PersonInfo info={info}></PersonInfo>
                </div>
            </div>
        </div>
    );
};

export default Team;