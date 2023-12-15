function numTo2CharString(num: number): string {
  return num.toString().padStart(2, '0');
}

function capitalizeFirstChar(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export { capitalizeFirstChar, numTo2CharString };
