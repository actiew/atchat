import React from "react";

import { Paragraph } from "./Paragraph";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Paragraph",
   component: Paragraph,
};

export const Default = () => (<>
   <Paragraph>段落</Paragraph>
   <Paragraph>段落</Paragraph>
</>);

export const Ellipsis = () => (
   <Paragraph ellipsis>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, fugit quae. Ab
      accusantium amet aperiam asperiores assumenda corporis dignissimos dolore, doloribus eius
      exercitationem facere facilis id illum in ipsam labore libero magnam minus molestias natus
      nobis officia praesentium qui quidem quo reiciendis repellendus repudiandae rerum saepe
      sed tempore unde vero voluptatem! Aliquid quae, quidem. Alias aspernatur consequuntur
      delectus facilis hic, iste nam nesciunt odio quae rerum. Animi deleniti eaque illum
      repudiandae tempore velit! Aperiam minus nulla odio quos tenetur! Accusantium aspernatur,
      assumenda autem beatae commodi delectus dolorem doloremque ea eaque et in iusto omnis
      optio placeat quod recusandae totam.
   </Paragraph>
);
