import { Container } from "../Layout/Container/Container";
import { Developments } from "./Development/Development";

import s from './Footer.module.scss';
import { Copyright } from "./Copyright/Copyright";
import { Contacts } from "./Contacts/Contacts";
import { Social } from "./Social/Social";
import { Category } from "./Category/Category";

export const Footer = ({list}) => (
  <footer>
    <Container>
      <div className={s.container}>
        <Category list={list} />
        <Social />
        <Contacts />
        <Copyright />
        <Developments />
      </div>
    </Container>
  </footer>
  
);
