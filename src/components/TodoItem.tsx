import { Checkbox, CloseButton, Flex, Group, Paper, Text } from "@mantine/core";
import Todo from "../interfaces/Todo";

type TodoItemProps = {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
}: TodoItemProps) {
  return (
    <Paper withBorder radius="md" shadow="md" p={16} my={16}>
      <Flex justify="space-between">
        <Text fz="lg" fw={700}>
          {todo.task}
        </Text>
        <Group>
          <Checkbox
            checked={todo?.isCompleted}
            onChange={() => toggleTodo(todo.id)}
          />
          <CloseButton
            onClick={() => deleteTodo(todo.id)}
            title="Close popover"
            size="md"
            iconSize={20}
          />
        </Group>
      </Flex>
    </Paper>
  );
}
