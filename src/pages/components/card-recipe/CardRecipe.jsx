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
    <span className={styles.title}>
    <h3 className={styles.cardTitle}>{title}</h3>
    </span>
    <div className={styles.cardDetails}>
      <span className={styles.spantext}>
        <PersonIcon />
        {author}
      </span>
      <span className={styles.spantext}>|</span>
      <span className={styles.spantext}>
        <BarChartIcon />
        {difficulty}
      </span>
      <span className={styles.spantext}>|</span>
      <span className={styles.spantext}>
        <TimerIcon />
        {time}
      </span>
    </div>
  </div>
</div>

  );
};

export default CardRecipe;