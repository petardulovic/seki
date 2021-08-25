import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styles from './Login.module.css';

export default function Login() {
    return (
        <Form className={styles.form}>
            <Form.Group>
                <Form.Label column sm="3" >E-mail:</Form.Label>
                <br />
                <Form.Control type="email" className={styles.input} />
                <Form.Label>Password:</Form.Label>
                <br />
                <Form.Control column sm="3" type="password" className={styles.input} />
            </Form.Group>
            <Form.Group className={styles.btnGrp}>
                <Button className={styles.btnLogin} href="/verify" >Login</Button>
                <Button variant="secondary" style={{float:'right'}}>Register</Button>
            </Form.Group>
        </Form>
    );
}