import {
  Button,
  Flex,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { login, useAuth } from "../context/AuthProvider";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const { state, dispatch } = useAuth();
  const { user, errorMessage } = state;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!isEmailValid) {
      return;
    }

    await login(dispatch, email, password);
  }

  function validateEmail(event: React.FocusEvent<HTMLInputElement>) {
    const regexp = /^[_a-zA-Z]{3,}@([a-zA-Z]{2,10}\.)[a-zA-Z]{2,4}$/g;

    if (!event.target.value.match(regexp)) {
      setIsEmailValid(false);

      return;
    }

    setIsEmailValid(true);
  }

  return (
    <>
      {user && <Navigate to="/dashboard" />}
      <Flex direction="column" align="center" justify="center" h="100%">
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Login
        </Title>

        <form onSubmit={handleSubmit}>
          <Paper withBorder shadow="md" w={400} p={30} mt={30} radius="md">
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              onFocus={() => setIsEmailValid(true)}
              label="Email"
              placeholder="you@email.com"
              required
            />
            {!isEmailValid && (
              <Text mt={4} fz="xs" fw={500} color="red">
                Please enter a valid email
              </Text>
            )}
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
            <Button type="submit" fullWidth mt="xl">
              Login
            </Button>
          </Paper>
        </form>
        {errorMessage && (
          <Text mt={4} fz="sm" color="red">
            {errorMessage}
          </Text>
        )}
      </Flex>
    </>
  );
}
