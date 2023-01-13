import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Supplier } from "../../models/interfaces";
import EditModal from "../shared/EditModal";
import Table from "../shared/Table";

const SupplierHero = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const navigate = useNavigate();
  const [editModalSupplier, setEditModalSupplier] = useState<Supplier>();
  const [editID, setEditID] = useState<string>();
  const [modalOpen, setModalOpen] = useState(false);
  const supplierName = useRef<HTMLInputElement>(null);
  const supplierPDV = useRef<HTMLInputElement>(null);
  const supplierEmail = useRef<HTMLInputElement>(null);
  const supplierUIN = useRef<HTMLInputElement>(null);
  const supplierPhoneNumber = useRef<HTMLInputElement>(null);
  const supplierContactPerson = useRef<HTMLInputElement>(null);
  useEffect(() => {
    fetch("http://localhost:3000/suppliers", { credentials: "include" })
      .then((res) => {
        if (res.status == 401 || res.status == 403) navigate("/auth/login");
        return res.json();
      })
      .then((data) => setSuppliers(data));
  }, []);
  const editSupplier = () => {};
  const editHandler = (id: string) => {
    fetch(`http://localhost:3000/suppliers/${id}`, {
      credentials: "include",
    })
      .then((res) => {
        //DODATI DA REDIRECTA NA 404 page umjesto /suppliers
        if (res.status == 400) navigate("/suppliers");
        return res.json();
      })
      .then((data) => setEditModalSupplier(data.supplier));
  };
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
                      console.log(
                        "SUPPLIER ID TO STRING JE " + supplier._id.toString()
                      );
                      setEditID(supplier._id.toString());
                      setModalOpen(true);
                      console.log(supplier._id);
                      console.log(editID);
                      // onClick();
                      // setModalItem(materials[index]);
                      // setModalIndex(index);
                      editHandler(supplier._id);
                    }}
                  >
                    Edit
                  </Button>
                  <EditModal
                    // editHandler={editHandler}
                    editHandler={() => {}}
                    modalOpen={modalOpen}
                    onClose={() => {
                      setModalOpen(false);
                    }}
                  >
                    {" "}
                    <div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="name" value="Name of supplier" />
                        </div>
                        <TextInput
                          id="name"
                          type="text"
                          defaultValue={editModalSupplier?.name}
                          ref={supplierName}
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput
                          id="email"
                          type="email"
                          defaultValue={editModalSupplier?.email}
                          ref={supplierEmail}
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="pdv" value="PDV" />
                        </div>
                        <TextInput
                          id="pdv"
                          type="text"
                          defaultValue={editModalSupplier?.pdv}
                          ref={supplierPDV}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="uin" value="UIN" />
                        </div>
                        <TextInput
                          id="uin"
                          type="text"
                          defaultValue={editModalSupplier?.uin}
                          ref={supplierUIN}
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="phonenumber" value="Phone number" />
                        </div>
                        <TextInput
                          id="phonenumber"
                          type="text"
                          defaultValue={editModalSupplier?.phoneNumber}
                          ref={supplierPhoneNumber}
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label
                            htmlFor="contactperson"
                            value="Contact Person"
                          />
                        </div>
                        <TextInput
                          id="suppliercontactperson"
                          type="text"
                          defaultValue={editModalSupplier?.contactPerson}
                          ref={supplierContactPerson}
                        />
                      </div>
                    </div>
                  </EditModal>
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
