import { Supplier } from "../models/interfaces";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomFooter from "../components/shared/CustomFooter";
import Header from "../components/shared/Header";
import { Table } from "flowbite-react";
const SupplierDetails = () => {
  const id = useParams().id;
  const [supplier, setSupplier] = useState<Supplier>();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/suppliers/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setSupplier(data.supplier);
        console.log(data.supplier);
      });
  }, []);
  const returnRow = (name: string, value: string | number | boolean) => {
    return (
      <div className="mt-6 flex justify-center items-center gap-3 text-white">
        <h1 className="text-center text-xl">{name}:</h1>
        <h1 className="text-center text-xl text-gray-300">
          {typeof value == "boolean" ? (value ? "true" : "false") : value}
        </h1>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <section className="flex flex-col bg-gray-700 h-[1000px] md:h-screen md:flex-row md:justify-center align-center md:gap-20">
        <div className="mt-10 md:flex md:flex-col md:items-start">
          <h1 className="text-3xl text-blue-200 text-center">Supplier</h1>
          {returnRow("ID", supplier?._id || "")}
          {returnRow("Name", supplier?.name || "")}
          {returnRow("PDV", supplier?.pdv || "")}
          {returnRow("UIN", supplier?.uin || "")}
          {returnRow("Email", supplier?.email || "")}
          {returnRow("Phone Number", supplier?.phoneNumber || "")}
          {returnRow("Contact Person", supplier?.contactPerson || "")}
          {returnRow("Date of Start", supplier?.dateOfStart?.toString() || "")}
          <div className="mt-6 flex flex-col justify-center items-center gap-3 text-white">
            <h1 className="text-center text-xl">Materials</h1>
            <Table>
              <Table.Head>
                <Table.HeadCell>Material Name</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
                <Table.HeadCell>Minimal Quantity</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Unit of measure</Table.HeadCell>
                <Table.HeadCell>isUsed</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {supplier &&
                  supplier.materials &&
                  supplier?.materials.map((material: any) => (
                    <Table.Row className=" border-gray-700 bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-white">
                        {material.name}
                      </Table.Cell>
                      <Table.Cell>{material.quantity}</Table.Cell>
                      <Table.Cell>{material.minQuantity}</Table.Cell>
                      <Table.Cell>{material.price}</Table.Cell>
                      <Table.Cell>{material.unitOfMeasure}</Table.Cell>
                      <Table.Cell>{material.isUsed ? "yes" : "no"}</Table.Cell>
                      <Table.Cell>
                        <a
                          href="/tables"
                          className="font-medium  hover:underline text-blue-500"
                        >
                          Edit
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </section>
      <CustomFooter />
    </div>
  );
};

export default SupplierDetails;
