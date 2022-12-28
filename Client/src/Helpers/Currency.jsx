const CurrencyFormmater = new Intl.NumberFormat("fr-FR", {
  currency: "EUR",
  style: "currency",
});

export function Currency(number) {
  return CurrencyFormmater.format(number);
}
