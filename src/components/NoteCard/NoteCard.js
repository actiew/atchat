import {
   NoteCardGroup,
   NoteExcerpt,
   NoteImage,
   NotePublishTime,
   NoteTitle,
} from "components/NoteCard/NoteCard.Style";
import PropTypes from "prop-types";
import React from "react";

export const NoteCard = ({children, note, ...rest}) => (
   <NoteCardGroup {...rest}>
      <NoteImage src={note.image}/>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteExcerpt>{note.excerpt}</NoteExcerpt>
      <NotePublishTime>{note.publishedAt}</NotePublishTime>
   </NoteCardGroup>
);

NoteCard.propTypes = {
   children: PropTypes.any,
};

NoteCard.defaultProps = {};