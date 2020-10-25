import React from 'react';
import PropTypes from 'prop-types';
import {MenuItemGroup, MenuItems, NavigationGroup} from "components/Navigation/Navigation.Style";
import {Badge} from "components/Badge/Badge";

import {ReactComponent as Message} from "resources/icon/message.svg";
import {ReactComponent as People} from "resources/icon/people.svg";
import {ReactComponent as Folder} from "resources/icon/folder.svg";
import {ReactComponent as StickyNote} from "resources/icon/stikynote.svg";
import {ReactComponent as More} from "resources/icon/more.svg";
import {ReactComponent as Config} from "resources/icon/config.svg";
import {Icon} from "components/Icon/Icon";
import {Avatar} from "components/Avatar/Avatar";

import avatar008 from "resources/images/avatar008.png";

export const Navigation = ({...rest}) => (
   <NavigationGroup {...rest}>
      <Avatar src={avatar008} status={"online"}/>
      <MenuItems>
         <MenuItem active showBadge icon={Message}/>
         <MenuItem icon={People}/>
         <MenuItem icon={Folder}/>
         <MenuItem icon={StickyNote}/>
         <MenuItem icon={More}/>
         <MenuItem icon={Config}/>
      </MenuItems>
   </NavigationGroup>
);

export const MenuItem = ({icon, active, showBadge, ...rest}) => (
   <MenuItemGroup active={active} {...rest}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">
         <Badge isShow={showBadge}>
            <Icon
               icon={icon}
               size={36}
               color={"#FFF"}
               opacity={`${({active}) => active ? 1 : 0.5}`}
            />
         </Badge>
      </a>
   </MenuItemGroup>
);

Navigation.propTypes = {
   children: PropTypes.any,
};

Navigation.defaultProps = {}