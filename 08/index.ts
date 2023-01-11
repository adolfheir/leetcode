function myAtoi(s: string): number {
  var num = parseInt(s) || 0;
  if (num >= (2 ** 31 - 1)) { return 2 ** 31 - 1 }
  if (num <= -(2 ** 31)) { return -(2 ** 31) }
  return num;
};
