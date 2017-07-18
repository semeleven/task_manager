import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import BaseText from '../BaseText/BaseText';
import SearchControl from '../SearchControl/SearchControl';
import AppBarContainer from '../AppBarContainer/AppBarContainer';

const AppBarWrapper = styled.div`
  background: ${({ theme }) => theme.colors.appBar};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.32);
`;

const AddButton = styled(FloatingActionButton)`
  height: 56px;
  width: 56px;
  position: absolute;
  top: 100%;
  transform: translateY(-50%);
  left: 0;
  z-index: 9;
  button {
    background-color: ${({ theme }) => theme.colors.accent} !important;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.32);
    color: #FFFFFF;
    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }
  
`;

const AppBarControls = styled.div``;

export default ({ changeQuery, query }) =>
  <AppBarWrapper>
    <AppBarContainer>
      <AddButton>
        <ContentAdd />
      </AddButton>
      <BaseText type="appTitle" color="white">
        AUTOMATED TASKS
      </BaseText>
      <AppBarControls>
        <SearchControl onChange={changeQuery} value={query} />
      </AppBarControls>
    </AppBarContainer>
  </AppBarWrapper>;
