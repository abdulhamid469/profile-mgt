export const Radio = ({ label, options, onChange }) => (
    <div>
        <label className="block text-sm mb-1">{label}</label>
        {options.map((option, index) => (
            <label key={index} className="inline-flex items-center mr-4">
                <input
                    type="radio"
                    name={label}
                    value={option.value}
                    onChange={() => onChange(option.value)}
                    className="mr-2"
                />
                {option.label}
            </label>
        ))}
    </div>
);