import { Box, Flex, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { ProjectsAPI } from "api/projects";
import { SkillBadges } from "./SkillBadges";
import { badgeColors } from "styles/badgeColor";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function LatestProjects() {
  const { t } = useTranslation("home");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const projectsResp = await ProjectsAPI.fetchAll();
      setProjects(projectsResp);
    })();
  }, []);

  const renderProject = (project) => {
    return (
      <WrapItem key={project.id}>
        <Box>
          <Image w={350} src={project.image[0].downloadURL} />
          <Heading size="md" color="secondary" mt={1} minH={50}>
            <Box
              display={"inline-block"}
              verticalAlign="middle"
              mr={3}
              bg="primary.strong"
              w={25}
              h={1}
            />
            {project.title}
          </Heading>
          <Box maxW={350}>
            <SkillBadges
              skills={project.technologies.map((technologie) => {
                return {
                  label: technologie,
                  bg: badgeColors[technologie],
                };
              })}
            />
          </Box>
        </Box>
      </WrapItem>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading color={"secondary"} size="2xl">
        {t("latestProjects")}
      </Heading>
      <Wrap mt={10} spacing={20} justify="space-between">
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
}
