export const Select = ({ label, options, onChange }) => (
    <div>
        <label className="block text-sm mb-1">{label}</label>
        <select
            className="w-full border border-gray-300 p-2 rounded"
            onChange={(e) => onChange(e.target.value)}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);