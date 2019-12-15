import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LAUNCH_QUERY = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      details
      links {
        flickr_images
        mission_patch_small
      }
      launch_date_utc
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;

const Launch = ({ match }) => {
  const { id } = match.params;
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id },
  });
  if (loading || error) return <div />;
  console.log(data);
  return <div>{data.launch.rocket.rocket_name}</div>;
};

export default Launch;
