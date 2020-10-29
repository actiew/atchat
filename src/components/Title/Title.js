import { Avatar } from "components/Avatar/Avatar";
import { Dropdown } from "components/Dropdown/Dropdown";
import { DropdownItem } from "components/Dropdown/Dropdown.Style";
import { Icon } from "components/Icon/Icon";
import { Paragraph } from "components/Paragraph/Paragraph";
import { Text } from "components/Text/Text";
import { Actions, TitleGroup, Titles } from "components/Title/Title.Style";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as DotIcon } from "resources/icon/dot.svg";
import { ReactComponent as PhoneIcon } from "resources/icon/phone.svg";
import { ReactComponent as VideoIcon } from "resources/icon/video.svg";
import Avatar002 from "resources/images/avatar002.png";

export const Title = ({children, onAvatarClick, onVideoClicked, animeProps, style, ...rest}) => (
   <TitleGroup style={{...style, ...animeProps}} {...rest}>
       <Avatar onClick={onAvatarClick} src={Avatar002} status={"online"}/>
       <Titles>
          <Paragraph size={"twenty"}>实视</Paragraph>
          <Paragraph size={"fourteen"} type={"normal"}>
             <Text>最后在线: 45分钟前</Text>
          </Paragraph>
       </Titles>
      <Actions>
         <Icon opacity={0.8} icon={PhoneIcon} onClick={onVideoClicked}/>
         <Icon opacity={0.8} icon={VideoIcon}/>
         <Dropdown
            content={
               <>
               <DropdownItem>
                  <Paragraph>资料选项卡</Paragraph>
               </DropdownItem>
               <DropdownItem>
                  <Paragraph>关闭此会话</Paragraph>
               </DropdownItem>
               <DropdownItem>
                  <Paragraph type={"danger"}>屏蔽此好友</Paragraph>
               </DropdownItem>
            </>
            }
         >
            <Icon opacity={0.8} icon={DotIcon}/>
         </Dropdown>
      </Actions>
   </TitleGroup>
);

Title.propTypes = {
   children: PropTypes.any,
};

Title.defaultProps = {};