import { Button, Container, Flex, Title, Text } from "@mantine/core";
import TodoList from "../components/TodoList";
import { useAuth } from "../context/AuthProvider";
import { logout } from "../context/utils";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { state, dispatch } = useAuth();
  const { user, errorMessage } = state;

  async function handleLogout() {
    await logout(dispatch);
  }

  return (
    <>
      {!user && <Navigate to="/login" />}
      <Container size="xs" py={32}>
        <Flex align="center" justify="space-between">
          <Title
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            My tasks
          </Title>
          <Button onClick={handleLogout} variant="subtle">
            Logout
          </Button>
          {errorMessage && (
            <Text mt={4} fz="sm" color="red">
              {errorMessage}
            </Text>
          )}
        </Flex>

        <TodoList />
      </Container>
    </>
  );
}
