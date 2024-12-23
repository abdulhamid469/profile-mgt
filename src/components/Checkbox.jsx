export const Checkbox = ({ label, options, onChange }) => (
    <div>
        <label className="block text-sm mb-1">{label}</label>
        {options.map((option, index) => (
            <label key={index} className="inline-flex items-center mr-4">
                <input
                    type="checkbox"
                    value={option.value}
                    onChange={(e) => onChange(e.target.checked, option.value)}
                    className="mr-2"
                />
                {option.label}
            </label>
        ))}
    </div>
);