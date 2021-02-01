import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "src/components/Avatar/Avatar";
import { Dropdown } from "src/components/Dropdown/Dropdown";
import { DropdownItem } from "src/components/Dropdown/Dropdown.Style";
import { Icon } from "src/components/Icon/Icon";
import { Paragraph } from "src/components/Paragraph/Paragraph";
import { Text } from "src/components/Text/Text";
import { Actions, TitleGroup, Titles } from "src/components/Title/Title.Style";

import { ReactComponent as DotIcon } from "src/resources/icon/dot.svg";
import { ReactComponent as PhoneIcon } from "src/resources/icon/phone.svg";
import { ReactComponent as VideoIcon } from "src/resources/icon/video.svg";
import Avatar002 from "src/resources/images/avatar002.png";


export const Title = ({
   onAvatarClick,
   onVideoClicked,
   animeProps,
   style,
   ...rest
}) => (
   <TitleGroup style={{ ...style, ...animeProps }} {...rest}>
      <Avatar
         onClick={onAvatarClick}
         src={Avatar002}
         status="online"
      />
      <Titles>
         <Paragraph size="twenty">实视</Paragraph>
         <Paragraph
            size="fourteen"
            type="normal"
         >
            <Text>最后在线: 45分钟前</Text>
         </Paragraph>
      </Titles>
      <Actions>
         <Icon
            opacity={0.8}
            icon={PhoneIcon}
            onClick={onVideoClicked}
         />
         <Icon
            opacity={0.8}
            icon={VideoIcon}
         />
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
                     <Paragraph type="danger">屏蔽此好友</Paragraph>
                  </DropdownItem>
               </>
            }
         >
            <Icon
               opacity={0.8}
               icon={DotIcon}
            />
         </Dropdown>
      </Actions>
   </TitleGroup>
);

Title.propTypes = {
   animeProps: PropTypes.any,
   onAvatarClick: PropTypes.any,
   onVideoClicked: PropTypes.any,
   style: PropTypes.any,
};
