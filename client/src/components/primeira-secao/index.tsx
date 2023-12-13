import React from "react";
import {
  GreenLine,
  Icon,
  IconText,
  MainContainer,
  Paragraph,
  Title,
} from "./style";

type Props = {
  title: string;
  children: string;
  img: string;
  alt: string;
};

export default function PrimeiraSecao({ title, children, img, alt }: Props) {
  return (
    <>
      <MainContainer>
        <div>
          <GreenLine></GreenLine>
          <Title>{title}</Title>
          <Paragraph>{children}</Paragraph>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="#005038"
              className="bi bi-mouse"
              viewBox="0 0 16 16"
            >
              <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
            </svg>
            <IconText>Role para baixo</IconText>
            <svg
              width="32"
              height="19"
              viewBox="0 0 32 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.56641 2.38892L16.0194 15.9676L29.4724 2.38892"
                stroke="#666666"
                stroke-width="4.47811"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Icon>
        </div>
        <div>
          <img src={img} alt={alt} width={600} />
        </div>
      </MainContainer>
    </>
  );
}
