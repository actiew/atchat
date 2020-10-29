import {
   ConversationGroup,
   Conversations,
   MineChatBubble,
   OtherChatBubble,
} from "components/Conversation/Conversation.Style";

import { Emoji } from "components/Emoji/Emoji";
import { Footer } from "components/Footer/Footer";
import { Title } from "components/Title/Title";
import { VoiceMessage } from "components/VoiceMessage/VoiceMessage";
import PropTypes from "prop-types";
import React from "react";
import { useSpring } from "react-spring";

export function Conversation({children, onAvatarClick, onVideoClicked, ...rest}) {
   const titleAnimeProps = useSpring({
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      from: {
         opacity: 0,
         transform: "translate3d(0, -98px, 0)",
      },
      delay: 300,
   });
   
   const conversationAnimeProps = useSpring({
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      from: {
         opacity: 0,
         transform: "translate3d(1100px, 0, 0)",
      },
      delay: 500,
   });
   
   const footerAnimeProps = useSpring({
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      from: {
         opacity: 0,
         transform: "translate3d(0, 77px, 0)",
      },
      delay: 700,
   });
   
   return (
      <ConversationGroup {...rest}>
         <Title
            onAvatarClick={onAvatarClick}
            onVideoClicked={onVideoClicked}
            animeProps={titleAnimeProps}
         />
         <Conversations style={conversationAnimeProps}>
            <OtherChatBubble time={"昨天 19:45"}>Hi, 忙什么呢？</OtherChatBubble>
            <MineChatBubble time={"昨天 19:46"}>Hello, 最近在加班改代码，怼产品、怼UI...</MineChatBubble>
            <OtherChatBubble time={"昨天 19:47"}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dignissimos distinctio fuga iste laudantium perferendis quae quod reprehenderit saepe vel? Culpa delectus ea incidunt nisi officiis provident repellendus similique, tempore. Eaque fugit incidunt suscipit ullam. A asperiores, atque aut consectetur corporis cupiditate dolorum ducimus error et illum incidunt laudantium porro provident quaerat quam, quas quia sapiente sequi veniam voluptatem! Autem consequuntur earum et, hic illo in maxime modi, molestiae neque perspiciatis quisquam quo repellat temporibus veritatis voluptatum! A culpa hic iste, quia quidem quisquam rem totam ut. Animi autem blanditiis dolorem excepturi expedita illum, quas sequi sunt voluptates voluptatibus!
            </OtherChatBubble>
            <MineChatBubble time={"昨天 19:48"}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur distinctio ducimus id labore maxime minima natus, odio pariatur praesentium quae ratione similique ullam! Alias aliquid, aperiam asperiores consequatur cum deserunt dignissimos distinctio dolor doloribus dolorum eveniet exercitationem id illo iste libero nam nihil nisi obcaecati odio porro provident quaerat quisquam quo recusandae reiciendis, repellendus repudiandae sapiente ullam vel velit vero vitae voluptate voluptatum! Assumenda aut delectus et facilis illo minima, nostrum rerum sed, sequi sint soluta suscipit ut, vero. Dolor harum ipsam laborum maxime nostrum sunt velit voluptatem. Delectus, nam quos! Debitis itaque minima, neque possimus quia voluptas!
            </MineChatBubble>
            <OtherChatBubble time={"昨天 19:49"}>
               <VoiceMessage time={"03:45"}/>
            </OtherChatBubble>
            <MineChatBubble time={"昨天 19:50"}>
               <VoiceMessage time={"03:45"} type={"mine"}/>
            </MineChatBubble>
            <MineChatBubble time={"昨天 19:51"}>
               明天约王者荣耀<Emoji label={"ok"}>👌🏻</Emoji>
            </MineChatBubble>
         </Conversations>
         <Footer animesProps={footerAnimeProps}/>
      </ConversationGroup>
   );
}

Conversation.propTypes = {
   children: PropTypes.any,
};

Conversation.defaultProps = {};