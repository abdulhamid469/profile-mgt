export const Pagination = ({ currentPage, totalPages, onChange }) => (
    <div className="flex items-center space-x-2">
        <button
            onClick={() => onChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
        >
            &lt;
        </button>
        <span>
            {currentPage} of {totalPages}
        </span>
        <button
            onClick={() => onChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
        >
            &gt;
        </button>
    </div>
);
