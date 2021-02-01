import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { Avatar } from "src/components/Avatar/Avatar";
import { Badge } from "src/components/Badge/Badge";
import { Icon } from "src/components/Icon/Icon";

import {
   MenuItemGroup,
   MenuItems,
   NavigationGroup,
} from "src/components/Navigation/Navigation.Style";
import { ReactComponent as Config } from "src/resources/icon/config.svg";
import { ReactComponent as Folder } from "src/resources/icon/folder.svg";

import { ReactComponent as Message } from "src/resources/icon/message.svg";
import { ReactComponent as More } from "src/resources/icon/more.svg";
import { ReactComponent as People } from "src/resources/icon/people.svg";
import { ReactComponent as StickyNote } from "src/resources/icon/stickynote.svg";
import CommunityAvatar from "src/resources/images/communityAvatar.jpg";


export const Navigation = ({ ...rest }) => (
   <NavigationGroup {...rest}>
      <Avatar
         src={CommunityAvatar}
         status={"online"}
      />
      <MenuItems>
         <MenuItem
            to="/"
            showBadge
            icon={Message}
         />
         <MenuItem
            to="/contact"
            icon={People}
         />
         <MenuItem
            to="/file"
            icon={Folder}
         />
         <MenuItem
            to="/note"
            icon={StickyNote}
         />
         <MenuItem
            to="/more"
            icon={More}
         />
         <MenuItem
            to="/setting"
            icon={Config}
         />
      </MenuItems>
   </NavigationGroup>
);

export function MenuItem ({
   to,
   icon,
   showBadge,
   ...rest
}) {
   let location = useLocation();
   let active = !!matchPath(location.pathname, {
      path: to,
      exact: to === "/",
   });

   return (
      <MenuItemGroup active={active} {...rest}>
         <Link to={to}>
            <Badge isShow={showBadge}>
               <Icon
                  icon={icon}
                  width="36px"
                  height="36px"
                  color="#FFFFFF"
                  opacity={`${({ active }) => active
                     ? 1
                     : 0.5}`}
               />
            </Badge>
         </Link>
      </MenuItemGroup>
   );
}

Navigation.propTypes = {

}

Navigation.defaultProps = {};
