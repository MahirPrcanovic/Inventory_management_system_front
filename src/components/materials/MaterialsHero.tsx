import { useEffect, useState } from "react";

interface Material {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  isUsed: boolean;
  unitOfMeasure: string;
  minQuantity: number;
}
const MaterialsHero = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/materials", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMaterials(data.materials));
  }, []);
  // console.log(products);
  console.log(materials);
  return (
    <div className="md:flex md:w-full">
      <div className="w-full h-36 bg-red-300 md:h-auto md:w-80"></div>
      <div className="relative overflow-x-auto shadow-md md:w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity/MinQuantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                IsUsed
              </th>
              <th scope="col" className="px-6 py-3">
                Unit of Measure
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {material._id}
                  </th>
                  <td className="px-6 py-4">{material.name}</td>
                  <td className="px-6 py-4">
                    {material.quantity}/{material.minQuantity}
                  </td>
                  <td className="px-6 py-4">{material.price}</td>
                  <td className="px-6 py-4">
                    {material.isUsed == true ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4">{material.unitOfMeasure}</td>
                  {/* <td className="px-6 py-4">3.0 lb.</td> */}
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaterialsHero;
