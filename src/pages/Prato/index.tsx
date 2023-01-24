import styles from './Prato.module.scss';
import { useParams } from 'react-router-dom';
import React from 'react';

export default function Prato() {
    console.log(useParams());
    
    return (
        <section className={styles.prato}>
            Prato
        </section>
    );
}
