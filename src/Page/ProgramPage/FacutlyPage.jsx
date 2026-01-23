import React, { useState, useEffect, useCallback } from 'react';
import Layout from '../../component/ProgramComponent/Layout.jsx';
import Sidebar from '../../component/ProgramComponent/Sidebar.jsx';
import MainContent from '../../component/ProgramComponent/MainContent.jsx';
import ContactSidebar from '../../component/ProgramComponent/ContactSidebar.jsx';
import { SectionID } from '../../Utils/types';
import { PROGRAM_SECTIONS } from '../../Utils/constants';
// import { generateSectionContent } from '../../services/geminiService.js';
export default function FacultyPage(){
    const [activeSectionId, setActiveSectionId] = useState(SectionID.ADMISSION);
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const activeSection = PROGRAM_SECTIONS.find(s => s.id === activeSectionId) || PROGRAM_SECTIONS[0];

    const fetchContent = useCallback(async (sectionTitle) => {
        setIsLoading(true);
        const result = await generateSectionContent(sectionTitle);
        setContent(result);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchContent(activeSection.title);
    }, [activeSectionId, activeSection.title, fetchContent]);

    const handleSectionSelect = (id) => {
        setActiveSectionId(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return(
        <Layout>
        <Sidebar 
            activeId={activeSectionId} 
            onSelect={handleSectionSelect} 
        />
      
        <MainContent 
            title={activeSection.title}
            content={content}
            loading={isLoading}
        />
      
        <ContactSidebar />
        </Layout>

    )
 }