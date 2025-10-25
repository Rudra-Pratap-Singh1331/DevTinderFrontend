export const formatTime = (createdAt) => {
  const date = new Date(createdAt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${
    hours >= 12 ? "PM" : "AM"
  }`;
};
