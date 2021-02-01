import PropTypes from "prop-types";
import React, { useState } from "react";
import { Avatar } from "src/components/Avatar/Avatar";
import { Icon } from "src/components/Icon/Icon";
import { Paragraph } from "src/components/Paragraph/Paragraph";
import {
   Action,
   Actions,
   Minimize,
   Self,
   VideoCallAlert,
   VideoCallGroup,
} from "src/components/VideoCall/VideoCall.Style";

import { ReactComponent as CompressIcon } from "src/resources/icon/compress.svg";
import { ReactComponent as PhoneSlashIcon } from "src/resources/icon/phoneslash.svg";
import { ReactComponent as VideoIcon } from "src/resources/icon/video.svg";
import { ReactComponent as VoiceIcon } from "src/resources/icon/voice.svg";
import { ReactComponent as VolumeMuteIcon } from "src/resources/icon/volumemute.svg";
import Avatar002 from "src/resources/images/avatar002.png";
import VideoCallImage from "src/resources/images/videocall.png";

import { redColor, whitestColor } from "src/theme/theme";


export function VideoCall ({
   onHangOffClicked,
   ...rest
}) {
   const [fullScreen, setFullScreen] = useState(true);
   if (!fullScreen) {
      return (
         <VideoCallAlert onClick={() => setFullScreen(true)}>
            <Avatar
               src={Avatar002}
               size={69}
            />
            <Paragraph size="eighteen">正在跟 实视 进行视频通话</Paragraph>
            <Paragraph type="normal">点击切换全屏</Paragraph>
            <Icon
               icon={VideoIcon}
               width="36px"
               height="20px"
            />
         </VideoCallAlert>
      );
   }

   return (
      <VideoCallGroup src={VideoCallImage} {...rest}>
         <Minimize
            shape="rect"
            onClick={() => setFullScreen(false)}
         >
            <Icon
               icon={CompressIcon}
               color={whitestColor}
            />
         </Minimize>
         <Actions>
            <Action>
               <Icon
                  icon={VoiceIcon}
                  color={whitestColor}
               />
            </Action>
            <Action backgroundColor={redColor}>
               <Icon
                  icon={PhoneSlashIcon}
                  color={whitestColor}
                  onClick={onHangOffClicked}
               />
            </Action>
            <Action>
               <Icon
                  icon={VolumeMuteIcon}
                  color={whitestColor}
               />
            </Action>
         </Actions>
         <Self
            src={Avatar002}
            size={99}
         />
      </VideoCallGroup>
   );
}

VideoCall.propTypes = {
   onHangOffClicked: PropTypes.any,
};
