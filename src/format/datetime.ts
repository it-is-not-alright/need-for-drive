function numTo2CharString(num: number): string {
  return num.toString().padStart(2, '0');
}

function dateToString(date: Date): string {
  const day = numTo2CharString(date.getDate());
  const month = numTo2CharString(date.getMonth());
  const year = date.getFullYear();
  const hours = numTo2CharString(date.getHours());
  const minutes = numTo2CharString(date.getMinutes());
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export { dateToString, numTo2CharString };
