import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Process } from "../../models/interfaces";
import Table from "../shared/Table";

const ProductionProcessHero = () => {
  const navigate = useNavigate();
  const [processes, setProcesses] = useState<Process[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/process`, {
      credentials: "include",
    })
      .then((res) => {
        console.log(res);
        if (res.status == 401 || res.status == 403) navigate("/auth/login");
        return res.json();
      })
      .then((data: any) => setProcesses(data.processes));
  }, []);
  return (
    <div className="lg:flex md:w-full min-h-screen">
      <div className="w-full h-full bg-gray-700 lg:h-[400px] lg:w-72">
        <div className="flex justify-center items-center pt-6 text-2xl text-white lg:text-lg h-1/2">
          <h1 className="">Number of processes:</h1>
          {/* <h1 className="">{materials.length}</h1> */}
        </div>
        <div className="flex justify-center items-center pt-6 text-2xl text-white lg:text-lg h-1/2">
          <h1 className="">Used elements:</h1>
          <h1 className="">
            {/* {materials.filter((el) => el.isUsed == true).length} */}
          </h1>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md md:w-full border-t border-gray-200 lg:border-none">
        <Table head={["ID", "Name", "Start Date", "End Date", "Price"]}>
          {processes.map((process, index) => {
            return (
              <tr
                key={process._id}
                className=" border-b  border-gray-700 hover:bg-gray-600 bg-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {process._id}
                </th>
                <td className="px-6 py-4">{process.name}</td>
                <td className="px-6 py-4">{process.startDate}</td>
                <td className="px-6 py-4">{process.endDate}</td>
                <td className="px-6 py-4">{process.price}</td>
                <td className="flex items-center px-6 py-4 space-x-3">
                  <Link
                    to={`/production-processes/${process._id}`}
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
      <Button
        color="purple"
        pill={true}
        // onClick={() => setOpenAddModal(true)}
        className="fixed bottom-0 right-0 mr-10 mb-10"
      >
        Add new material
      </Button>
    </div>
  );
};

export default ProductionProcessHero;
