import React from 'react';
import styled from 'styled-components';

import Icon from '../styles/Icon';

const MAIN_LINKS = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    isSelected: false
  },
  {
    name: 'Friendly Form',
    icon: 'friendly-form',
    isSelected: false
  },
  {
    name: 'Friendly Submission',
    icon: 'friendly-submission',
    isSelected: false
  },
  {
    name: 'Properties',
    icon: 'properties',
    isSelected: true
  },
  {
    name: 'Contacts',
    icon: 'contacts',
    isSelected: false
  },
  {
    name: 'AOAs',
    icon: 'aoas',
    isSelected: false
  },
  {
    name: 'Imports',
    icon: 'imports',
    isSelected: false
  },
  {
    name: 'Exports',
    icon: 'exports',
    isSelected: false
  }
];

const SECONDARY_LINKS = [
  {
    name: 'Property Flags',
    icon: 'property-flag',
    isSelected: false
  },
  {
    name: 'CAD Websites',
    icon: 'cad-websites',
    isSelected: false
  },
  {
    name: 'Scrapers',
    icon: 'scrapers',
    isSelected: false
  },
  {
    name: 'Updates',
    icon: 'updates',
    isSelected: false
  },
  {
    name: 'Resolute PRS Website',
    icon: 'resolute-pts-website',
    isSelected: false
  },
  {
    name: 'Logout',
    icon: 'logout',
    isSelected: false
  }
];

const SideBarLayout = styled.aside`
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  background: ${props => props.theme.sidebarBg};
  border-right: 2px solid ${props => props.theme.sidebarBorder};

  overflow: auto;
`;

const StyledSeparator = styled.div`
  border-bottom: 2px solid ${props => props.theme.sidebarBorder};
`;

const LinkGroupLayout = styled.div`
  display: grid;
  grid-auto-rows: 40px;
  margin: 10px 0;
`;

export const Sidebar = () => {
  return (
    <SideBarLayout>
      <LinkGroupLayout>
        {MAIN_LINKS.map(link => (
          <SidebarLink
            key={link.name}
            title={link.name}
            icon={link.icon}
            isSelected={link.isSelected}
          />
        ))}
      </LinkGroupLayout>
      <StyledSeparator />
      <LinkGroupLayout>
        {SECONDARY_LINKS.map(link => (
          <SidebarLink
            key={link.name}
            title={link.name}
            icon={link.icon}
            isSelected={link.isSelected}
          />
        ))}
      </LinkGroupLayout>
    </SideBarLayout>
  );
};

interface ISidebarLink {
  title: string;
  icon: string;
  isSelected: boolean;
}

interface ISidebarLinkLayout {
  isSelected: boolean;
}

const SidebarLinkLayout = styled.div<ISidebarLinkLayout>`
  display: flex;
  align-items: center;

  border-left: 4px solid;
  border-left-color: ${props =>
    props.isSelected
      ? props.theme.sidebarSelectedBorder
      : props.theme.sidebarBg};
  background: ${props =>
    props.isSelected ? props.theme.sidebarSelectedBg : props.theme.sidebarBg};

  padding: 10px 0 10px 19px;

  cursor: pointer;

  &:hover {
    border-left-color: ${props => props.theme.sidebarHoverBorder};
    background: ${props => props.theme.sidebarHoverBg};
  }

  p {
    margin-left: 1rem;
    font-size: 14px;
    font-weight: ${props => (props.isSelected ? 'bold' : 'regular')};
    line-height: 40px;

    color: ${props => props.theme.sidebarTxt};
  }
`;

const SidebarLink = ({ title, icon, isSelected }: ISidebarLink) => (
  <SidebarLinkLayout isSelected={isSelected}>
    <Icon icon={icon} />
    <p>{title}</p>
  </SidebarLinkLayout>
);
