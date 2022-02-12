import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: 111-111-111'>111-111-111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:agnibha10@gmail.com'>
            agnibha10@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>aedaafawfaedfawdd</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/casafurix'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://instagram.com/casafurix'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/agnibha-sarkar-8143161b8/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
