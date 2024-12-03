import React, { useEffect, useState } from 'react';
import CardRecipe from '@/pages/components/card-recipe/CardRecipe';
import Link from 'next/link';
import { Button } from '@mui/material';
import styles from './testeCard.module.css'


const CardBetters = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const fetchReceitas = async () => {
      setTimeout(() => {
        const mockData = [
          {
            image: '/img/AboboraAssada.jpg',
            title: ' Abóbora Assada',
            author: ' Ana Maria',
            difficulty: ' Fácil',
            time: ' 40 min'
          },
          {
            image: '/img/Pao7graos.jpg',
            title: ' Pão 7 Grãos',
            author: ' Ana Maria',
            difficulty: ' Fácil',
            time: ' 40 min'
          },
          {
            image: '/img/CookiesVeganos.jpg',
            title: ' Cookies Veganos da vovó',
            author: ' Ana Maria',
            difficulty: ' Fácil',
            time: ' 40 min'
          },
          {
            image: '/img/Macarronada3queijos.jpg',
            title: ' Macarronada 3 queijos',
            author: ' Ana Maria',
            difficulty: ' Fácil',
            time: ' 40 min'
          },
        ];
        setReceitas(mockData);
      }, 1000);
    };

    fetchReceitas();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>Realize um sonho!</h1>
        <Link href="/" passHref>
          <Button>Voltar</Button>
        </Link>
      </div>
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