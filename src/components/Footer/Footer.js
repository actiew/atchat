import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button } from "src/components/Button/Button";
import { Emoji } from "src/components/Emoji/Emoji";
import {
   FooterGroup,
   PopoverContainer,
   SuffixIconContainer,
} from "src/components/Footer/Footer.Style";
import { Icon } from "src/components/Icon/Icon";
import { Input } from "src/components/Input/Input";
import { Popover } from "src/components/Popover/Popover";
import { ReactComponent as DotIcon } from "src/resources/icon/dot.svg";
import { ReactComponent as FullSmileIcon } from "src/resources/icon/fullsmile.svg";

import { ReactComponent as LinkIcon } from "src/resources/icon/link.svg";
import { ReactComponent as SendIcon } from "src/resources/icon/send.svg";
import { ReactComponent as SmileIcon } from "src/resources/icon/smile.svg";
import { ReactComponent as VoiceIcon } from "src/resources/icon/voice.svg";
import { mainColor } from "src/theme/theme";


export function Footer ({
   animesProps,
   style,
   ...rest
}) {
   const [emojiIconActive, seEmojiIconAction] = useState(false);

   return (
      <FooterGroup style={{ ...animesProps, ...style }} {...rest}>
         <Input
            placeholder="输进会话内容"
            prefix={<Icon
               icon={LinkIcon}
               color="#000000"
               opacity={0.8}
            />}
            suffix={
               <SuffixIconContainer>
                  <Popover
                     content={<PopoverContent/>}
                     offset={{
                        x: "-30%",
                        y: "8%",
                     }}
                     onVisible={() => seEmojiIconAction(true)}
                     onHide={() => seEmojiIconAction(false)}
                  >
                     <Icon
                        icon={emojiIconActive
                           ? FullSmileIcon
                           : SmileIcon}
                        color={mainColor}
                        opacity={0.9}
                     />
                  </Popover>
                  <Icon
                     icon={VoiceIcon}
                     color="#000000"
                     opacity={0.8}
                  />
                  <Button
                     shape="rect"
                     width="64px"
                     height="40px"
                  >
                     <Icon
                        icon={SendIcon}
                        color="#FFFFFF"
                     />
                  </Button>
               </SuffixIconContainer>
            }
         />
      </FooterGroup>
   );
}

export function PopoverContent () {
   return (
      <PopoverContainer>
         <Emoji label="smile">😀</Emoji>
         <Emoji label="smile">🤓</Emoji>
         <Emoji label="smile">😄</Emoji>
         <Emoji label="smile">😁</Emoji>
         <Emoji label="smile">😆</Emoji>
         <Emoji label="smile">😅</Emoji>
         <Emoji label="smile">😂</Emoji>
         <Emoji label="smile">🤣</Emoji>
         <Emoji label="smile">😊</Emoji>
         <Emoji label="smile">🥺</Emoji>
         <Icon
            icon={DotIcon}
            style={{ marginLeft: "12px" }}
            opacity={0.8}
         />
      </PopoverContainer>
   );
}

Footer.propTypes = {
   animesProps: PropTypes.any,
   style: PropTypes.any,
};

Footer.defaultProps = {};
