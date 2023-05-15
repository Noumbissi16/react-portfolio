import { Wrap } from "@chakra-ui/react";
import { Badge } from "components/Badge";

export function SkillBadges({ skills }) {
  return (
    <Wrap>
      {skills.map((skill) => (
        <Badge bg={skill?.bg}>{skill.label}</Badge>
      ))}
    </Wrap>
  );
}
