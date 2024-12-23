import PropTypes from "prop-types";

const styles = {
    complete: "bg-complete text-green-800 px-2 py-1 rounded",
    inprogress: "bg-yellow-200 text-yellow-800 px-2 py-1 rounded",
    received: "bg-orange-200 text-orange-800 px-2 py-1 rounded",
    declined: "bg-red-200 text-red-800 px-2 py-1 rounded",
};

export const Table = ({ data }) => (
    <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
            <tr>
                <th className="border border-gray-300 p-2 bg-gray-200">Select</th>
                <th className="border border-gray-300 p-2 bg-gray-200">Image</th>
                {Object.keys(data[0])
                    .filter((key) => key !== "Image")
                    .map((header) => (
                        <th key={header} className="border border-gray-300 p-2 bg-gray-200">
                            {header}
                        </th>
                    ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                    {/* Checkbox Column */}
                    <td className="border border-gray-300 p-2">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                    </td>
                    {/* Image Column */}
                    <td className="border border-gray-300 p-2">
                        {row.Image ? (
                            <img
                                src={row.Image}
                                alt={`${row.Name}-thumbnail`}
                                className="w-10 h-10 object-cover rounded"
                            />
                        ) : (
                            <span className="text-gray-500">No Image</span>
                        )}
                    </td>
                    {/* Other Columns */}
                    {Object.entries(row)
                        .filter(([key]) => key !== "Image")
                        .map(([key, value], i) => (
                            <td
                                key={i}
                                className={`border border-gray-300 p-2 ${key === "Status" ? styles[value.toLowerCase().replace(" ", "")] : ""
                                    }`}
                            >
                                {value}
                            </td>
                        ))}
                </tr>
            ))}
        </tbody>
    </table>
);

Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            Image: PropTypes.string,
            Name: PropTypes.string.isRequired,
            Status: PropTypes.string.isRequired,
            Date: PropTypes.string.isRequired,
        })
    ).isRequired,
};
