import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";
import {
   BlockedAvatar,
   BlockedListGroup,
   BlockedName,
   CloseableAvatar,
   CloseButton,
   FriendList,
   SettingMenu,
} from "src/components/BlockedList/BlockedList.Style";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

import { ReactComponent as Arrow_Left } from "src/resources/icon/arrow-left.svg";
import { ReactComponent as Close } from "src/resources/icon/close.svg";

import { redColor, whitestColor } from "src/theme/theme";
import { useData } from "../../utils/mixins";


export function BlockedList ({
   children,
   ...rest
}) {
   const history = useHistory();

   const blockeds = useData("blockeds");

   return (
      <BlockedListGroup {...rest}>
         <SettingMenu onClick={() => history.goBack()}>
            <Icon
               icon={Arrow_Left}
               height="18px"
               css={`cursor: pointer`}
            />
            <Text size={"twentyTwo"}>屏蔽好友列表</Text>
         </SettingMenu>
         <FriendList>
            {blockeds.map((blocked, item) => {
               return (
                  <CloseableAvatar key={item + blocked.id}>
                     <BlockedAvatar
                        src={`/static/images/${blocked.avatar}`}
                        size={99}
                     />
                     <CloseButton
                        shape="circle"
                        width="24px"
                        height="24px"
                        backgroundColor={redColor}
                     >
                        <Icon
                           icon={Close}
                           color={whitestColor}
                        />
                     </CloseButton>
                     <BlockedName>{blocked.name}</BlockedName>
                  </CloseableAvatar>
               );
            })}
         </FriendList>
      </BlockedListGroup>
   );
}

BlockedList.propTypes = {
   children: PropTypes.any,
};

BlockedList.defaultProps = {};
