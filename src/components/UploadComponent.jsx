export const UploadComponent = () => (
    <div className="border border-dashed border-gray-300 p-4 rounded-lg">
        <p className="text-sm text-gray-500">Drag and drop files here</p>
        <input type="file" className="hidden" />
    </div>
);