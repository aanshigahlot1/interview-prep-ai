import React, { useRef, useState, useEffect } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    // Clean up preview URL on unmount
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImage(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    if (setPreview) setPreview(url);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (setPreview) setPreview(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Profile Placeholder or Preview */}
      {!image ? (
        <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100">
          <LuUser className="text-4xl text-orange-400" />
        </div>
      ) : (
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-lime-500">
          <img
            src={preview || previewUrl}
            alt="Profile preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onChooseFile}
          className="flex items-center gap-1 bg-blue-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-600 transition"
        >
          <LuUpload className="text-2xl text-orange-200"/>
          Upload
        </button>

        {image && (
          <button
            type="button"
            onClick={handleRemoveImage}
            className="flex items-center gap-1 bg-red-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-red-600 transition"
          >
            <LuTrash />
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoSelector;
