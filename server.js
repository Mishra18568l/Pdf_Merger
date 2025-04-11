const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const {mergePdfs} = require('./merge')
const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"template/index.html"))
})


// app.post('/merge', upload.array('pdfs',3), async (req, res, next)=>{
// console.log(req.files)
// await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
// res.redirect("http://localhost:3000/static/merged.pdf")
// // res.send({data: req.files})
// })
// app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
//   const files = req.files;
//   const { pages1, pages2 } = req.body;

//   // await mergePdfs(
//   //   path.join(__dirname, files[0].path),
//   //   path.join(__dirname, files[1].path),
//   //   pages1,
//   //   pages2
//   // );
//   await mergePdfs(
//     path.join(__dirname, files[0].path),
//     path.join(__dirname, files[1].path),
//     req.body.pages1,
//     req.body.pages2
//   );
  

//   res.redirect("http://localhost:3000/static/merged.pdf");
// });

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  const files = req.files;
  const pages1 = req.body.pages1 || '';
  const pages2 = req.body.pages2 || '';

  await mergePdfs(
    path.join(__dirname, files[0].path),
    path.join(__dirname, files[1].path),
    pages1,
    pages2
  );

  res.redirect("http://localhost:3000/static/merged.pdf");
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})