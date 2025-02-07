export const formatedStringToDate = (date: string) => {
  const correctFormat = date.split('.').reverse().join('-');

  return new Date(correctFormat);
};

export const formattedDateToString = (date: Date) => {
  const stringDate = date.toLocaleDateString();

  return stringDate.split(',').reverse().join('.');
};
