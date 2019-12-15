import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.article`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
`;
const Header = styled.header`
  align-self: flex-start;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
`;
const MissionIcon = styled.img`
  max-width: 60px;
  max-height: 60px;
  margin-right: 20px;
  /* width: 100px; */
  /* height: 100px; */
`;

const RocketImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const Overlay = styled(Link)`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-items: center;
  align-items: center;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: transform 250ms;
  transform: translateY(-100%);
  ${Wrapper}:hover & {
    transform: translateY(0);
  }
  /* transition: opacity 0.25s; */
`;

const DateText = styled.p`
  margin-left: auto;
`;

const LaunchItem = ({
  id,
  missionName,
  rocketName,
  missionImage,
  rocketImage,
  launchDate,
}) => {
  const date =
    new Date(launchDate).toLocaleDateString() ===
    new Date().toLocaleDateString()
      ? 'Today'
      : new Date(launchDate).toLocaleDateString();
  return (
    <Wrapper>
      <RocketImage
        src={rocketImage || 'https://via.placeholder.com/250x250'}
        alt={rocketName}
      />
      <Overlay to={`/launch/${id}`}>
        <Header>
          <MissionIcon src={missionImage} alt={missionName} />
          <div>
            <h2>{missionName}</h2>
            <p>{rocketName}</p>
          </div>
          <DateText>{date}</DateText>
        </Header>
      </Overlay>
    </Wrapper>
  );
};

export default LaunchItem;
