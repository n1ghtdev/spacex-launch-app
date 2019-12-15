import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import LaunchListGrid from '../components/LaunchListGrid';
import LaunchItem from '../components/LaunchItem';

const LAUNCHES_QUERY = gql`
  query launchesPastList($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      links {
        flickr_images
        mission_patch_small
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
  }
`;

const LuanchList = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY, {
    variables: { limit: 8 },
  });
  if (loading || error) return <div />;
  return (
    <LaunchListGrid>
      {data.launchesPast.map(item => (
        <LaunchItem
          key={item.id}
          id={item.id}
          missionName={item.mission_name}
          rocketName={item.rocket.rocket_name}
          missionImage={item.links.mission_patch_small}
          rocketImage={item.links.flickr_images[0]}
          launchDate={item.launch_date_utc}
        />
      ))}
    </LaunchListGrid>
  );
};

export default LuanchList;
