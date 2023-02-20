import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = format(date, "dd/MM/yyyy");
  return formattedDate;
};
export const formatDateWithHour = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = format(date, "dd/MM/yyyy HH:mm");
  return formattedDate;
};

export const dateToDb = (dateString: string) => {
  const formattedDate = format(
    new Date(dateString),
    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
  );

  return formattedDate;
};
