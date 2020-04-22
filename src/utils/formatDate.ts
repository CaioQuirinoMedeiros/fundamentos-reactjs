const formatDate = (stringDate: string): string =>
  new Date(stringDate).toLocaleString(undefined, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

export default formatDate;
