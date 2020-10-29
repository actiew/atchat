import { Avatar } from "components/Avatar/Avatar";
import { Button } from "components/Button/Button";
import { Emoji } from "components/Emoji/Emoji";
import { Icon } from "components/Icon/Icon";
import { Paragraph } from "components/Paragraph/Paragraph";
import {
   Album,
   AlbumSection,
   AlbumTitle,
   CloseIcon,
   ContactSection,
   Photo,
   ProfileGroup,
   SocialLinks,
} from "components/Profile/Profile.Style";
import { Seperator } from "components/Seperator/Seperator";
import { Text } from "components/Text/Text";
import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as CloseButtonIcon } from "resources/icon/close.svg";
import { ReactComponent as Dingtalk } from "resources/icon/dingtalk.svg";
import { ReactComponent as EditIcon } from "resources/icon/edit.svg";
import { ReactComponent as FeishuIcon } from "resources/icon/feishu.svg";
import { ReactComponent as QQIcon } from "resources/icon/qq.svg";

import Avatar005 from "resources/images/avatar005.png";
import Photo001 from "resources/images/photo001.png";
import Photo002 from "resources/images/photo002.png";
import Photo003 from "resources/images/photo003.png";
import theme from "theme";

export const Profile = ({children, onCloseClick, showEdit, showCloseIcon, onEdit, status, ...rest}) => (
   <ProfileGroup {...rest}>
      {showCloseIcon &&
      <CloseIcon icon={CloseButtonIcon} color={theme.redColor} onClick={onCloseClick}/>}
      <Avatar src={Avatar005} size={160} status={status}>
         {showEdit && (
            <Button
               shape={"circle"}
               width={"36px"}
               height={"36px"}
               backgroundColor={theme.greenColor}
               onClick={onEdit}
            >
               <Icon icon={EditIcon} width={"24px"} color={theme.whiteColor}/>
            </Button>
         )}
      </Avatar>
      <Paragraph size={"twentyTwo"}>实视</Paragraph>
      <Paragraph size={"sixteen"} type={"normal"}>北京市 朝阳区</Paragraph>
      <Paragraph><Emoji label="fire">🔥</Emoji>构建真实视角的世界</Paragraph>
      <SocialLinks>
         <Icon.Social
            icon={Dingtalk}
            backgroundColor={"#2560F6"}
            href="https://www.dingtalk.com/"
         />
         <Icon.Social
            icon={FeishuIcon}
            backgroundColor={"#4272F6"}
            href="https://www.feishu.cn/"
         />
         <Icon.Social
            icon={QQIcon}
            backgroundColor={"#53B5EF"}
            href="https://im.qq.com/"
         />
      </SocialLinks>
      <Seperator
         css={`
            margin: 24px 0;
         `}
      />
      <ContactSection>
         <Description label={"☎️电 话"}>+86 18723459876</Description>
         <Description label={"📧邮 件"}>wuwuzgr@gmail.com</Description>
         <Description label={"🌐网 站"}>https://actiew.com</Description>
      </ContactSection>
      <Seperator
         css={`
            margin: 30px 0;
         `}
      />
      <AlbumSection>
         <AlbumTitle>
            <Text size={"fourteen"}>相册【36】</Text>
            {/*eslint-disable-next-line*/}
            <a>
               <Text size={"fourteen"} type={"primary"}>查看全部</Text>
            </a>
         </AlbumTitle>
         <Album>
            <Photo src={Photo001} alt=""/>
            <Photo src={Photo002} alt=""/>
            <Photo src={Photo003} alt=""/>
         </Album>
      </AlbumSection>
   </ProfileGroup>
);

const Description = ({children, label}) => (
   <Paragraph>
      <Text type="normal">{label}: </Text>
      <Text>{children}</Text>
   </Paragraph>
);

Profile.propTypes = {
   children: PropTypes.any,
};

Profile.defaultProps = {
   showCloseIcon: true,
};