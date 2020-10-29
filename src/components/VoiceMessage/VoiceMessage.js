import { Button } from "components/Button/Button";
import { Icon } from "components/Icon/Icon";
import { Text } from "components/Text/Text";
import { VoiceMessageGroup } from "components/VoiceMessage/VoiceMessage.Style";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as PlayIcon } from "resources/icon/play.svg";
import { ReactComponent as WaveIcon } from "resources/icon/wave.svg";

export const VoiceMessage = ({children, type, time, ...rest}) => (
   <VoiceMessageGroup type={type} {...rest}>
      <Button width={"100%"} height={"40px"} shape={"rect"}>
         <Icon icon={PlayIcon} color={({theme}) => theme.primaryColor} height={"32px"}/>
         <Icon icon={WaveIcon} color={({theme}) => theme.primaryColor} width={"100%"}
               height={"32px"}
         />
         <Text bold>{time}</Text>
      </Button>
   </VoiceMessageGroup>);

VoiceMessage.propTypes = {
   children: PropTypes.any,
   type: PropTypes.oneOf(["mine"]),
   time: PropTypes.string,
};

VoiceMessage.defaultProps = {};