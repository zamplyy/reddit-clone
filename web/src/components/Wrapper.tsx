import React from "react";
import { Box } from "@chakra-ui/core";

interface wrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<wrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      mt={8}
      marginX="auto"
      maxW={variant == "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
