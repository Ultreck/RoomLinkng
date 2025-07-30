import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';


type CounterProps = {
  label: string
  value: number | null
  onIncrement: () => void
  onDecrement: () => void
}

const Counter = ({ label, value, onIncrement, onDecrement }: CounterProps) => (
  <div className="flex justify-between items-center py-3">
    <span className="font-medium text-gray-600">{label}</span>
    <div className="flex items-center space-x-4">
      <button
        onClick={onDecrement}
        className="w-8 h-8 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center text-xl"
      >
       <Minus className='text-gray-600' />
      </button>
      <span className="w-10 text-center text-gray-700">
        {value ?? "Any"}
      </span>
      <button
        onClick={onIncrement}
        className="w-8 h-8 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center text-xl"
      >
        <Plus className='text-gray-600'/>
      </button>
    </div>
  </div>
)
export default Counter;