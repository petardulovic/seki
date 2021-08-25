import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styles from './Verify.module.css';

export default function Login() {
    return (
        <Form className={styles.form}>
            <Form.Group>
                <h4>Two-way authentication</h4>
                <Form.Label >6-digit code</Form.Label>
                <br />
                <Form.Control type="email" className={styles.input} />
            </Form.Group>
            <Form.Group className={styles.btnGrp}>
                <Button className={styles.btnLogin} href="/home" >Verify</Button>
                <Button variant="secondary" style={{float:'right'}}>Resend E-mail</Button>
            </Form.Group>
        </Form>
    );
}