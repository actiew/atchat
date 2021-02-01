import PropTypes from "prop-types";
import React from "react";
import {
   NoteCardGroup,
   NoteExcerpt,
   NoteImage,
   NotePublishTime,
   NoteTitle,
} from "src/components/NoteCard/NoteCard.Style";


export const NoteCard = ({
   note,
   ...rest
}) => (
   <NoteCardGroup {...rest}>
      <NoteImage src={`/static/images/${note.image}`}/>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteExcerpt>{note.excerpt}</NoteExcerpt>
      <NotePublishTime>{note.publishedAt}</NotePublishTime>
   </NoteCardGroup>
);

NoteCard.propTypes = {
   note: PropTypes.any,
};

NoteCard.defaultProps = {};
