```
function calculaPrecoTotal(quantidade) {
  const macasUnd = 1.30;
  const macasDz = 1.00;

  if(quantidade <= 11) {
    return quantidade * macasUnd;
  } else {
   return quantidade * macasDz;
  }
}
```
