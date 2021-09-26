import React from 'react';

const PersonInfo = (props) => {
    const { info } = props || {}

    const totalSalary = (previousSalary, currentSalary) => previousSalary + currentSalary.Salary
    const total = info.reduce(totalSalary, 0);

    return (
        <div>
            <h1 className="text-warning"><i className="fas fa-calendar-check"></i>
                Length: {info.length}
            </h1>
            <h2>Total: {total} </h2>
            <ol>
                {
                    info.map(person => <li>
                        key={person.key}
                        {person.name}</li>)
                }
            </ol>
        </div>
    );
};

export default PersonInfo;