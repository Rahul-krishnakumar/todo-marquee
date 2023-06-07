// Fake db for users

import User from "../interfaces/User";

const users: User[] = [
  {
    email: "test@email.com",
    password: "password#123",
  },
  {
    email: "test2@email.com",
    password: "password#567",
  },
];

export async function authenticateUser(email: string, password: string) {
  const validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (validUser) {
    // Fake jwt token
    const token = "83b9dn29dj92nd00fnnodsc02cxcxdnjd";

    return Promise.resolve({ user: validUser, token });
  }

  return Promise.reject(new Error("Invalid credentials!"));
}
