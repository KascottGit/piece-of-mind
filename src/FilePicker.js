import React, { useRef } from 'react';

/**
 * A custom file picker button component.
 * 
 * @param {object} props
 * @param {string} props.accept - The file types to accept (e.g., "image/*", ".pdf").
 * @param {function} props.onFileChange - Callback function when a file is selected.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 */
function FilePicker({ children, accept, onFileChange }) {
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
      
      <button onClick={handleButtonClick}>
        {children}
      </button>
    </>
  );
}

export default FilePicker;