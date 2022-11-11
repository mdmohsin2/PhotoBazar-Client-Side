import React from 'react';

const AllreviewTable = ({ u, id }) => {
    const { message } = u
    return (
        <tr className='border-2'>
            <th>{id + 1}</th>
            <td></td>
            <td className='text-violet-600'>{message}</td>
        </tr>
    );
};

export default AllreviewTable;