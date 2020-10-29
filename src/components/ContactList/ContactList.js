import { ContactCard } from "components/ContactCard/ContactCard";
import { ContactListGroup, Contacts } from "components/ContactList/ContactList.Style";
import { FilterList } from "components/FilterList/FilterList";

import contactData from "data/contacts";

import useStaggeredList from "hooks/useStaggered";
import PropTypes from "prop-types";
import React from "react";
import { animated } from "react-spring";

export function ContactList({children, ...rest}) {
   const trailAnimes = useStaggeredList(12);
   
   return (
      <ContactListGroup {...rest}>
         <FilterList
            options={["最新添加", "昵称优先"]}
            filterLabel={"列表排序"}
            actionLabel={"添加好友"}
         >
            <Contacts>
               {contactData.map((contact, item) => (
                  <animated.div key={item + contact.id} style={trailAnimes[item]}>
                     <ContactCard key={contact.id} contact={contact}/>
                  </animated.div>
               ))}
            </Contacts>
         </FilterList>
      </ContactListGroup>
   );
}

ContactList.propTypes = {
   children: PropTypes.any,
};

ContactList.defaultProps = {};