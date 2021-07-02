import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import styled from 'styled-components';

export function CustomFaceBookIcon(props) {
  const StyledFaceBookIcon = styled(FacebookIcon)`
    margin: 10px;
    &:hover {
      color: hsl(171, 66%, 44%);
      cursor: pointer;
    }
  `;

  return (
    <StyledFaceBookIcon />
  );
}

export function CustomTwitterIcon(props) {
  const StyledTwitterIcon = styled(TwitterIcon)`
    margin: 10px;
    &:hover {
      color: hsl(171, 66%, 44%);
      cursor: pointer;
    }
  `;

  return (
    <StyledTwitterIcon />
  );
}

export function CustomInstagramIcon(props) {
  const StyledInstagramIcon = styled(InstagramIcon)`
    margin: 10px;
    &:hover {
      color: hsl(171, 66%, 44%);
      cursor: pointer;
    }
  `;

  return (
    <StyledInstagramIcon />
  );
}
