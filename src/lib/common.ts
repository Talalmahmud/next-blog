export function getTimeDifference(targetDateStr: string): string {
  const targetDate = new Date(targetDateStr); // Parse the given date string
  const currentDate = new Date(); // Get the current date and time

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - targetDate.getTime();

  if (timeDifference < 0) {
    return "The target date is in the past.";
  }

  if (timeDifference >= 1000 * 60 * 60 * 24) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (timeDifference >= 1000 * 60 * 60) {
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (timeDifference >= 1000 * 60) {
    const minutes = Math.floor(timeDifference / (1000 * 60));
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeDifference >= 1000) {
    const seconds = Math.floor(timeDifference / 1000);
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }

  return "Less than a second"; // For cases where the difference is very small (less than a second)
}
