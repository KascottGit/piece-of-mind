import React, { useRef } from 'react';

function FilePicker({ children, className = '', accept, onFileChange }) {
  // Create a ref for the hidden file input
  const fileInputRef = useRef(null);

  // This function is triggered when the visible button is clicked
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // This function is triggered when the user selects a file
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Call the parent component's callback function
      onFileChange(file);
    }

    // Reset the input value to allow selecting the same file again
    event.target.value = null;
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept={accept}
      />

      <button onClick={handleButtonClick} className={className}>
        {children}
      </button>
    </>
  );
}

export default FilePicker;