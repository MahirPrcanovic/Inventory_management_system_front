import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Supplier } from "../../models/interfaces";
import Table from "../shared/Table";

const SupplierHero = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/suppliers", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setSuppliers(data));
  }, []);
  return (
    <div className="lg:flex md:w-full min-h-screen">
      <div className="w-full h-full bg-gray-700 lg:h-[400px] lg:w-72 flex justify-center align-center">
        <div className="flex justify-center items-center pt-6 text-2xl text-white lg:text-lg h-1/2 my-auto">
          <h1 className="">Number of suppliers:</h1>
          <h1 className="">{suppliers.length}</h1>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md md:w-full border-t border-gray-200 lg:border-none">
        <Table head={["ID", "Name", "Phone Number", "UIN", "Number"]}>
          {suppliers.map((supplier, index) => {
            return (
              <tr
                key={supplier._id}
                className=" border-b  border-gray-700 hover:bg-gray-600 bg-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {supplier._id}
                </th>
                <td className="px-6 py-4">{supplier.name}</td>
                <td className="px-6 py-4">{supplier.phoneNumber}</td>
                <td className="px-6 py-4">{supplier.uin}</td>
                <td className="px-6 py-4">{supplier.email}</td>

                <td className="flex items-center px-6 py-4 space-x-3">
                  <Link
                    to={`/suppliers/${supplier._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Details
                  </Link>
                  {/* EDIT MODAL */}
                  <Button
                    onClick={() => {
                      // onClick();
                      // setModalItem(materials[index]);
                      // setModalIndex(index);
                    }}
                  >
                    Edit
                  </Button>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => {
                      // setOpenDeleteModal(true);
                      // console.log(material._id);
                      // setDeleteID(material._id);
                    }}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default SupplierHero;
