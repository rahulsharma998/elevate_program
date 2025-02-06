const products = [
    { id: 1, name: "Laptop", price: 1000, quantity: 5, supplierId: 101 },
    { id: 2, name: "Phone", price: 500, quantity: 0, supplierId: 102 },
    { id: 3, name: "Tablet", price: 300, quantity: 10, supplierId: 101 },
    { id: 4, name: "Monitor", price: 200, quantity: 8, supplierId: 103 }
  ];
  
  const suppliers = {
    101: { name: "Tech Corp", contact: "tech@example.com" },
    102: { name: "Gadget World", contact: "gadget@example.com" },
    103: { name: "Display Solutions", contact: "display@example.com" }
  };
  
//   Filter products with quantity > 0.
//   Group products by supplier.
//   Sort products within each supplier by price (ascending).
//   Combine product data with supplier data (e.g., supplier name and contact).
//   Calculate the total value of inventory for each supplier (price * quantity).

// const filterProd=products.filter((el)=>el.quantity>0)
// // console.log(filterProd)  

// const groupedProducts=filterProd.reduce((acc,n)=>{
//     if(!acc[n.supplierId]){
//         acc[n.supplierId]=[]
//     }
//     acc[n.supplierId].push(n)
//     return acc
// },{})
// console.log(groupedProducts)

// const sortByProduct=groupedProducts.sort((a,b)=>a.price-b.price)
// console.log(sortByProduct)

const filteredArr=products.filter(el=>el.quantity>0);
// console.log(filteredArr)
const group=filteredArr.reduce((acc,n)=>{
  if(!acc[n.supplierId]){
    acc[n.supplierId]={supplierId:n.supplierId,supplierName:suppliers[n.supplierId].name,contact:suppliers[n.supplierId].contact,products:[],totalInventoryValue:0}
    acc[n.supplierId].products.push({name:n.name,price:n.price,quantity:n.quantity})
    acc[n.supplierId].totalInventoryValue+=n.price*n.quantity
    return acc
  }
},{})

const finalOp=Object.values(group).map(el=>{
  el.products.sort((a,b)=>a.price-b.price)
  return el
})
console.log(finalOp)