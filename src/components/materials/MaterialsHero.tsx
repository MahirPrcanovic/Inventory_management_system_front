import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Modal } from "flowbite-react";
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
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  useEffect(() => {
    fetch("http://localhost:3000/materials", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMaterials(data.materials));
  }, []);
  // console.log(products);
  console.log(materials);
  const onClick = () => {
    setModalOpen(true);
  };
  const onClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="lg:flex md:w-full">
      <div className="w-full h-full bg-gray-700 lg:h-auto lg:w-72">
        <div className="flex justify-center items-center pt-6 text-2xl text-white lg:text-lg h-1/2">
          <h1 className="">Number of materials:</h1>
          <h1 className="">{materials.length}</h1>
        </div>
        <div className="flex justify-center items-center pt-6 text-2xl text-white lg:text-lg h-1/2">
          <h1 className="">Used elements:</h1>
          <h1 className="">
            {materials.filter((el) => el.isUsed == true).length}
          </h1>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md md:w-full border-t border-gray-200 lg:border-none">
        <table className="w-full text-sm text-left  text-gray-400 bg-gray-700">
          <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
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
          <tbody className="bg-gray-700">
            {materials.map((material) => {
              return (
                <tr
                  key={material._id}
                  className=" border-b  border-gray-700 hover:bg-gray-600 bg-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
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
                    <Link
                      to={`/materials/${material._id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Details
                    </Link>
                    <Button onClick={onClick}>Edit</Button>
                    <Modal
                      show={modalOpen}
                      size="md"
                      popup={true}
                      onClose={onClose}
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Sign in to our platform
                          </h3>
                          <div>
                            <div className="mb-2 block">
                              <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                              id="email"
                              placeholder="name@company.com"
                              required={true}
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput
                              id="password"
                              type="password"
                              required={true}
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                              <Checkbox id="remember" />
                              <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a
                              href="/modal"
                              className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                            >
                              Lost Password?
                            </a>
                          </div>
                          <div className="w-full">
                            <Button>Log in to your account</Button>
                          </div>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?{" "}
                            <a
                              href="/modal"
                              className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                              Create account
                            </a>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
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
