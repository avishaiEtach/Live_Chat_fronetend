import { http } from "../http";

export const usersServices = {
  login,
  signup,
  logout,
  getConversations,
};

async function login(login: {
  email: string;
  password: string;
}): Promise<User> {
  try {
    return await http.post(`/login`, login);
  } catch (err) {
    throw err;
  }
}

async function signup(signup: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: "male" | "female";
}): Promise<User> {
  try {
    return await http.post(`/signup`, signup);
  } catch (err) {
    throw err;
  }
}

async function logout() {
  try {
    return await http.get(`/logout`);
  } catch (err) {
    throw err;
  }
}

async function getConversations(): Promise<User[]> {
  try {
    return await http.get(`/getUserForSideBar`);
  } catch (err) {
    throw err;
  }
}
