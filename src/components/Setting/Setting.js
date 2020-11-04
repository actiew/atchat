import { Heading } from "components/Heading/Heading";
import { Icon } from "components/Icon/Icon";
import { Paragraph } from "components/Paragraph/Paragraph";
import { Seperator } from "components/Seperator/Seperator";
import {
   SettingGroup,
   SettingGroups,
   SettingItemControl,
} from "components/Setting/Setting.Style";
import { Switch } from "components/Switch/Switch";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import { ReactComponent as Arrow_Right } from "resources/icon/arrow-right.svg";

export function Setting({children, type, label, description, ...rest}) {
   const animeProps = useSpring({
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      from: {
         opacity: 0,
         transform: "translate3d(0, 900px, 0)",
      },
      config: {tension: 140},
      delay: 300,
   });
   
   return (
      <SettingGroup {...rest}>
         <animated.div style={animeProps}>
            <Heading level={2}>设 置</Heading>
            <Settinggroup groupName={"通知设置"}>
               <SettingItem label={"新的消息通知"} type={"switch"} checked/>
               <SettingItem label={"语音消息通知"} type={"switch"}/>
               <SettingItem label={"视频电话通知"} type={"switch"}/>
               <SettingItem label={"显示通知内容"} type={"switch"}/>
               <SettingItem label={"消息通知声音"} type={"switch"}/>
               <Link to={"/setting/blocked"}>
                  <SettingItem label={"查看屏蔽好友"} type={"menu"}/>
               </Link>
            </Settinggroup>
            <Settinggroup groupName={"隐私设置"}>
               <SettingItem label={"添加好友需验证"} type={"switch"}/>
               <SettingItem
                  label={"推荐通讯录好友"}
                  description={"上传通讯录只用匹配好友列表，不会与其他机构共享您的信息"}
                  type={"switch"}
               />
               <SettingItem label={"只通过手机号找到我"} type={"switch"}/>
            </Settinggroup>
         </animated.div>
      </SettingGroup>
   );
}

export const Settinggroup = ({groupName, children, ...rest}) => (
   <SettingGroups {...rest}>
      <Paragraph size={"twenty"} style={{paddingBottom: "24px"}}>
         {groupName}
      </Paragraph>
      {children}
   </SettingGroups>
);

export const SettingItem = ({type, label, description}) => (
   <>
      <SettingItemControl>
         <Paragraph size={"eighteen"}>{label}</Paragraph>
         {type === "switch" && <Switch/>}
         {type === "menu" && <Icon icon={Arrow_Right} height={"18px"}/>}
      </SettingItemControl>
      {description && (
         <Paragraph type={"normal"} style={{margin: "4px 0"}}>
               {description}
            </Paragraph>)}
      <Seperator style={{margin: "8px 0 20px"}}/>
   </>
);

Setting.propTypes = {
   children: PropTypes.any,
};

Setting.defaultProps = {
   type: "switch",
};