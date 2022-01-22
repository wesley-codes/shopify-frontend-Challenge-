import {
  Container,
  Image,
  Name,
  InnerContainer,
  Titlecontainer,
  Date,
  FavouriteContainer,
  FavouriteIcon,
  ImageContainer,
  SocialContainer,
} from "./index";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import MyContext from "../../Context/store";
import React, { useState, useEffect, useContext } from "react";

const NasaCards = (props) => {
  const { likeHandler,} = useContext(MyContext);

  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <Image src={props.Image} alt="" />
        </ImageContainer>

        <Titlecontainer>
          <Name>{props.title}</Name>
          <Date>{props.date}</Date>
          <FavouriteContainer>
            <FavouriteIcon
              liked={props.like}
              onClick={() => {
                likeHandler(props);
              }}
            />
          </FavouriteContainer>
          {/*  CREATING A SHARABLE LINK */}

          <SocialContainer>
            <div>
              <FacebookShareButton url={props.Image}>
                <FacebookIcon size={30} round={true} />
              </FacebookShareButton>
            </div>
            <div>
              <WhatsappShareButton url={props.Image}>
                <WhatsappIcon size={30} round={true} />
              </WhatsappShareButton>
            </div>
          </SocialContainer>
        </Titlecontainer>
      </InnerContainer>
    </Container>
  );
};

export default NasaCards;
