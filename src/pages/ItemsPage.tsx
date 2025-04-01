import { useQuery } from "@tanstack/react-query";
import { Item } from "../types/Item";
import { fetchItems } from "../services/ItemService";

const ItemsPage = () => {

  const {
    data: itemsMap,
    isLoading,
    error,
  } = useQuery<Record<string, Item>, Error>({
    queryKey: ["items"],
    queryFn: fetchItems,
    retry: false, // Don't retry on error :D
  });

  const items: Item[] = itemsMap ? Object.values(itemsMap) : [];

  if(error) console.log("Error al cargar los items");

  return (
    <main className="relative z-10 flex-1 flex py-20 mx-auto max-w-2xl">
      <div>
        <div className="flex flex-col bg-gray-900 p-6 rounded-xl shadow w-full">
          <div className="font-semibold tracking-tight text-xl">Items</div>
          {isLoading && 
            <div className="flex justify-center items-center mt-4">
              <svg className="size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </div>
          }
          <div className="grid grid-cols-4 gap-4 mt-4 max-h-20 overflow-y-auto">
            {items.map((item) =>
              <p>{item.name}</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )


}

export default ItemsPage;

