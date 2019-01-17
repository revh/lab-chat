import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ChatPreviewContainer = styled.div`
  box-sizing: border-box;
  height: 143px;
  border-radius: 6px;
  background-color: #ffffff;
  display: flex;
  border: 1px solid black;
  padding: 30px;
`
const Image = styled.div`
  width: 46px;
  height: 46px;
  background: red;
`
const Name = styled.div``
const Status = styled.div``
const CardContainer = styled.div`
  display: flex;
  flex: 1;
`;

const ChatPreview = ({ }) => (
  <ChatPreviewContainer>
    <CardContainer>
      <Image />
      <div style={{ flex: 1 }}>
        <Name>Donald Johnson</Name>
        <Status>{true ? 'Online' : 'Offline'}</Status>
      </div>
      <div>3h ago</div>
    </CardContainer>
  </ChatPreviewContainer>
);

export default ChatPreview