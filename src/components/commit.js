import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const CardDiv = styled.div`
  background-color: white;
  padding: 10px;
  border: #e4e4e4 solid 1px;
  margin-top: -1px;

  border-top-left-radius: ${props => (props.index === 0 ? 3 : 0)}px;
  border-top-right-radius: ${props => (props.index === 0 ? 3 : 0)}px;
  border-bottom-left-radius: ${props => (props.index === props.length - 1 ? 3 : 0)}px;
  border-bottom-right-radius: ${props => (props.index === props.length - 1 ? 3 : 0)}px;
`;

const Title = styled.h1`
  color: ${props => props.theme.fonts.primary.color};
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-size: 22px;
  letter-spacing: 0.5px;
  margin-top: 0.2em;
  margin-bottom: 5px;
`;

const MarkedSpan = styled.span`
  color: ${props => props.theme.colors.detail};
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-size: 13px;
  letter-spacing: 0.5px;
`;

const BottomSpan = styled.span`
  font-size: 13px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.fonts.primary.color};
`;

const DescriptionParagraph = styled.p`
  color: ${props => props.theme.fonts.secondary.color};
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
`;

const Commit = ({
  author, message, date, key, repoFullName, index, length,
}) => {
  const messageParts = message.split('\n');
  const [title, ...description] = messageParts;
  const fullDescription = description.join('');

  return (
    <li key={key} style={{ listStyle: 'none' }}>
      <CardDiv index={index} length={length}>
        <Title>{title}</Title>
        <DescriptionParagraph>{fullDescription}</DescriptionParagraph>
        <Flex full>
          <MarkedSpan alignSelfStart>{repoFullName}</MarkedSpan>
          <Flex full justifyEnd>
            <BottomSpan>
              commited by
              <MarkedSpan>{` ${author} `}</MarkedSpan>
              at {new Date(date).toLocaleString()}
            </BottomSpan>
          </Flex>
        </Flex>
      </CardDiv>
    </li>
  );
};

Commit.propTypes = {
  author: PropTypes.string,
  message: PropTypes.string,
  // link: PropTypes.string.isRequired,
  date: PropTypes.string,
  repoFullName: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

Commit.defaultProps = {
  author: '',
  message: '',
  date: '',
};

export default Commit;
