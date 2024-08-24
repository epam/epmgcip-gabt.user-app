import { EventCategory } from "@/src/constants/next-events-mock";
import { useState, ChangeEvent } from "react";

const categories = Object.values(EventCategory);

interface EventFilterProps {
  onFilterChange: (category: EventCategory) => void;
}

export function EventFilter({ onFilterChange }: EventFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>(
    EventCategory.All
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value as EventCategory;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="event-category"
        className="block text-lg font-medium text-gray-700"
      >
        Filter by category:
      </label>
      <select
        id="event-category"
        value={selectedCategory}
        onChange={handleChange}
        className="block w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-700"
      >
        {categories.map((category) => (
          <option key={category} value={category} className="text-gray-700">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
