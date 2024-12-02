import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import TimerIcon from '@mui/icons-material/Timer';
import BarChartIcon from '@mui/icons-material/BarChart';
import styles from './CardRecipe.module.css';

const CardRecipe = ({ image, title, author, difficulty, time }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <div className={styles.cardDetails}>
          <span className={styles.span}>
            <PersonIcon />
            {author}
          </span>
       <span className={styles.span}>
         |
        </span>     
          <span className={styles.span}>
            <BarChartIcon />
            {difficulty}
          </span>
          <span className={styles.span}>
         |
        </span> 
          <span className={styles.span}>
            <TimerIcon />
            {time}
          </span>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default CardRecipe;