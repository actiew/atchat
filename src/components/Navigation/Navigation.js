import { Avatar } from "components/Avatar/Avatar";
import { Badge } from "components/Badge/Badge";
import { Icon } from "components/Icon/Icon";

import {
   MenuItemGroup,
   MenuItems,
   NavigationGroup,
} from "components/Navigation/Navigation.Style";
import PropTypes from "prop-types";
import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { ReactComponent as Config } from "resources/icon/config.svg";
import { ReactComponent as Folder } from "resources/icon/folder.svg";

import { ReactComponent as Message } from "resources/icon/message.svg";
import { ReactComponent as More } from "resources/icon/more.svg";
import { ReactComponent as People } from "resources/icon/people.svg";
import { ReactComponent as StickyNote } from "resources/icon/stickynote.svg";
import CommunityAvatar from "resources/images/communityAvatar.jpg";

export const Navigation = ({...rest}) => (
   <NavigationGroup {...rest}>
      <Avatar src={CommunityAvatar} status={"online"}/>
      <MenuItems>
         <MenuItem to="/" showBadge icon={Message}/>
         <MenuItem to="/contact" icon={People}/>
         <MenuItem to="/file" icon={Folder}/>
         <MenuItem to="/note" icon={StickyNote}/>
         <MenuItem to="/more" icon={More}/>
         <MenuItem to="/setting" icon={Config}/>
      </MenuItems>
   </NavigationGroup>
);

export function MenuItem({to, icon, showBadge, ...rest}) {
   let location = useLocation();
   let active = !!matchPath(location.pathname, {path: to, exact: to === "/"});
   
   return (
      <MenuItemGroup active={active} {...rest}>
         <Link to={to}>
            <Badge isShow={showBadge}>
               <Icon
                  icon={icon}
                  width={"36px"}
                  height={"36px"}
                  color={"#FFF"}
                  opacity={`${({active}) => active ? 1 : 0.5}`}
               />
            </Badge>
         </Link>
      </MenuItemGroup>
   );
}

Navigation.propTypes = {
   children: PropTypes.any,
};

Navigation.defaultProps = {};