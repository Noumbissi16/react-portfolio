import { Flex, Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function BadgeComponent({ bg, children }) {
  return (
    <Flex justify={"center"}>
      <Heading
        minWidth={100}
        textAlign={"center"}
        size={"sm"}
        bg={bg}
        color={"white"}
        borderRadius={3}
        p={3}
      >
        {children}
      </Heading>
    </Flex>
  );
}

export default BadgeComponent;
