import React from 'react';
import Tab from 'react-bootstrap/Table';
import styles from './Table.module.css';
import { Button } from 'react-bootstrap';


export default function Table(props) {

    return (
        <Tab className={styles.tab} striped bordered hover variant="dark">
            <thead>
                <tr >
                    <th style={{border: '0px'}}> <Button variant="secondary">Add User</Button>{' '}</th>
                    <th style={{border: '0px'}}></th>
                    <th style={{border: '0px'}}></th>
                    <th style={{border: '0px'}}></th>
                </tr>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Tab>
    )
}