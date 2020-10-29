import { TextGroup } from "components/Text/Text.Style";
import styled, { css } from "styled-components";

export const ParagraphGroup = styled(TextGroup)`
   margin: 0;
   ${({ellipsis}) => ellipsis
   && css`
         text-overflow: ellipsis;
         white-space: nowrap;
         overflow: hidden;
      `
};
`;