import { ListItem, ContentList, Text, List } from "./styles";
import { ITask } from "../../../../../@types/task";
import { theme } from "../../../../../theme";

export const ListTask = ({ item }: any) => {
  const todoTasks = item?.tasks?.filter(
    (task: ITask) => task?.completed === false
  );

  const doneTasks = item?.tasks?.filter(
    (task: ITask) => task?.completed === true
  );

  return (
    <ContentList align="center" justify="center" direction="row">
      <List>
        <ListItem
          color={theme?.font?.colors?.dark}
          background={theme?.colors?.types?.water}
        >
          total tasks: {item?.tasks?.length}
        </ListItem>
      </List>
      <List>
        <ListItem
          color={theme?.font?.colors?.dark}
          background={theme?.colors?.feedback?.warning}
        >
          tasks to do: {todoTasks?.length}
        </ListItem>
      </List>
      <List>
        <ListItem
          color={theme?.font?.colors?.dark}
          background={theme?.colors?.feedback?.success}
        >
          tasks done: {doneTasks?.length}
        </ListItem>
      </List>
    </ContentList>
  );
};
