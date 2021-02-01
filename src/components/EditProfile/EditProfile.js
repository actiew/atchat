import React, { useState } from "react";
import { Avatar } from "src/components/Avatar/Avatar";
import { Button } from "src/components/Button/Button";

import {
   ButtonGroups,
   EditProfileGroup,
   InformationGroup,
   SelectGroups,
   TitleGroup,
} from "src/components/EditProfile/EditProfile.Style";
import { InputText } from "src/components/Input/InputText/InputText";
import { LabelContainer } from "src/components/LabelContainer/LabelContainer";
import { Option } from "src/components/Option/Option";
import { Profile } from "src/components/Profile/Profile";
import { Radio, Radios } from "src/components/Radio/Radio";
import { Select } from "src/components/Select/Select";

import Avatar005 from "src/resources/images/avatar005.png";
import { redColor, sixteen } from "src/theme/theme";


export function EditProfile ({
   ...rest
}) {
   const [showEdit, setShowEdit] = useState(false);
   if (!showEdit) {
      return <Profile
         onEdit={() => setShowEdit(true)}
         showEdit
         showCloseIcon={false}
      />;
   }

   return (
      <EditProfileGroup{...rest}>
         <Avatar
            src={Avatar005}
            size={160}
         />
         <InformationGroup>
            <TitleGroup>基本信息</TitleGroup>
            <InputText
               label="昵 称"
               placeholder="昵 称"
            />
            <Radios label="性 别">
               <Radio name="gender">男</Radio>
               <Radio name="gender">女</Radio>
            </Radios>
            <LabelContainer label="地 区">
               <SelectGroups>
                  <Select type="form">
                     <Option>省 份</Option>
                  </Select>
                  <Select type="form">
                     <Option>城 市</Option>
                  </Select>
                  <Select type="form">
                     <Option>区 县</Option>
                  </Select>
               </SelectGroups>
            </LabelContainer>
            <InputText
               label="签 名"
               placeholder="签 名"
            />

            <TitleGroup>联系信息</TitleGroup>
            <InputText
               label="电 话"
               placeholder="电 话"
            />
            <InputText
               label="邮 箱"
               placeholder="邮 箱"
            />
            <InputText
               label="网 站"
               placeholder="网 站"
            />

            <TitleGroup>社交信息</TitleGroup>
            <InputText
               label="钉 钉"
               placeholder="钉 钉"
            />
            <InputText
               label="飞 书"
               placeholder="飞 书"
            />
            <InputText
               label="QQ"
               placeholder="QQ"
            />
         </InformationGroup>
         <ButtonGroups>
            <Button
               shape="rect"
               width="66px"
               height="36px"
               backgroundColor={redColor}
               fontSize={sixteen}
               onClick={() => setShowEdit(false)}
            >
               取 消
            </Button>
            <Button
               shape="rect"
               width="66px"
               height="36px"
               fontSize={sixteen}
               onClick={() => setShowEdit(false)}
            >
               保 存
            </Button>
         </ButtonGroups>
      </EditProfileGroup>
   );
}

EditProfile.propTypes = {};

EditProfile.defaultProps = {};
