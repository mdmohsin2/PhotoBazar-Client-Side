import React from 'react';

const AllreviewTable = ({ u, id }) => {
    const { message } = u
    return (
        <tr>
            <th>{id + 1}</th>
            <td>Cy Ganderton</td>
            <td>{message}</td>
        </tr>
    );
};

export default AllreviewTable;