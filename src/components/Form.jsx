import PropTypes from "prop-types";
import { useCallback } from "react";

/**
 * Input
 */
export const InputField = ({ label, type, name, value, onChange, placeholder }) => {
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired, // Label must be a string and is required
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'url']), // Restrict to specific input types
    name: PropTypes.string.isRequired, // Input name is required
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Accept string or number for value
    onChange: PropTypes.func.isRequired, // onChange handler is required
    placeholder: PropTypes.string, // Optional placeholder
};

InputField.defaultProps = {
    type: 'text', // Default type is text
    placeholder: '', // Default placeholder is empty
};

/**
 * Email
 */

export const EmailField = ({ label, name, value, onChange, placeholder }) => {
    return (
        <div>
            <label>
                {label}
                <input
                    type="email"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
};

EmailField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

EmailField.defaultProps = {
    label: 'Email',
    placeholder: 'Enter your email',
};

/**
 * Select
 */

export const SelectField = ({ label, name, value, onChange, options, placeholder = 'Please select...' }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2 text-black"
                >
                    {placeholder && <option value="">{placeholder}</option>}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
    ).isRequired,
    placeholder: PropTypes.string,
};

/**
 * Checkbox
 */

export const CheckboxField = ({ label, name, checked, onChange }) => {
    return (
        <div className="flex items-center mb-4">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-700 cursor-pointer">
                {label}
            </label>
        </div>
    );
};

CheckboxField.propTypes = {
    label: PropTypes.string.isRequired, // Label for the checkbox
    name: PropTypes.string.isRequired, // Name attribute for the checkbox
    checked: PropTypes.bool.isRequired, // Checked state
    onChange: PropTypes.func.isRequired, // onChange handler
};

/**
 * Radio
 */

export const RadioField = ({ label, name, value, options, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            {options.map((option) => (
                <div key={option.value} className="flex items-center mb-2">
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm text-gray-700 cursor-pointer">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string.isRequired, // Label for the radio group
    name: PropTypes.string.isRequired, // Name attribute for all radios
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Selected value
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired, // Label for the radio option
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Value of the radio option
        })
    ).isRequired, // List of options
    onChange: PropTypes.func.isRequired, // onChange handler
};

/**
 * Months
 */

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export const MonthSelector = ({ label, selectedMonths, onChange }) => {
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            onChange([...selectedMonths, value]);
        } else {
            onChange(selectedMonths.filter((month) => month !== value));
        }
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <div className="grid grid-cols-6 gap-6">
                {months.map((month) => (
                    <div key={month} className="mr-2 mb-2">
                        <label
                            className={`font-roboto text-[13px] cursor-pointer rounded-lg px-4 py-2 border transition-colors duration-200 
                            ${selectedMonths.includes(month) ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}
                            border-gray-300`}
                        >
                            <input
                                type="checkbox"
                                value={month}
                                checked={selectedMonths.includes(month)}
                                onChange={handleCheckboxChange}
                                className="hidden" // Hide the default checkbox
                            />
                            {month}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

MonthSelector.propTypes = {
    label: PropTypes.string.isRequired, // Label for the month selector
    selectedMonths: PropTypes.arrayOf(PropTypes.string).isRequired, // Selected months array
    onChange: PropTypes.func.isRequired, // onChange handler
};

/**
 * UploadComponents
 */

export const UploadField = ({ label, name, multiple = false, onChange }) => {
    const handleDrop = useCallback(
        (event) => {
            event.preventDefault();
            const files = event.dataTransfer.files;
            if (files.length) {
                onChange({ target: { files } });
            }
        },
        [onChange]
    );

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div
                className="mt-1 border-2 border-dashed border-gray-300 p-4 rounded-lg cursor-pointer hover:border-gray-500"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    type="file"
                    name={name}
                    multiple={multiple}
                    onChange={onChange}
                    className="hidden"
                />
                <p className="text-center text-gray-500">
                    Drag and drop files here or click to upload
                </p>
            </div>
        </div>
    );
};

UploadField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};