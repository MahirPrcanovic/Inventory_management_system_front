import { useEffect, useRef, useState } from "react";
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
  const [modalItemIndex, setModalItemIndex] = useState<number>();
  const [modalItem, setModalItem] = useState<Material>();
  const materialName = useRef<HTMLInputElement>(null);
  const materialQuantity = useRef<HTMLInputElement>(null);
  const materialMinQuantity = useRef<HTMLInputElement>(null);
  const materialIsUsed = useRef<HTMLInputElement>(null);
  const materialPrice = useRef<HTMLInputElement>(null);
  const materialUnitOfMeasurement = useRef<HTMLInputElement>(null);
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
  const editHandler = (e: any) => {
    e.preventDefault();
    const updateObject: { [key: string]: any } = {};
    if (materialName.current?.value !== modalItem?.name)
      updateObject.name = materialName.current?.value;
    if (
      materialQuantity.current?.value
        ? +materialQuantity.current.value
        : 1 !== modalItem?.quantity
    )
      updateObject.quantity = materialQuantity.current?.value
        ? +materialQuantity.current.value
        : 1;
    if (
      materialMinQuantity.current?.value
        ? +materialMinQuantity.current.value
        : 1 !== modalItem?.minQuantity
    )
      updateObject.minQuantity = materialMinQuantity.current?.value
        ? +materialMinQuantity.current.value
        : 1;
    if (
      materialPrice.current?.value
        ? +materialPrice.current.value
        : 1 !== modalItem?.price
    )
      updateObject.price = materialPrice.current?.value
        ? +materialPrice.current.value
        : 1;
    if (materialIsUsed.current?.value !== modalItem?.isUsed)
      updateObject.isUsed = materialIsUsed.current?.value;
    if (materialUnitOfMeasurement.current?.value !== modalItem?.isUsed)
      updateObject.unitOfMeasurement = materialUnitOfMeasurement.current?.value;
    console.log(updateObject);
    console.log("Submitano");
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
            {materials.map((material, index) => {
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
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <Link
                      to={`/materials/${material._id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Details
                    </Link>
                    {/* EDIT MODAL */}
                    <Button
                      onClick={() => {
                        onClick();
                        // setModalItemIndex(index);
                        setModalItem(materials[index]);
                      }}
                    >
                      Edit
                    </Button>
                    <Modal show={modalOpen} position="center" onClose={onClose}>
                      <Modal.Header>Edit material</Modal.Header>
                      <Modal.Body>
                        <form onSubmit={editHandler}>
                          <div className="flex flex-col md:flex-row md:justify-evenly">
                            <div>
                              <div>
                                <div className="mb-2 block">
                                  <Label
                                    htmlFor="name"
                                    value="Name of material"
                                  />
                                </div>
                                <TextInput
                                  id="name"
                                  type="text"
                                  defaultValue={modalItem?.name}
                                  ref={materialName}
                                />
                              </div>
                              <div>
                                <div className="mb-2 block">
                                  <Label htmlFor="quantity" value="Quantity" />
                                </div>
                                <TextInput
                                  id="quantity"
                                  type="text"
                                  defaultValue={modalItem?.quantity}
                                  ref={materialQuantity}
                                />
                              </div>
                              <div>
                                <div className="mb-2 block">
                                  <Label htmlFor="isused" value="Is Used" />
                                </div>
                                <TextInput
                                  id="minquantity"
                                  type="text"
                                  defaultValue={
                                    modalItem?.isUsed ? "true" : "false"
                                  }
                                  ref={materialIsUsed}
                                />
                              </div>
                            </div>
                            <div>
                              <div>
                                <div className="mb-2 block">
                                  <Label htmlFor="price" value="Price" />
                                </div>
                                <TextInput
                                  id="price"
                                  type="text"
                                  defaultValue={modalItem?.price}
                                  ref={materialPrice}
                                />
                              </div>
                              <div>
                                <div className="mb-2 block">
                                  <Label
                                    htmlFor="unitofMeasure"
                                    value="Unit of Measure"
                                  />
                                </div>
                                <TextInput
                                  id="unitofmeasure"
                                  type="text"
                                  defaultValue={modalItem?.unitOfMeasure}
                                  ref={materialUnitOfMeasurement}
                                />
                              </div>
                              <div>
                                <div className="mb-2 block">
                                  <Label
                                    htmlFor="minquantity"
                                    value="Min Quantity"
                                  />
                                </div>
                                <TextInput
                                  id="minquantity"
                                  type="text"
                                  defaultValue={modalItem?.minQuantity}
                                  ref={materialMinQuantity}
                                />
                              </div>
                            </div>
                          </div>
                          <Modal.Footer className="mt-4 mb-0">
                            <Button onClick={onClick} type="submit">
                              Submit
                            </Button>
                          </Modal.Footer>
                        </form>
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
