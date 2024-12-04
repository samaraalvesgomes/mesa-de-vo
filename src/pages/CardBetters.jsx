import React, { useEffect, useState } from 'react';
import CardRecipe from '@/pages/components/card-recipe/CardRecipe';
import styles from './CardBetters.module.css'

const MOCK_RECEITAS = [
  {
    image: '/img/BackgroundReceitaBoloLimao.png',
    title: 'Bolo de limão da vovó',
    author: ' Agata Harkness',
    difficulty: 'Fácil',
    time: '60 min',
  },
  {
    image: '/img/CupcakeBeterraba.jpg',
    title: 'Cupcake de beterraba',
    author: ' Megan Morse',
    difficulty: 'Médio',
    time: '85 min',
  },
  {
    image: '/img/Pao7graos.jpg',
    title: 'Pão 7 Grãos',
    author: ' Shayera Hawks',
    difficulty: 'Difícil',
    time: '60 min',
  },
];

const CardBetters = () => {
  const [receitas, setReceitas] = useState([]);

  // Simula carregamento inicial
  useEffect(() => {
    const loadReceitas = () => {
      setReceitas(MOCK_RECEITAS);
    };
    loadReceitas();
  }, []);

  return (
    <div className={styles.middleSection}>
      <h1 className={styles.titleMiddle}>Melhores da Semana</h1>
      <div className={styles.cardsContainer}>
        {receitas.length > 0 ? (
          receitas.map((receita, index) => (
            <CardRecipe
              key={index}
              image={receita.image}
              title={receita.title}
              author={receita.author}
              difficulty={receita.difficulty}
              time={receita.time}
            />
          ))
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
    </div>
  );
};

export default CardBetters;
