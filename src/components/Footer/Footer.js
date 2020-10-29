import { Button } from "components/Button/Button";
import { Emoji } from "components/Emoji/Emoji";
import {
   FooterGroup,
   PopoverContainer,
   SuffixIconContainer,
} from "components/Footer/Footer.Style";
import { Icon } from "components/Icon/Icon";
import { Input } from "components/Input/Input";
import { Popover } from "components/Popover/Popover";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { ReactComponent as DotIcon } from "resources/icon/dot.svg";
import { ReactComponent as FullSmileIcon } from "resources/icon/fullsmile.svg";

import { ReactComponent as LinkIcon } from "resources/icon/link.svg";
import { ReactComponent as SendIcon } from "resources/icon/send.svg";
import { ReactComponent as SmileIcon } from "resources/icon/smile.svg";
import { ReactComponent as VoiceIcon } from "resources/icon/voice.svg";

import { useTheme } from "styled-components";

export function Footer({children, animesProps, style, ...rest}) {
   const [emojiIconActive, seEmojiIconAction] = useState(false);
   const theme = useTheme();
   
   return (
      <FooterGroup style={{...animesProps, ...style}} {...rest}>
         <Input
            placeholder="输进会话内容"
            prefix={<Icon icon={LinkIcon} color={"#000"} opacity={0.8}/>}
            suffix={
               <SuffixIconContainer>
                  <Popover
                     content={<PopoverContent/>}
                     offset={{x: "-30%", y: "8%"}}
                     onVisible={() => seEmojiIconAction(true)}
                     onHide={() => seEmojiIconAction(false)}
                  >
                     <Icon icon={emojiIconActive ? FullSmileIcon : SmileIcon}
                           color={theme.primaryColor} opacity={0.9}
                     />
                  </Popover>
                  <Icon icon={VoiceIcon} color={"#000"} opacity={0.8}/>
                  <Button shape={"rect"} width={"64px"} height={"40px"}>
                     <Icon icon={SendIcon} color={"#FFF"}/>
                  </Button>
               </SuffixIconContainer>
            }
         />
      </FooterGroup>
   );
}

export function PopoverContent() {
   return (
      <PopoverContainer>
         <Emoji label={"smile"}>😀</Emoji>
         <Emoji label={"smile"}>🤓</Emoji>
         <Emoji label={"smile"}>😄</Emoji>
         <Emoji label={"smile"}>😁</Emoji>
         <Emoji label={"smile"}>😆</Emoji>
         <Emoji label={"smile"}>😅</Emoji>
         <Emoji label={"smile"}>😂</Emoji>
         <Emoji label={"smile"}>🤣</Emoji>
         <Emoji label={"smile"}>😊</Emoji>
         <Emoji label={"smile"}>🥺</Emoji>
         <Icon icon={DotIcon} style={{marginLeft: "12px"}} opacity={0.8}/>
      </PopoverContainer>
   );
}

Footer.propTypes = {
   children: PropTypes.any,
};

Footer.defaultProps = {};