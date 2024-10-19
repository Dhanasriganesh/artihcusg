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


const templates = [
    { id: 1, name: '1', document: docu },
    { id: 2, name: '2', document: docu },
    { id: 3, name: '3', document: docu },
    { id: 4, name: 'Add', document: doc1 },  // Integrated Template 4
];

const documentStructure = [
    {
        id: '1', title: 'Document Control',
        subHeadings: [
            {
                id: '1.1', title: 'Customer',
                subSubHeadings: [
                    { id: '1.1.1', title: 'Logo', content: 'Logo' }, // Logo section
                    { id: '1.1.2', title: 'Sign-off Authority', content: 'Customer sign-off authority content...' }
                ]
            },
            {
                id: '1.2', title: 'Vendor',
                subSubHeadings: [
                    { id: '1.2.1', title: 'Logo', content: 'Vendor logo content...' },
                    { id: '1.2.2', title: 'Sign-off Authority', content: 'Vendor sign-off authority content...' }
                ]
            },
            { id: '1.3', title: 'Document Title', content: 'Document Title content...' },
            { id: '1.4', title: 'Project Identification', content: 'Project Identification content...' },
            {
                id: '1.5', title: 'Version',
                subSubHeadings: [
                    { id: '1.5.1', title: 'Generate Version', content: 'Generate Version content...' },
                    { id: '1.5.2', title: 'Edit Document', content: 'Edit Document content...' }
                ]
            },
        ]
    },
    { id: '2', title: 'Scope Items', content: 'Scope items content...' },
    {
        id: '3', title: 'Table of contents',
        subHeadings: [
            { id: '3.1', title: 'Introduction', content: 'Introduction content...' },
            { id: '3.2', title: 'Document Overview', content: 'Document Overview content...' },
            { id: '3.3', title: 'Purpose of this document', content: 'Purpose content...' },
            { id: '3.4', title: 'How to read document', content: 'How to read content...' },
            { id: '3.5', title: 'Glossary', content: 'Glossary content...' },
            {
                id: '3.6', title: 'Process area-1',
                subSubHeadings: [
                    { id: '3.6.1', title: 'Process definition', content: 'Process definition content...' },
                    { id: '3.6.2', title: 'Process details', content: 'Process details content...' },
                    { id: '3.6.3', title: 'Business benefits', content: 'Business benefits content...' },
                    { id: '3.6.4', title: 'Key process flow', content: 'Key process flow content...' },
                    { id: '3.6.5', title: 'Process flowchart', content: 'Process flowchart content...' },
                    { id: '3.6.6', title: 'Process narrative', content: 'Process narrative content...' },
                ]
            },
            { id: '3.7', title: 'Organizational structure', content: 'Organizational structure content...' },
            { id: '3.8', title: 'Master data considerations', content: 'Master data considerations content...' },
            { id: '3.9', title: 'Major business pain points', content: 'Pain points content...' },
            { id: '3.10', title: 'Reports', content: 'Reports content...' },
            { id: '3.11', title: 'Enhancements', content: 'Enhancements content...' },
            { id: '3.12', title: 'Conversions', content: 'Conversions content...' },
            { id: '3.13', title: 'Forms and Labels', content: 'Forms and Labels content...' },
            { id: '3.14', title: 'Interfaces', content: 'Interfaces content...' },
            { id: '3.15', title: 'Key integration points', content: 'Key integration points content...' },
            { id: '3.16', title: 'Gap analysis', content: 'Gap analysis content...' }
        ]
    }
];
export default function Leftsidebar () {
    const [showTemplates, setShowTemplates] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [openSections, setOpenSections] = useState({});
    const [sidebarWidth, setSidebarWidth] = useState(350); // Initial width of the sidebar
    const [selectedContent, setSelectedContent] = useState(null);
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);
    const [isTemplateSelected, setIsTemplateSelected] = useState(false);
    const [previewDocument, setPreviewDocument] = useState(null);
    const navigate = useNavigate();

    // Handle template selection
    const handleTemplateSelect = (id) => {
        setSelectedTemplate(id);
        const selected = templates.find(template => template.id === id);
        if (selected) {
            setPreviewDocument(selected.document);
            setIsPreviewVisible(true); // Show the preview section when a template is clicked
            setIsTemplateSelected(true);
            // Automatically navigate to WordEditor if Template 4 is selected
            if (id === 4) {
                navigate('/editor', { state: { templateId: id } });
            }
        }
    };


    // Toggle section for showing sub-headings or sub-sub-headings
    const toggleSection = (id) => {
        setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Handle click to display content in the center panel
    // Handle click to display content in the center panel
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




  return (
    <div className=" bg-gray-100 p-4 space-y-5 border-r border-gray-300 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
                    style={{ width: `${sidebarWidth}px`, maxHeight: '100vh' }}>
                    {/* Template Icons */}
                    <div className='flex items-center mb-6 dark:text-white'>
                        <button
                            className="bg-gray-700 text-white p-2 rounded"
                            onClick={() => setShowTemplates(!showTemplates)} // Toggle visibility on button click
                        >
                            <CgTemplate />
                        </button>
                        <h2 className="text-xl font-serif ml-4">Templates</h2>
                    </div>
                    {/* Display templates only if showTemplates is true */}
                    {showTemplates && (
                        <div className="space-y-4 flex flex-row gap-5 mt-10">
                            {templates.map((template) => (
                                <div
                                    key={template.id}
                                    className={`relative cursor-pointer p-2 rounded-md transition-transform duration-200 hover:scale-105 ${selectedTemplate === template.id ? 'bg-orange-300' : 'bg-white'}`}
                                    onClick={() => handleTemplateSelect(template.id)}
                                >
                                    <div className="flex justify-center">
                                        <CgTemplate className="" />
                                    </div>
                                    <p className="text-center mt-2 font-serif truncate">{template.name}</p>
                                    {selectedTemplate === template.id && (
                                        <div className="absolute top-2 right-4 text-2xl text-green-500">✔️</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    {/* Document Structure - Headings and Sub-headings */}
                    <div className="mt-8 space-y-2 overflow-y-scroll dark:text-white" style={{ maxHeight: '75vh' }}>
                        {documentStructure.map(section => (
                            <div key={section.id}>
                                <h3
                                    className="font-serif text-orange-600 text-lg cursor-pointer flex items-center "
                                    onClick={() => toggleSection(section.id)}
                                >
                                    {/* Use icons conditionally based on whether the section is open */}
                                    {openSections[section.id] ? <FaCaretDown /> : <FaCaretRight />} {section.title}
                                </h3>
                                {openSections[section.id] && (
                                    <div className="pl-8 space-y-1">
                                        {section.subHeadings && section.subHeadings.map(sub => (
                                            <div key={sub.id}>
                                                <h4
                                                    className="font-serif cursor-pointer text flex dark:text-white"
                                                    onClick={() => toggleSection(sub.id)}
                                                >
                                                    {/* Use icons conditionally for subheadings */}
                                                    {openSections[sub.id] ? <FaCaretDown /> : <FaCaretRight />}{sub.title}
                                                </h4>
                                                {openSections[sub.id] && (
                                                    <div className="pl-8">
                                                        {sub.subSubHeadings ? sub.subSubHeadings.map(subSub => (
                                                            <p
                                                                key={subSub.id}
                                                                className="cursor-pointer font-serif text-gray-600 dark:text-white"
                                                                onClick={() => handleContentSelect(subSub.content)}
                                                            >
                                                                {subSub.title}
                                                            </p>
                                                        )) : (
                                                            <p
                                                                className="cursor-pointer text-gray-600"
                                                                onClick={() => handleContentSelect(sub.content)}
                                                            >
                                                                {sub.title}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        {section.content && (
                                            <p
                                                className="cursor-pointer text-gray-600 dark:text-white"
                                                onClick={() => handleContentSelect(section.content)}
                                            >
                                                {section.content}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>



                    {/* <button
                    className="bg-blue-600 text-white py-2 px-4 mt-10 rounded hover:bg-blue-700 w-full"
                    onClick={() => navigate('/final')}
                >
                    Next
                </button> */}




                </div>
  )
}