import { useState } from "react";
import { Container, HeaderIcon, Text } from "./styles";
import { Sidebar } from "../Sidebar";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/auth/authSlice";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const user = useSelector(getUser);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <HeaderIcon onClick={showSiderbar} />
      <Text>Welcome, {user?.name}!</Text>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};
