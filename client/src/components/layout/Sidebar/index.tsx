import { FC } from "react";
import { Container, Content, Card, Overlay } from "./styles";

import { FaTimes, FaHome, FaRegSun, FaUserAlt, FaArchive, FaShareSquare, FaFileAlt } from "react-icons/fa";
import Portal from "../../utils/Portal";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/authSlice";
import { Link } from "react-router-dom";

type SidebarProps = {
  active: React.ComponentState;
};
interface SidebarItemProps {
  Icon: React.FunctionComponent;
  text: string;
  link?: string;
  onClick?: React.MouseEventHandler;
}

const SidebarItem: FC<SidebarItemProps> = ({ Icon, text, onClick, link }) => {
  return (
    <Link to={link!}>
      <Card
        align="center"
        direction="row"
        justify="flex-start"
        onClick={onClick}
      >
        <Icon />
        {text}
      </Card>
    </Link>
  );
};

export const Sidebar = ({ active }: SidebarProps) => {
  const dispatch = useDispatch();
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Portal>
      <Overlay>
        <Container sidebar={active}>
          <FaTimes onClick={closeSidebar} />
          <Content>
            <SidebarItem Icon={FaHome} text="Home" link="/" />
            <SidebarItem Icon={FaArchive} text="Projects" link="/projects" />
            <SidebarItem Icon={FaUserAlt} text="User" link="/user" />
            <SidebarItem
              Icon={FaShareSquare}
              text="Logout"
              onClick={() => {
                dispatch(logout());
              }}
            />
          </Content>
        </Container>
      </Overlay>
    </Portal>
  );
};
