export const formatNumber = (
  num: number,
  options?: Intl.NumberFormatOptions,
) => {
  const formatter = new Intl.NumberFormat('pt-BR', options)

  return formatter.format(num)
}
