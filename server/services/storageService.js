const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');

const generateCSV = (data) => {
    try {
        const parser = new Parser();
        return parser.parse(data);
    } catch (error) {
        throw new Error('CSV generation failed');
    }
};

const generatePDF = (data) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const buffers = [];

        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => resolve(Buffer.concat(buffers)));

        doc.fontSize(12).text(JSON.stringify(data, null, 2));
        doc.end();
    });
};

module.exports = { generateCSV, generatePDF };