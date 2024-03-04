export const dateFormatTxt = (dateString: string) => {
  if (!dateString) return null;
  const dateObject = new Date(dateString);
  return dateObject?.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
