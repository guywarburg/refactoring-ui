import React, { Component } from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react'
import { observable, action } from 'mobx';

import Logo from '../styles/Logo';
import Search from '../styles/Search';
import theme from '../styles/theme';

const HeaderLayout = styled.header`
  grid-column: 1 / -1;

  padding: 0 20px;

  display: grid;
  align-items: center;
  grid-template-columns: 225px 1fr;

  background: ${props => props.theme.header};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.056);

`;

@observer
class Header extends Component {
  @observable searchTxt: any;

  @action handleSearchInputChange = (newVal: any) => {
    console.log('newVal:', newVal);
    this.searchTxt = newVal;
    console.log('this.searchTxt', this.searchTxt)
  };

  render() {
    return (
      <HeaderLayout>
        <Logo fill={theme.logo} />
        <Search
          onInputChange={this.handleSearchInputChange}
          value={this.searchTxt}
        />
      </HeaderLayout>
    );
  }
}

export default Header;
