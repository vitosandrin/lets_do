import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import { theme } from "../../../../theme";
import { Main, Text } from "./styles";

export const ListService = () => {
  const navigate = useNavigate()
  return (
    <Main>
      <Text>Build and manage your projects</Text>
      <Button
          text="Create New Project"
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.dark?.pure}
          backgroundColor={theme?.colors?.background[1]}
          onClick={() => console.log('clicked')}
        />
      <Button
          text="List My Projects"
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.dark?.pure}
          backgroundColor={theme?.colors?.background[1]}
          onClick={() => navigate('/projects')}
        />
    </Main>
  );
};
