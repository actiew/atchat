-- -
    to:
src / components / <%= name %> / <%= name %> . Story . js
    - --
        import React from "react";
import {<%= name %>} from "./<%= name %>";

//
eslint -disable -next -line import /
no
-anonymous -default -export
    export default {
        title:
        "组件/<%= name %>",
            component:
        <%= name %>,
    };

const Template = (args) => << %=
name %>{...args} / >;

export const Default = Template . bind({});
Default . args = {

};