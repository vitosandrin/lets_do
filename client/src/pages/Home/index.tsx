import { Wrapper, Text } from "./styles";
import { ListService } from "./components/ListService";

export const Home = () => {
  return (
    <Wrapper align="center" direction="row" justify="center">
      <ListService />
    </Wrapper>
  );
};
