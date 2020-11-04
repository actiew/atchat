import { Avatar } from "components/Avatar/Avatar";
import { Button } from "components/Button/Button";

import {
   ButtonGroups,
   EditProfileGroup,
   InformationGroup,
   SelectGroups,
   TitleGroup,
} from "components/EditProfile/EditProfile.Style";
import { InputText } from "components/Input/InputText/InputText";
import { LabelContainer } from "components/LabelContainer/LabelContainer";
import { Option } from "components/Option/Option";
import { Profile } from "components/Profile/Profile";
import { Radio, Radios } from "components/Radio/Radio";
import { Select } from "components/Select/Select";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Avatar005 from "resources/images/avatar005.png";
import theme from "theme";

export function EditProfile({children, ...rest}) {
   const [showEdit, setShowEdit] = useState(false);
   if ( !showEdit ) {
      return <Profile
         onEdit={() => setShowEdit(true)}
         showEdit
         showCloseIcon={false}
      />;
   }
   
   return (
      <EditProfileGroup{...rest}>
         <Avatar src={Avatar005} size={160}/>
         <InformationGroup>
            <TitleGroup>基本信息</TitleGroup>
            <InputText label={"昵 称"} placeholder={"昵 称"}/>
            <Radios label={"性 别"}>
               <Radio name={"gender"}>男</Radio>
               <Radio name={"gender"}>女</Radio>
            </Radios>
            <LabelContainer label={"地 区"}>
               <SelectGroups>
                  <Select type={"form"}>
                     <Option>省 份</Option>
                  </Select>
                  <Select type={"form"}>
                     <Option>城 市</Option>
                  </Select>
                  <Select type={"form"}>
                     <Option>区 县</Option>
                  </Select>
               </SelectGroups>
            </LabelContainer>
            <InputText label={"签 名"} placeholder={"签 名"}/>
   
            <TitleGroup>联系信息</TitleGroup>
            <InputText label={"电 话"} placeholder={"电 话"}/>
            <InputText label={"邮 箱"} placeholder={"邮 箱"}/>
            <InputText label={"网 站"} placeholder={"网 站"}/>
   
            <TitleGroup>社交信息</TitleGroup>
            <InputText label={"钉钉"} placeholder={"钉 钉"}/>
            <InputText label={"飞书"} placeholder={"飞 书"}/>
            <InputText label={"QQ"} placeholder={"QQ"}/>
         </InformationGroup>
         <ButtonGroups>
            <Button
               shape={"rect"}
               width={"66px"}
               height={"36px"}
               backgroundColor={theme.redColor}
               fontSize={theme.sixteen}
               onClick={() => setShowEdit(false)}
            >
               取 消
            </Button>
            <Button
               shape={"rect"}
               width={"66px"}
               height={"36px"}
               fontSize={theme.sixteen}
               onClick={() => setShowEdit(false)}
            >
               保 存
            </Button>
         </ButtonGroups>
      </EditProfileGroup>
   );
}

EditProfile.propTypes = {
   children: PropTypes.any,
};

EditProfile.defaultProps = {};