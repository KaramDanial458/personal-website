import React, { useState } from 'react';
import { ResumeContainer, Image, Button } from './ResumeElements';
import Resume from '../../Assets/NewGradResume.png';
import { jsPDF } from "jspdf";

const pdfDoc = new jsPDF()

const ResumeSection = () => {
    return (
        <>
            <ResumeContainer id="experience">
                <Image src={Resume} />
                <Button onClick={downloadPDF}>Download Resume PDF</Button>
            </ResumeContainer>
        </>
    )
}

function downloadPDF() {
    pdfDoc.addImage(Resume, 'PNG', 0, 0, 210, 297);
    pdfDoc.save('Karam_Danial_Resume');
}

export default ResumeSection