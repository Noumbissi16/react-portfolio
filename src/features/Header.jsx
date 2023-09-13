import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagEnImg from "@/assets/images/flag-en.png";
import flagFrImg from "@/assets/images/flag-fr.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation("home");

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };
  return (
    <Flex justify="space-between">
      <Image src={logoImg} h={10} />
      <HStack spacing={3}>
        <Image src={bubbleImg} h={10} />
        <Link
          href="mailto:noumbissistael@gmail.com?subject=Contacting you from your portfolio"
          fontSize="lg"
          fontWeight={"bold"}
          isExternal="true"
        >
          {t("hireMe")}
        </Link>
        <Image
          onClick={switchLanguage}
          pl={20}
          src={i18n.language === "en" ? flagEnImg : flagFrImg}
          h={8}
          cursor="pointer"
        />
      </HStack>
    </Flex>
  );
}

export default Header;
