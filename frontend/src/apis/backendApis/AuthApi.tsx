import { apiInstance } from "src/apis/backendApis/config/AxiosConfig";

export const apiCheckWhitelist = async (data: any) => {
  const newConfig = {
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  try {
    const response = await apiInstance.post(`/checkWhitelist`, data, newConfig);
    console.log("Whitelist checked successfully:", response);
    return response?.data;
  } catch (error) {
    console.error("Error checking whitelist", error);
  }
};

