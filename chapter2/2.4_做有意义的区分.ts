// 要做有意义的区分，不要为了编译通过取a1，a1...aN这样的变量名
// bad
function copyChars(a1: string[], a2: string[]) {
  for(let i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
  }
}
// good
function copyChars(source: string[], destination: string[]) {
  for(let i = 0; i < source.length; i++) {
    destination[i] = source[i];
  }
}

// 表示商品类
// bad
class ProductInfo {}
class ProductData {}
// good
class Product {}
