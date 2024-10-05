// components/WelcomeComponent.jsx
import React from 'react';

import styles from './WelcomeComponent.module.css';
import AddSlide from '../addSlide/AddSlide';

const WelcomeComponent = ({ isPlaying }) => {
  return (
    <div className={styles['welcome-container']}>
      <h2 className={styles['welcome-title']}>Welcome to the Slide Show!</h2>
      <p className={styles['welcome-text']}>
        You currently have no slides. Click the button below to add your first slide and start building your slide show.
      </p>
      <AddSlide isPlaying={isPlaying} />
    </div>
  );
};

export default WelcomeComponent;
