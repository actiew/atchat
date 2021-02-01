import React from "react";
import { animated } from "react-spring";
import { ContactCard } from "src/components/ContactCard/ContactCard";
import { ContactListGroup, Contacts } from "src/components/ContactList/ContactList.Style";
import { FilterList } from "src/components/FilterList/FilterList";

import useStaggeredList from "src/hooks/useStaggered";
import { useData } from "src/utils/mixins";


export function ContactList ({
   ...rest
}) {
   const trailAnimes = useStaggeredList(12);

   const contacts = useData("contacts");

   return (
      <ContactListGroup {...rest}>
         <FilterList
            options={["最新添加", "昵称优先"]}
            filterLabel={"列表排序"}
            actionLabel={"添加好友"}
         />
         <Contacts>
            {contacts.map((contact, item) => (
               <animated.div
                  key={item + contact.id}
                  style={trailAnimes[item]}
               >
                  <ContactCard
                     key={contact.id}
                     contact={contact}
                  />
               </animated.div>
            ))}
         </Contacts>
      </ContactListGroup>
   );
}

ContactList.propTypes = {};

ContactList.defaultProps = {};
