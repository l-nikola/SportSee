import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockData";

// Get the environment variable
const localMock = localStorage.getItem("VITE_USE_MOCK");
const useMock =
  localMock !== null
    ? localMock === "true"
    : import.meta.env.VITE_USE_MOCK === "true";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL,
});

// Find user
function findByUserId(dataArray, userId, key = "id") {
  const numericUserId = Number(userId);
  return dataArray.find((item) => item[key] === numericUserId);
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

// Get Activity
export async function getUserActivity(userId) {
  if (useMock) {
    const data = findByUserId(USER_ACTIVITY, userId, "userId");
    if (!data) throw new Error("User activity not found");
    return new Promise((resolve) => setTimeout(() => resolve(data), 300));
  } else {
    const response = await apiClient.get(`/user/${userId}/activity`);
    return response.data.data;
  }
}

// Get Performance
export async function getUserPerformance(userId) {
  if (useMock) {
    const data = findByUserId(USER_PERFORMANCE, userId, "userId");
    if (!data) throw new Error("User performance not found");
    return new Promise((resolve) => setTimeout(() => resolve(data), 300));
  } else {
    const response = await apiClient.get(`/user/${userId}/performance`);
    return response.data.data;
  }
}

// Get Average Sessions
export async function getUserAverageSessions(userId) {
  if (useMock) {
    const data = findByUserId(USER_AVERAGE_SESSIONS, userId, "userId");
    if (!data) throw new Error("User average sessions not found");
    return new Promise((resolve) => setTimeout(() => resolve(data), 300));
  } else {
    const response = await apiClient.get(`/user/${userId}/average-sessions`);
    return response.data.data;
  }
}
