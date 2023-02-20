import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import { theme } from "../../../../theme";
import { Main, Text, Paragraph } from "./styles";

export const ListService = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Text>
        Build and manage projects in an easy, agile and intuitive way!
      </Text>

      <Button
        text="List My Projects"
        primaryColor={theme?.font?.colors?.white}
        hoverColor={theme?.colors?.dark?.pure}
        backgroundColor={theme?.colors?.background[1]}
        onClick={() => navigate("/projects")}
      />

      <Button
        text="User Settings"
        primaryColor={theme?.font?.colors?.white}
        hoverColor={theme?.colors?.dark?.pure}
        backgroundColor={theme?.colors?.background[1]}
        onClick={() => navigate("/user")}
      />

      <Paragraph>✨developed by: @vitosandrin✨</Paragraph>
    </Main>
  );
};
