import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import template1 from "../../images/template1.png";
// import temp from "../images/temp.jpg"; // Existing image for template 4
import doc1 from "../../Docs/doc1.docx";
import docu from "../../Docs/docu.pdf";
import doc2 from "../../Docs/doc2.docx";
import { HiTemplate } from "react-icons/hi";
import { CgTemplate } from "react-icons/cg";
import { FcDocument } from "react-icons/fc";
import { LiaToolsSolid } from "react-icons/lia";
import { IoTimerOutline } from "react-icons/io5";
import { TiExport } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { FaCaretDown, FaCaretRight } from "react-icons/fa";


function Center() {
    const [percentage, setPercentage] = useState(0); // Percentage for the progress bar
    const [savedMessage, setSavedMessage] = useState(''); // State for saved message
    const [isLogoSaved, setIsLogoSaved] = useState(false); // State for logo saved
    const [customerName, setCustomerName] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
    const [sidebarWidth, setSidebarWidth] = useState(350);
    const [logo, setLogo] = useState(null); // State to store uploaded logo
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [warehouseNumber, setWarehouseNumber] = useState('');
    const navigate = useNavigate();
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);
    const [isTemplateSelected, setIsTemplateSelected] = useState(false);
    const [isResizing, setIsResizing] = useState(0);
    const handleContentSelect = (content) => {
        if (content === 'Logo' || content === 'Vendor logo content...') {
            setSelectedContent(content);
        } else if (content === 'Customer sign-off authority content...') {
            setSelectedContent('Customer sign-off authority content...');
        } else if (content.startsWith('-')) {
            // When a heading with a dash is clicked
            setSelectedContent('No content selected');
        } else {
            setSelectedContent(content);
        }
    };
    const handleClosePreview = () => {
        console.log('Close button clicked'); // Debugging log
        setIsPreviewVisible(false);
    };
  const handleMouseDown = (e) => {
        setIsResizing(true);
    };
    // Function to handle closing the selected content
    const handleCloseContent = () => {
        setSelectedContent('No content selected'); // Reset selected content
    };

    const stopResizing = () => {
        setIsResizing(false);
    };
    const handleResize = (e) => {
        if (isResizing) {
            const newWidth = e.clientX;
            if (newWidth >= 150 && newWidth <= 500) { // Set min/max width limits
                setSidebarWidth(newWidth);
            }
        }
    };
    const handleSignOffSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., save to state, API call, etc.
        console.log("Customer Name:", customerName);
        console.log("Project Name:", projectName);
        console.log("Project Type:", projectType);
        console.log("Warehouse Number:", warehouseNumber);
        // Reset the form after submission
        setCustomerName('');
        setProjectName('');
        setProjectType('');
        setWarehouseNumber('');
    };

    // Handle logo upload
    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setLogo(imageUrl);
            setPercentage(0); // Reset percentage when a new logo is uploaded
        }
    };

    const handleSave = () => {
        if (logo) { // Check if a logo has been uploaded
            setPercentage(100); // Set percentage to 100% when saved
            setSavedMessage('Logo saved successfully!'); // Set saved message
        } else {
            alert("Please upload a logo before saving.");
        }
    };
    const handleDragOver = (event) => {
        event.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    };
    const handleDrop = (event) => {
        event.preventDefault(); // Prevent default behavior
        const file = event.dataTransfer.files[0]; // Get the dropped file
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setLogo(imageUrl);
            setPercentage(0); // Reset percentage when a new logo is uploaded
        }
    };
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

  return (
    <div className="flex-grow p-4 w-full flex justify-center ">
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-4 dark:text-white">Selected Section</h2>

                        <div className="flex justify-between items-center">
                            <h3 className="text-lg">{selectedContent ? selectedContent : ""}</h3>
                            {selectedContent && (
                                <button
                                    onClick={handleCloseContent}
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    &#x2715;
                                </button>
                            )}
                        </div>

                        <div className="flex sm:grid-cols-2 gap-8 mt-6">
                            <Link className="flex flex-col items-center justify-center p-6  rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-600 transition duration-300">
                                <FcDocument className="text-4xl text-blue-500 " />
                                <h2 className=" font dark:text-white">Document Control</h2>
                            </Link>
                            <Link className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-yellow-600 transition duration-300">
                                <LiaToolsSolid className="text-4xl mb-3 text-yellow-500" />
                                <h2 className="font dark:text-white">Scope Items</h2>
                            </Link>
                            <Link className="flex flex-col items-center justify-center p-6  rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-600 transition duration-300">
                                <IoTimerOutline className="text-4xl mb-3 text-green-500" />
                                <h2 className="font dark:text-white">Table Of Contents</h2>
                            </Link>

                        </div>
                        {(selectedContent === 'Logo' || selectedContent === 'Vendor logo content...') ? (
                            <div className='flex flex-col justify-center items-center mt-16'>
                                <div
                                    className="border-dashed border-4 border-gray-400 p-8 rounded-lg w-80 cursor-pointer"
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                >
                                    <p className="text-center text-gray-500 dark:text-white">Drag and drop your logo here or click to upload</p>
                                    <label
                                        htmlFor="logoUpload"
                                        className="cursor-pointer dark:text-white bg-gray-500 text-white p-2 rounded-lg mt-4 block"
                                    >
                                        Upload {selectedContent === 'Vendor logo content...' ? 'Vendor Logo' : 'Customer Logo'}
                                    </label>
                                    <input
                                        type="file"
                                        id="logoUpload"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleLogoUpload}
                                    />
                                </div>
                                {logo && (
                                    <div className="mt-4">
                                        <img
                                            src={logo}
                                            alt="Uploaded Logo"
                                            className="w-40 h-40 object-contain mx-auto"
                                        />
                                    </div>
                                )}
                                <button
                                    className="mt-4 bg-blue-500 dark:text-white text-white py-2 px-4 rounded hover:bg-green-600"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                                {savedMessage && <p className="mt-2 text-green-600">{savedMessage}</p>}
                                <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className="bg-green-500 h-full rounded-full"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                            </div>
                        ) :
                            selectedContent === 'Customer sign-off authority content...' ? ( // Matching with the actual content
                                <div>
                                    <h1 className='text-2xl mb-2 dark:text-white'>Sign-off Authority</h1>
                                    <div className='flex justify-center'>
                                        <form onSubmit={handleSignOffSubmit} className="space-y-4 w-auto">
                                            {/* Input fields for customer sign-off authority */}
                                            <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required className="border p-2 rounded w-full dark:text-white" />
                                            <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required className="border p-2 rounded w-full dark:text-white" />
                                            <input type="text" placeholder="Project Type" value={projectType} onChange={(e) => setProjectType(e.target.value)} required className="border p-2 rounded w-full dark:text-white" />
                                            <input type="text" placeholder="Warehouse Number" value={warehouseNumber} onChange={(e) => setWarehouseNumber(e.target.value)} required className="border p-2 rounded w-full dark:text-white" />
                                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            ) :
                                (
                                    <p className='dark:text-white'>{selectedContent === "-" || 'No content selected...'}</p>
                                )}
                    </div>
                </div>
  )
}

export default Center