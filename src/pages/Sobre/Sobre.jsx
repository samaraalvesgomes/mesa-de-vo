import React from "react";
import styles from "./Sobre.module.css";
import { Col, Flex, Typography } from "antd";

const Sobre = () => {
  return (
    <Flex>
      <Col>
        <div>
          <Typography.Title>Mesa de Vó</Typography.Title>
          <img></img>
        </div>
        <Typography.Paragraph>
          Bem-vindo ao nosso cantinho de sabores e memórias! Aqui, acreditamos
          que cozinhar é mais do que misturar ingredientes, é compartilhar
          histórias, criar conexões e reviver momentos especiais. Inspirados
          pela tradição e pelo carinho de receitas passadas de geração em
          geração, O Mesa de vó nasceu para reunir as delícias que aquecem o
          coração e trazem o sabor de casa para a sua mesa.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Nosso objetivo é oferecer um espaço onde amantes da culinária, desde
          os curiosos aos experientes, possam descobrir, compartilhar e se
          apaixonar por receitas incríveis. Acreditamos que a comida deve
          despertar memórias e criar novas histórias, celebrando a simplicidade
          e a magia da cozinha feita com amor. Transforme cada refeição em um
          momento inesquecível.
        </Typography.Paragraph>
      </Col>
    </Flex>
  );
};

export default Sobre;
 