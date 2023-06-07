import { Flex, TextInput, Button, Text } from "@mantine/core";
import { useState } from "react";

type CreateTodoFormProps = {
  close: () => void;
  createTodo: (todoText: string) => void;
};

export default function CreateTodoForm({
  close,
  createTodo,
}: CreateTodoFormProps) {
  const [todoText, setTodoText] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (todoText.length < 3) {
      setError("Task name must be atleast 3 characters long");

      return;
    }

    createTodo(todoText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        autoFocus={true}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        w="100%"
        placeholder="Enter your task"
      />
      {error && (
        <Text mt={4} fz="xs" fw={500} color="red">
          {error}
        </Text>
      )}
      <Flex mt={16} columnGap={32}>
        <Button onClick={close} fullWidth variant="default">
          Cancel
        </Button>
        <Button fullWidth type="submit">
          Add task
        </Button>
      </Flex>
    </form>
  );
}
