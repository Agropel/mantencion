import { XCircleIcon} from '@heroicons/react/24/outline'
import { OrderItem } from "@/src/types"
import { useStore } from '@/src/store'

type PartesDatailsProps = {
    item: OrderItem
}


export default function PartesDatails({item} : PartesDatailsProps) {


    const removeItem = useStore((state) => state.removeItem)


  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <p className="text-lg font-bold">{item.name} </p>

                    <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                    >
                        <XCircleIcon className="text-red-600 h-8 w-8" />
                    </button>
                </div>
                
            </div>
        </div>
  )
}
