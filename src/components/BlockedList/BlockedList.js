import {
   BlockedAvatar,
   BlockedListGroup,
   BlockedName,
   CloseableAvatar,
   CloseButton,
   FriendList,
   SettingMenu,
} from "components/BlockedList/BlockedList.Style";
import { Icon } from "components/Icon/Icon";
import { Text } from "components/Text/Text";

import blockedData from "data/blocked";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";

import { ReactComponent as Arrow_Left } from "resources/icon/arrow-left.svg";
import { ReactComponent as Close } from "resources/icon/close.svg";

import theme from "theme";

export function BlockedList({children, ...rest}) {
   const history = useHistory();
   
   return (
      <BlockedListGroup {...rest}>
         <SettingMenu onClick={() => history.goBack()}>
            <Icon icon={Arrow_Left} height={"18px"} css={`cursor: pointer`}/>
            <Text size={"twentyTwo"}>屏蔽好友列表</Text>
         </SettingMenu>
         <FriendList>
            {blockedData.map((blocked, item) => {
               return (
                  <CloseableAvatar key={item + blocked.id}>
                     <BlockedAvatar src={blocked.avatar} size={99}/>
                     <CloseButton shape={"circle"} width={"24px"} height={"24px"}
                                  backgroundColor={theme.redColor}
                     >
                        <Icon icon={Close} color={theme.whiteColor}/>
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