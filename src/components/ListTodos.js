import React, {Fragment, useState, useEffect} from 'react';

const ListTodos = () => {
    return(
        <Fragment>
            <table class="table table-hover mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {/* 
                        <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                    */}
                
                
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos; 