import React from "react";

import { Emoji } from "./Emoji";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Emoji",
   component: Emoji,
};

export const Default = () => (
   <>
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
   </>
);
