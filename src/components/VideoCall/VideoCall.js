import { Avatar } from "components/Avatar/Avatar";
import { Icon } from "components/Icon/Icon";
import { Paragraph } from "components/Paragraph/Paragraph";
import {
   Action,
   Actions,
   Minimize,
   Self,
   VideoCallAlert,
   VideoCallGroup,
} from "components/VideoCall/VideoCall.Style";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { ReactComponent as CompressIcon } from "resources/icon/compress.svg";
import { ReactComponent as PhoneSlashIcon } from "resources/icon/phoneslash.svg";
import { ReactComponent as VideoIcon } from "resources/icon/video.svg";
import { ReactComponent as VoiceIcon } from "resources/icon/voice.svg";
import { ReactComponent as VolumeMuteIcon } from "resources/icon/volumemute.svg";
import Avatar004 from "resources/images/avatar004.png";
import Avatar005 from "resources/images/avatar005.png";
import VideoCallImage from "resources/images/videocall.png";

import theme from "theme";

export function VideoCall({children, onHangOffClicked, ...rest}) {
   const [fullScreen, setFullScreen] = useState(true);
   if ( !fullScreen ) {
      return (
         <VideoCallAlert onClick={() => setFullScreen(true)}>
            <Avatar src={Avatar004} size={69}/>
            <Paragraph size={"eighteen"}>正在跟 实视 进行视频通话</Paragraph>
            <Paragraph type={"normal"}>点击切换全屏</Paragraph>
            <Icon icon={VideoIcon} width={"36px"} height={"20px"}/>
         </VideoCallAlert>
      );
   }
   
   return (
      <VideoCallGroup src={VideoCallImage} {...rest}>
         <Minimize shape={"rect"} onClick={() => setFullScreen(false)}>
            <Icon icon={CompressIcon} color={theme.whiteColor}/>
         </Minimize>
         <Actions>
            <Action>
               <Icon icon={VoiceIcon} color={theme.whiteColor}/>
            </Action>
            <Action backgroundColor={theme.redColor}>
               <Icon icon={PhoneSlashIcon} color={theme.whiteColor} onClick={onHangOffClicked}/>
            </Action>
            <Action>
               <Icon icon={VolumeMuteIcon} color={theme.whiteColor}/>
            </Action>
         </Actions>
         <Self src={Avatar005} size={99}/>
      </VideoCallGroup>
   );
}

VideoCall.propTypes = {
   children: PropTypes.any,
};

VideoCall.defaultProps = {};