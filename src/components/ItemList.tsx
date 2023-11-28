import { Items, ReactSetState } from "../types/utils";
import Button from "./Button";

type Input = {
    items: Items[];
    setItems: ReactSetState<Items[]>;
}

const ItemList = ({ items, setItems } : Input) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev?.filter((data) => data.id !== id));
  };
  return items.map((item) => (
    <div
      key={item.id}
      className="flex justify-between items-center border rounded-sm border-slate-600 pl-2 mb-2 mr-1 py-2"
    >
      <p>{item.title}</p>
      <Button onClick={() => handleDelete(item.id)}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 24 24`}
        >
          <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
        </svg>
      </Button>
    </div>
  ));
};

export default ItemList;
