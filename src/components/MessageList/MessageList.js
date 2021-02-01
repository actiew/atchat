import React from "react";
import { animated } from "react-spring";
import { Button } from "src/components/Button/Button";

import { ActionOptions, Filter, FilterOptions } from "src/components/Filter/Filter";
import { FilterList } from "src/components/FilterList/FilterList";
import { Icon } from "src/components/Icon/Icon";
import { MessageCard } from "src/components/MessageCard/MessageCard";
import { ChatList, MessageListGroup } from "src/components/MessageList/MessageList.Style";
import { Option } from "src/components/Option/Option";
import { Select } from "src/components/Select/Select";

import useStaggeredList from "src/hooks/useStaggered";

import { ReactComponent as Plus } from "src/resources/icon/plus.svg";
import { useData } from "src/utils/mixins";


export function MessageList ({ ...rest }) {
   const trailAnimes = useStaggeredList(9);

   const messages = useData("messages");

   return (
      <MessageListGroup {...rest}>
         <FilterList
            filterLabel="列表排序"
            options={["最新消息", "在线好友"]}
            actionLabel="创建会话"
         />
         <ChatList>
            {messages.map((message, index) => (
               <animated.div
                  key={index + message.id}
                  style={trailAnimes[index]}
               >
                  <MessageCard
                     key={message.id}
                     active={index === 1}
                     replied={message.replied}
                     avatarSrc={`/static/images/${message.avatarSrc}`}
                     name={message.name}
                     avatarStatus={message.status}
                     time={message.time}
                     message={message.message}
                     unreadCount={message.unreadCount}
                  />
               </animated.div>
            ))}
         </ChatList>
      </MessageListGroup>
   );
}

export const ChatFilter = () => (
   <Filter style={{ padding: "20px 0" }}>
      <FilterOptions label="列表排序">
         <Select>
            <Option>最新消息</Option>
            <Option>在线好友</Option>
         </Select>
      </FilterOptions>
      <ActionOptions label="创建会话">
         <Button>
            <Icon
               icon={Plus}
               width="12px"
               height="12px"
               color="#FFFFFF"
            />
         </Button>
      </ActionOptions>
   </Filter>
);

MessageList.propTypes = {};

MessageList.defaultProps = {};
