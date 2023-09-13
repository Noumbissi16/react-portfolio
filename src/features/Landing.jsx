import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import BadgeComponent from "@/components/Badge";
const SKILLS = [
  { label: "React" },
  { label: "Redux" },
  { label: "NodeJs" },
  { label: "MongoDB" },
  { label: "Firebase" },
];

function Landing() {
  const { t } = useTranslation("home");

  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "5xl", md: "6xl", xl: "7xl" }}
        color={"secondary"}
        whiteSpace="pre-line"
      >
        {t("greetings")}
        <Box as="span" color="primary.dark">
          .
        </Box>
      </Heading>
      <Text fontSize="large" color="secondary">
        {t("iAm")}
        <Text fontWeight={"bold"} as="span">
          {" "}
          {t("job")}
        </Text>
        <br /> {t("location")}
      </Text>
      <Wrap mt={"10"}>
        {SKILLS.map((skill) => (
          // eslint-disable-next-line react/jsx-key
          <WrapItem key={skill.label}>
            <BadgeComponent bg={skill.label}>{skill.label}</BadgeComponent>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );

  const badgeExperience = (
    <Badge bg="primary.light" borderRadius={7} padding={3} textAlign="center">
      <Text fontSize={"xl"}>{new Date().getFullYear() - 2021}</Text>
      <Text>{t("yearsExp")}</Text>
    </Badge>
  );

  const rightSection = (
    <Box mt={{ base: 8, md: 0 }}>
      <Flex justify={"flex-end"}> {badgeExperience}</Flex>
      <Image src={humanImg} w={{ base: 235, md: 300, xl: 400 }} />
    </Box>
  );

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent={"space-evenly"}
      mt={{ base: 50, md: 100 }}
      alignItems={{ base: "center", md: "flex-start" }}
    >
      {leftSection}
      {rightSection}
    </Stack>
  );
}

export default Landing;
