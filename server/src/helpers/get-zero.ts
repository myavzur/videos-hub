export const getZero = (num: number) => {
  if (num < 10) return `0${num}`
  return num
}