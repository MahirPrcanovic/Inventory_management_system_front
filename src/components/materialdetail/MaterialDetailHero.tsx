import { useEffect, useState } from "react";
import { Material } from "../../models/interfaces";

const MaterialDetailHero = ({ id }: { id: string }) => {
  const [material, setMaterial] = useState<Material>();
  useEffect(() => {
    fetch(`http://localhost:3000/materials/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMaterial(data.material));
  }, []);
  return (
    <section className="flex flex-col">
      <div></div>
    </section>
  );
};
export default MaterialDetailHero;
