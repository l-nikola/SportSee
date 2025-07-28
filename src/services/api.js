import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockData";

const useMock = true;

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});

// Find user
function findByUserId(dataArray, userId) {
  const numericUserId = Number(userId);
  return dataArray.find((item) => item.id === numericUserId);
}

// Get User
export async function getUser(userId) {
  if (useMock) {
    const data = findByUserId(USER_MAIN_DATA, userId);
    if (!data) throw new Error("User not found");
    return new Promise((resolve) => setTimeout(() => resolve(data), 300));
  } else {
    const response = await apiClient.get(`/user/${userId}`);
    return response.data.data;
  }
}
