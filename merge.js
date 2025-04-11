// import PDFMerger from 'pdf-merger-js';

// var merger = new PDFMerger();

// const mergePdfs = async (p1, p2) => {
//   await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
//   await merger.add(p2); // merge only page 2
//   // await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
// //   await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
// //   await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
// //   await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)

//   // Set metadata
//   await merger.setMetadata({
//     producer: "pdf-merger-js based script",
//     author: "John Doe",
//     creator: "John Doe",
//     title: "My live as John Doe"
//   });

//   await merger.save('public/merged.pdf'); //save under given name and reset the internal document
  
//   // Export the merged PDF as a nodejs Buffer
//   // const mergedPdfBuffer = await merger.saveAsBuffer();
//   // fs.writeSync('merged.pdf', mergedPdfBuffer);
// }
// // module.exports = {mergePdfs}
// export { mergePdfs };

// import PDFMerger from 'pdf-merger-js';
// var merger = new PDFMerger();

// const mergePdfs = async (p1, p2, pages1 = '', pages2 = '') => {
//   const merger = new PDFMerger(); // naya instance bnata hai harr barr
//   await merger.add(p1, pages1 || undefined); // Pass empty string as undefined
//   await merger.add(p2, pages2 || undefined);

//   await merger.save('public/merged.pdf');
// };

// export { mergePdfs };
import PDFMerger from 'pdf-merger-js';
import fs from 'fs';

const mergePdfs = async (p1, p2, pages1 = '', pages2 = '') => {
  const merger = new PDFMerger();

  // If page range is empty or only whitespace, merge all
  await merger.add(p1, pages1.trim() !== '' ? pages1 : undefined);
  await merger.add(p2, pages2.trim() !== '' ? pages2 : undefined);

  // Save merged file
  await merger.save('public/merged.pdf');

  // Optional: Delete the uploaded files to clean up
  fs.unlinkSync(p1);
  fs.unlinkSync(p2);
};

export { mergePdfs };

