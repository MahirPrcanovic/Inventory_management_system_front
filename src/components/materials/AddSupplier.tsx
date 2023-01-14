import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React from "react";

interface SupplierProps {
  openModal: boolean;
  onClose: () => void;
}

const AddSupplier = ({ openModal, onClose }: SupplierProps) => {
  return (
    <Modal show={openModal} onClose={onClose}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body className="flex">
        <div className="flex flex-col lg:flex-row gap-10 mx-auto">
          <div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput id="name" placeholder="Your name" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="uin" value="UIN" />
              </div>
              <TextInput id="UIN" type="text" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pdv" value="PDV" />
              </div>
              <TextInput id="pdv" type="text" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone number" value="Phone number" />
              </div>
              <TextInput id="phone number" type="text" required={true} />
            </div>
          </div>
          <div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="contact person" value="Contact person" />
              </div>
              <TextInput
                id="contact person"
                placeholder="Contact person"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="email" />
              </div>
              <TextInput
                id="email"
                type="text"
                required={true}
                placeholder="Email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pdv" value="PDV" />
              </div>
              <TextInput id="pdv" type="text" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone number" value="Phone number" />
              </div>
              <TextInput id="phone number" type="text" required={true} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={onClick}>I accept</Button>
        <Button color="gray" onClick={onClick}>
          Decline
        </Button> */}
        <Button>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddSupplier;
{
  /* <Modal show={openModal} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 w-[800px]">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add new supplier
          </h3>
          <div className="flex flex-col lg:flex-row ">
            <div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput id="name" placeholder="Your name" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="uin" value="UIN" />
                </div>
                <TextInput id="UIN" type="text" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="pdv" value="PDV" />
                </div>
                <TextInput id="pdv" type="text" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone number" value="Phone number" />
                </div>
                <TextInput id="phone number" type="text" required={true} />
              </div>
            </div>
            <div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput id="name" placeholder="Your name" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="uin" value="UIN" />
                </div>
                <TextInput id="UIN" type="text" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="pdv" value="PDV" />
                </div>
                <TextInput id="pdv" type="text" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone number" value="Phone number" />
                </div>
                <TextInput id="phone number" type="text" required={true} />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
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
    </Modal> */
}
