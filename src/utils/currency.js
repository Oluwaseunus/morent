export const USDollar = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatMoney = (amount, format = USDollar) => {
  if (!amount) return format.format(0).slice(0, -3);

  return format.format(+(amount / 100).toFixed(2));
};

Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
}).format(+(2300).toFixed(2));
