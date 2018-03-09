import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import media from 'styles/media';

const UserFlex = styled(Flex)`
  align-items: center;
  ${media.desktop`width: 25vw;`};
  ${media.tablet`width: 20vw;`};
  ${media.phone`width: 17vw;`};
`;

const UserData = styled.div`
  margin-left: 2em;
`;

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

const Avatar = styled.img`
  border-radius: 50%;
  border: ${props => props.theme.colors.detail} solid 0.2em;
  width: 15vw;
  height: 15vw;
`;

const UserSidebar = ({ user }) =>
  user && (
    <Flex column>
      <UserFlex column>
        <UserData>
          <Avatar src={user.avatar_url} />
          <UserName>
            <span>{user.name}</span>
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
        </UserData>
      </UserFlex>
      <pre>{JSON.stringify(user, null, '   ')}</pre>
    </Flex>
  );

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
