import { Button } from "components/Button/Button";

import { ActionOptions, Filter, FilterOptions } from "components/Filter/Filter";
import { FilterList } from "components/FilterList/FilterList";
import { Icon } from "components/Icon/Icon";
import { MessageCard } from "components/MessageCard/MessageCard";
import { ChatList, MessageListGroup } from "components/MessageList/MessageList.Style";
import { Option } from "components/Option/Option";
import { Select } from "components/Select/Select";

import messageData from "data/messages";

import useStaggeredList from "hooks/useStaggered";
import PropTypes from "prop-types";
import React from "react";
import { animated } from "react-spring";

import { ReactComponent as Plus } from "resources/icon/plus.svg";

export function MessageList({...rest}) {
   const trailAnimes = useStaggeredList(9);
   
   return (
      <MessageListGroup {...rest}>
         <FilterList
            filterLabel={"列表排序"}
            options={["最新消息", "在线好友"]}
            actionLabel={"创建会话"}
         >
            <ChatList>
               {messageData.map((message, index) => (
                  <animated.div key={index + message.id} style={trailAnimes[index]}>
                     <MessageCard
                        key={message.id}
                        active={index === 1}
                        replied={message.replied}
                        avatarSrc={message.avatarSrc}
                        name={message.name}
                        avatarStatus={message.status}
                        time={message.time}
                        message={message.statusText}
                        unreadCount={message.unreadCount}
                     />
                  </animated.div>
               ))}
            </ChatList>
         </FilterList>
      </MessageListGroup>
   );
}

export const ChatFilter = () => (
   <Filter style={{padding: "20px 0"}}>
      <FilterOptions label={"列表排序"}>
         <Select>
            <Option>最新消息</Option>
            <Option>在线好友</Option>
         </Select>
      </FilterOptions>
      <ActionOptions label={"创建会话"}>
         <Button>
            <Icon icon={Plus} width={"12px"} height={"12px"} color="#FFF"/>
         </Button>
      </ActionOptions>
   </Filter>
);

MessageList.propTypes = {
   children: PropTypes.any,
};

MessageList.defaultProps = {};