import styled from "styled-components";
import { Typography } from "@material-ui/core";

export default function StepLetter({ children }) {
  return (
    <StyledTypographyStepLetter variant="subtitle1">
      {children}
    </StyledTypographyStepLetter>
  );
}

const StyledTypographyStepLetter = styled(Typography)`
  color: #8e8e8e !important;
  margin: 20px 0px !important;
`;
