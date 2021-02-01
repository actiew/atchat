import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "src/components/Avatar/Avatar";
import { Button } from "src/components/Button/Button";
import { Emoji } from "src/components/Emoji/Emoji";
import { Icon } from "src/components/Icon/Icon";
import { Paragraph } from "src/components/Paragraph/Paragraph";
import {
   Album,
   AlbumSection,
   AlbumTitle,
   CloseIcon,
   ContactSection,
   Photo,
   ProfileGroup,
   SocialLinks,
} from "src/components/Profile/Profile.Style";
import { Seperator } from "src/components/Seperator/Seperator";
import { Text } from "src/components/Text/Text";
import { ReactComponent as CloseButtonIcon } from "src/resources/icon/close.svg";
import { ReactComponent as Dingtalk } from "src/resources/icon/dingtalk.svg";
import { ReactComponent as EditIcon } from "src/resources/icon/edit.svg";
import { ReactComponent as FeishuIcon } from "src/resources/icon/feishu.svg";
import { ReactComponent as QQIcon } from "src/resources/icon/qq.svg";

import Avatar005 from "src/resources/images/avatar005.png";
import Photo001 from "src/resources/images/photo001.png";
import Photo002 from "src/resources/images/photo002.png";
import Photo003 from "src/resources/images/photo003.png";
import { greenColor, redColor, sixteen, twentyTwo, whitestColor } from "src/theme/theme";


export const Profile = ({
   children,
   onCloseClick,
   showEdit,
   showCloseIcon,
   onEdit,
   status,
   ...rest
}) => (
   <ProfileGroup {...rest}>
      {showCloseIcon &&
      <CloseIcon
         icon={CloseButtonIcon}
         color={redColor}
         onClick={onCloseClick}
      />}
      <Avatar
         src={Avatar005}
         size={160}
         status={status}
      >
         {showEdit && (
            <Button
               shape="circle"
               width="36px"
               height="36px"
               backgroundColor={greenColor}
               onClick={onEdit}
            >
               <Icon
                  icon={EditIcon}
                  width="24px"
                  color={whitestColor}
               />
            </Button>
         )}
      </Avatar>
      <Paragraph size={twentyTwo}>实视</Paragraph>
      <Paragraph
         size={sixteen}
         type={"normal"}
      >
         北京市 朝阳区
      </Paragraph>
      <Paragraph><Emoji label="fire">🔥</Emoji>构建真实视角的世界</Paragraph>
      <SocialLinks>
         <Icon.Social
            icon={Dingtalk}
            backgroundColor="#2560F6"
            href="https://www.dingtalk.com/"
         />
         <Icon.Social
            icon={FeishuIcon}
            backgroundColor="#4272F6"
            href="https://www.feishu.cn/"
         />
         <Icon.Social
            icon={QQIcon}
            backgroundColor="#53B5EF"
            href="https://im.qq.com/"
         />
      </SocialLinks>
      <Seperator
         css={`
            margin: 24px 0;
         `}
      />
      <ContactSection>
         <Description label={"☎️电 话"}>+86 15678796958</Description>
         <Description label={"📧邮 件"}>actiews@gmail.com</Description>
         <Description label={"🌐网 站"}>https://www.actiew.com</Description>
      </ContactSection>
      <Seperator
         css={`
            margin: 30px 0;
         `}
      />
      <AlbumSection>
         <AlbumTitle>
            <Text size={sixteen}>相册【36】</Text>
            {/*eslint-disable-next-line*/}
            <a>
               <Text
                  size={sixteen}
                  type="primary"
               >查看全部</Text>
            </a>
         </AlbumTitle>
         <Album>
            <Photo
               src={Photo001}
               alt=""
            />
            <Photo
               src={Photo002}
               alt=""
            />
            <Photo
               src={Photo003}
               alt=""
            />
         </Album>
      </AlbumSection>
   </ProfileGroup>
);

const Description = ({
   children,
   label,
}) => (
   <Paragraph>
      <Text type="normal">{label}: </Text>
      <Text>{children}</Text>
   </Paragraph>
);

Profile.propTypes = {
   children: PropTypes.any,
   onCloseClick: PropTypes.any,
   onEdit: PropTypes.any,
   showCloseIcon: PropTypes.bool,
   showEdit: PropTypes.any,
   status: PropTypes.any,
};

Profile.defaultProps = {
   showCloseIcon: true,
};
