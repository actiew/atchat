import { BlockedList } from "components/BlockedList/BlockedList";
import { ChatAppGroup, Content, Drawer, Nav, Sidebar } from "components/ChatApp/ChatApp.Style";
import { ContactList } from "components/ContactList/ContactList";
import { Conversation } from "components/Conversation/Conversation";
import { EditProfile } from "components/EditProfile/EditProfile";
import { FileList } from "components/FileList/FileList";
import { MessageList } from "components/MessageList/MessageList";
import { Navigation } from "components/Navigation/Navigation";
import { NoteList } from "components/NoteList/NoteList";
import { Profile } from "components/Profile/Profile";
import { Setting } from "components/Setting/Setting";
import { VideoCall } from "components/VideoCall/VideoCall";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { MoreList } from "../MoreList/MoreList";

export function ChatApp ({children, ...rest}) {
   const [showDrawer, setShowDrawer] = useState(false);
   const [videoCalling, setVideoCalling] = useState(false);
   let location = useLocation();
   let getFirstSgmtPath = (location) => location.pathname.split("/")[3];
   let transitions = useTransition(location, getFirstSgmtPath, {
      from: {opacity: 0, transform: "translate3d(-100px, 0, 0)"},
      enter: {opacity: 1, transform: "translate3d(0, 0, 0)"},
      leave: {opacity: 0, transform: "translate3d(-100px, 0, 1)"},
   });
   
   return (
      <ChatAppGroup {...rest}>
         <Nav>
            <Navigation/>
         </Nav>
         <Sidebar>
            {transitions.map(({item: location, props, key}) => (
               <animated.div key={key} style={props}>
                  <Switch location={location}>
                     <Route exact path="/">
                        <MessageList/>
                     </Route>
                     <Route exact path="/contact">
                        <ContactList/>
                     </Route>
                     <Route exact path="/file">
                        <FileList/>
                     </Route>
                     <Route exact path="/note">
                        <NoteList/>
                     </Route>
                     <Route exact path="/more">
                        <MoreList/>
                     </Route>
                     <Route path="/setting">
                        <EditProfile/>
                     </Route>
                  </Switch>
               </animated.div>
            ))}
         </Sidebar>
         <Content>
            {videoCalling && <VideoCall onHangOffClicked={() => setVideoCalling(false)}/>}
            <Switch>
               <Route exact path={"/setting"}>
                  <Setting/>
               </Route>
               <Route exact path={"/setting/blocked"}>
                  <BlockedList/>
               </Route>
               <Route path={"/"}>
                  <Conversation
                     onAvatarClick={() => setShowDrawer(true)}
                     onVideoClicked={() => setVideoCalling(true)}
                  />
               </Route>
            </Switch>
         </Content>
         <Drawer show={showDrawer}>
            <Profile onCloseClick={() => setShowDrawer(false)}/>
         </Drawer>
      </ChatAppGroup>
   );
}

ChatApp.propTypes = {
   children: PropTypes.any,
};

ChatApp.defaultProps = {};