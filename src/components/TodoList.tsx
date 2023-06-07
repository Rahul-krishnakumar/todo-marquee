import { Button, List, Modal, Text, Title } from "@mantine/core";
import Todo from "../interfaces/Todo";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import CreateTodoForm from "./CreateTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [opened, { open, close }] = useDisclosure(false);

  function createTodo(todoText: string) {
    const newTodo: Todo = {
      id: new Date().getTime(),
      task: todoText,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    close();
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Button onClick={open} my={24} radius="md" fullWidth>
        Add task
      </Button>

      {todos?.length ? (
        <List>
          {...todos
            .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))}
        </List>
      ) : (
        <Text>You have no pending tasks!</Text>
      )}

      <Modal opened={opened} onClose={close} title="Create task" centered>
        <Title>
          <CreateTodoForm close={close} createTodo={createTodo} />
        </Title>
      </Modal>
    </>
  );
}
