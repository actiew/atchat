import { Avatar } from "components/Avatar/Avatar";
import { ContactCardGroup, Intro, Name } from "components/ContactCard/ContactCard.Style";
import PropTypes from "prop-types";
import React from "react";

export const ContactCard = ({children, contact, ...rest}) => (
   <ContactCardGroup {...rest}>
      <Avatar src={contact.avatar} status={contact.status}/>
      <Name>{contact.name}</Name>
      <Intro>{contact.intro}</Intro>
   </ContactCardGroup>
);

ContactCard.propTypes = {
   children: PropTypes.any,
};

ContactCard.defaultProps = {};