export function formatTime(time: string) {
  const datetime = new Date(time);

  const year = datetime.getFullYear();
  const month = appendLeadingZeroes(datetime.getMonth() + 1);
  const day = appendLeadingZeroes(datetime.getDate());

  return `${year}-${month}-${day}`;
}

function appendLeadingZeroes(n: number) {
  if (n <= 9) {
    return `0${n}`;
  }

  return n;
}
