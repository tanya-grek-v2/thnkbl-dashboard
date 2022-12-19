export const normalizeDateTime = (dateString: string) => {
  const date = new Date(dateString).toLocaleString('en-us', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  const time = new Date(dateString).toLocaleString('en-us', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).toLowerCase();

  return `${date} ${time}`;
};
