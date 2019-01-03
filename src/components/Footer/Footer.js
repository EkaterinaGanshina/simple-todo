import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <a className={styles.footerLink} href="http://ganshina.com">Go to main page</a>
          </div>
        </div>
      </div>
    </div>
  )
}
