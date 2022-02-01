
export const convertToCurrencyFormat = (number) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  return formatter.format(number);
}