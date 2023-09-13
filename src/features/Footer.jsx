import { HStack, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <HStack justify="center" h={75} bg={"secondary"}>
      <Link
        href="https://github.com/Noumbissi16?tab=repositories"
        isExternal={true}
      >
        <Icon as={BsGithub} w={8} h={8} color="white" />
      </Link>
    </HStack>
  );
}

export default Footer;
