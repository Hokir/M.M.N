const CurrencyFormmater = new Intl.NumberFormat("fr-FR", {
  currency: "EUR",
  style: "currency",
});

export function CurrencyFormat(number) {
  return CurrencyFormmater.format(number);
}
