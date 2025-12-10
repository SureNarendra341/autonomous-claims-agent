
import PDFParser from "pdf2json";

export const extractPdfText = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    try {
      const pdfParser = new PDFParser();

      pdfParser.on("pdfParser_dataError", err => {
        console.error("PDF parsing error:", err.parserError);
        reject(err.parserError);
      });

      pdfParser.on("pdfParser_dataReady", pdfData => {
        try {
          const pages = pdfData?.formImage?.Pages || [];

          let extractedText = "";

          pages.forEach(page => {
            if (!page.Texts) return;

            page.Texts.forEach(textObj => {
              textObj.R.forEach(run => {
                extractedText += decodeURIComponent(run.T) + " ";
              });
            });
          });

          resolve(extractedText.trim());
        } catch (err) {
          reject(err);
        }
      });

      pdfParser.parseBuffer(fileBuffer);
    } catch (err) {
      reject(err);
    }
  });
};

