export const postApiCall = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Adjust headers as needed
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });

    if (!response.ok) {
      // Handle HTTP errors
      const error = await response.json();
      throw new Error(`Error: ${response.status} - ${error.message}`);
    }

    const result = await response.json(); // Parse the JSON response
    return result;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error; // Rethrow to handle the error where the function is used
  }
};
