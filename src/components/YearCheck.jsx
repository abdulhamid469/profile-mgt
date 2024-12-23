export const YearCheck = ({ months, selectedMonths, onToggle }) => (
    <div className="grid grid-cols-3 gap-2">
        {months.map((month) => (
            <button
                key={month}
                onClick={() => onToggle(month)}
                className={`px-4 py-2 rounded ${selectedMonths.includes(month)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200'
                    }`}
            >
                {month}
            </button>
        ))}
    </div>
);