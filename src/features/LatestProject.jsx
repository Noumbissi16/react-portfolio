import { ProjectsApi } from "@/api/projects";
import BadgeComponent from "@/components/Badge";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function LatestProject() {
  async function fetchAll() {
    const projectsResponse = await ProjectsApi.fetchAll();
    setProjects(projectsResponse);
  }
  useEffect(() => {
    fetchAll();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState();
  const { t, i18n } = useTranslation("home");
  function renderProject(project) {
    return (
      <WrapItem key={project.id} flexDir={"column"}>
        <ImageSlider
          imageList={project.images.map((image) => image.downloadURL)}
        />
        <Heading size={"md"} color={"secondary"} mt={3}>
          <Box
            display={"inline-block"}
            bg="primary.dark"
            w={25}
            h={1}
            mr={3}
            verticalAlign="middle"
          />
          {project.title}
        </Heading>
        <Text>{project.desc[i18n.language]}</Text>
        <Wrap mt={"2"} maxW={350}>
          {project.technologies.map((skill) => (
            // eslint-disable-next-line react/jsx-key
            <WrapItem key={skill}>
              <BadgeComponent bg={skill}>{skill}</BadgeComponent>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  }
  return (
    <Flex direction={"column"} width={"100%"} mt={"20"}>
      <Heading>{t("latestProjects")}</Heading>
      <Wrap mt={10} spacing={10}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
}

export default LatestProject;
