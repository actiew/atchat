import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "src/components/Avatar/Avatar";
import { ContactCardGroup, Intro, Name } from "src/components/ContactCard/ContactCard.Style";


export const ContactCard = ({
   contact,
   ...rest
}) => (
   <ContactCardGroup {...rest}>
      <Avatar
         src={`/static/images/${contact.avatar}`}
         status={contact.status}
      />
      <Name>{contact.name}</Name>
      <Intro>{contact.intro}</Intro>
   </ContactCardGroup>
);

ContactCard.propTypes = {
   contact: PropTypes.string,
};

ContactCard.defaultProps = {};
