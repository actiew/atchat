import PropTypes from "prop-types";
import React from "react";
import { Button } from "src/components/Button/Button";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";
import { VoiceMessageGroup } from "src/components/VoiceMessage/VoiceMessage.Style";

import { ReactComponent as PlayIcon } from "src/resources/icon/play.svg";
import { ReactComponent as WaveIcon } from "src/resources/icon/wave.svg";


export const VoiceMessage = ({
   type,
   time,
   ...rest
}) => (
   <VoiceMessageGroup type={type} {...rest}>
      <Button
         width={"100%"}
         height={"40px"}
         shape={"rect"}
      >
         <Icon
            icon={PlayIcon}
            color={({ theme }) => theme.primaryColor}
            height={"32px"}
         />
         <Icon
            icon={WaveIcon}
            color={({ theme }) => theme.primaryColor}
            width={"100%"}
            height={"32px"}
         />
         <Text bold>{time}</Text>
      </Button>
   </VoiceMessageGroup>);

VoiceMessage.propTypes = {
   time: PropTypes.string,
   type: PropTypes.oneOf(["mine"]),
};

VoiceMessage.defaultProps = {};
