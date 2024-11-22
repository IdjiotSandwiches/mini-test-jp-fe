export const formatDate = (date?: Date) => {
  const formattedDate = new Intl.DateTimeFormat("en-ID", {
    dateStyle: "full",
  }).format(date);

  return formattedDate;
};

export const formatTime = (time?: Date) => {
  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(time);

  return formattedTime;
};
