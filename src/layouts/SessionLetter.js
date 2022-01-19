import styled from "styled-components";
import { Typography } from "@material-ui/core";

export default function SessionLetter({ children }) {
  return (
    <StyledTypographySessionLetter variant="h4">
      {children}
    </StyledTypographySessionLetter>
  );
}

const StyledTypographySessionLetter = styled(Typography)`
  margin-bottom: 20px !important;
`;
