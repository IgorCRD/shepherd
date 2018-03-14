import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import media from 'styles/media';

const UserName = styled.div`
  color: ${props => props.theme.fonts.primary.color};
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-weight: ${props => props.theme.fonts.primary.weight};
  ${media.desktop`font-size: 1.7rem`};
  ${media.tablet`display:none`};
  ${media.phone`display: none`};
  align-self: flex-start;
`;

const UserLogin = styled.div`
  color: ${props => props.theme.fonts.primary.color};
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  align-self: center;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  border: ${props => props.theme.colors.detail} solid 0.2em;
  width: 10vw;
`;

const UserSidebar = ({ user }) => {
  const names = user.name.split(' ');
  let firstAndLastNames;
  if (names.length !== 0) {
    [firstAndLastNames] = names;
  }
  if (names.length >= 2) {
    firstAndLastNames = `${names[0]} ${names[names.length - 1]}`;
  }

  return (
    user && (
      <Flex column>
        <div>
          <AvatarImg src={user.avatar_url} />
          <UserName>
            <span>{firstAndLastNames}</span>
          </UserName>
          <UserLogin>
            <span>{user.login}</span>
          </UserLogin>
          <div>
            <span>{user.email}</span>
          </div>
          <div>
            <span>{user.location}</span>
          </div>
        </div>
      </Flex>
    )
  );
};

export const userShape = PropTypes.shape({
  login: PropTypes.string.required,
  id: PropTypes.number.required,
  avatar_url: PropTypes.string,
  gravatar_id: PropTypes.string,
  url: PropTypes.string,
  html_url: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  blog: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  private_gists: PropTypes.number,
  total_private_repos: PropTypes.number,
  owned_private_repos: PropTypes.number,
});

UserSidebar.propTypes = {
  user: userShape.isRequired,
};

export default UserSidebar;
