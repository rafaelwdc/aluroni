import styles from './Prato.module.scss';
import { useLocation } from 'react-router-dom';
import React from 'react';

export default function Prato() {
    console.log(useLocation());
    
    return (
        <section className={styles.prato}>
            Prato
        </section>
    );
}
