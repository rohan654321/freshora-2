// components/FullPriceTable.tsx
export default function FullPriceTable() {
  const leftColumn = [
    { item: "Arm/Leg Warmer", price: "$5.00" },
    { item: "Coat (Designer)", price: "$40.00" },
    { item: "Coat (Half)", price: "$9.00" },
    { item: "Coat Liner", price: "$9.00" },
    { item: "Dress (Children)", price: "$7.00" },
    { item: "Dress (Formal)", price: "$12.00" },
    { item: "Gloves", price: "$5.00" },
    { item: "Handkerchief", price: "$3.00" },
    { item: "Hat", price: "$5.00" },
    { item: "Jacket (Down)", price: "$18.00" },
    { item: "Jacket (Leather)", price: "$50.00" },
    { item: "Jeans", price: "$6.00" },
    { item: "Jumpsuit", price: "$18.00" },
    { item: "Lab Coat", price: "$8.00" },
    { item: "Raincoat", price: "$16.00" },
  ];

  const rightColumn = [
    { item: "Raincoat (With Lining)", price: "$20.00" },
    { item: "Robe", price: "$20.00" },
    { item: "Scarf", price: "$6.00" },
    { item: "Shawl", price: "$18.00" },
    { item: "Shirt (Children)", price: "$5.00" },
    { item: "Shirt (Designer)", price: "$6.00" },
    { item: "Shirt (Folded)", price: "$5.00" },
    { item: "Shirt (Tux)", price: "$6.00" },
    { item: "Shorts", price: "$6.00" },
    { item: "Skirt", price: "$6.00" },
    { item: "Sweater (Cashmere)", price: "$8.00" },
    { item: "Sweater (Heavy)", price: "$8.00" },
    { item: "Tie", price: "$6.00" },
    { item: "Vests", price: "$6.00" },
    { item: "Vests (Puffer)", price: "$9.00" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-green-600 font-medium">[ Our Service Prices ]</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Full Price Table</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Laundry service pricing is volume based. Dry cleaning is priced by item type.  
          Give us a call to review pricing and services today!
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-white shadow-md rounded-t-lg font-semibold">
            Most Popular Items
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md rounded-t-lg font-semibold">
            Full Apparel List
          </button>
          <button className="px-6 py-3 bg-white shadow-md rounded-t-lg font-semibold">
            Full Apparel List
          </button>
        </div>

        {/* Table */}
        <div className="bg-gray-50 rounded-b-lg shadow-md p-6 grid grid-cols-2 gap-12 mt-0">
          <div>
            {leftColumn.map((row, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-gray-100 rounded-full px-4 py-2 mb-2"
              >
                <span className="text-gray-700">{row.item}</span>
                <span className="text-gray-600">{row.price}</span>
              </div>
            ))}
          </div>
          <div>
            {rightColumn.map((row, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-gray-100 rounded-full px-4 py-2 mb-2"
              >
                <span className="text-gray-700">{row.item}</span>
                <span className="text-gray-600">{row.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
