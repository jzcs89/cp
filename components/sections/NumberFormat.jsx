export const numberFormat = (value) =>
  new Intl.NumberFormat('fa-IR', {
    // style: 'currency',
    // currency: 'IRR'
  }).format(value);