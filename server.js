// in my-app/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.use(express.static(path.resolve(__dirname, './build')));

// app.get('*', function(request, response) {
//   const filePath = path.resolve(__dirname, './build', 'index.html');
//   response.sendFile(filePath);
// });

app.get("/", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli \- Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Home');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpedul\.or\.id/g, "https://aqlpeduli.or.id/");
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
        response.send(result);
    });
})

app.get("/profil", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Profil');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/profil");
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
        response.send(result);
    });
})

app.get("/kepedulian", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Kepedulian');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/kepedulian");
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
        response.send(result);
    });
})

app.get("/kepedulian/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Kepedulian | ${judul2}`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/kepedulian/${temp}`);
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1614899445/Masjid_Taan_48d95459aa.jpg');
        response.send(result);
    });
})

app.get("/berita", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Berita');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/berita");
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
        response.send(result);
    });
})

app.get("/berita/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Berita | ${judul2}`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/berita/${temp}`);
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623053602/hijaukan_jember_2_8e2afa7fc3.jpg');
        response.send(result);
    });
})

app.get("/khazanah", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Khazanah');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/khazanah");
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
        response.send(result);
    });
})

app.get("/khazanah/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Khazanah | ${judul2}`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/khazanah/${temp}`);
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
        response.send(result);
    });
})

app.get("/relawan", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Relawan');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/relawan");
        result = data.replace(/\/iconaql\.png/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
        response.send(result);
    });
})

// app.get("/profil", (req, response) => {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         data = data.replace(/\$TITLE/g, 'AQL Peduli | Profil');
//         data = data.replace(/__DESC__/g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
//         data = data.replace(/__URL__/g, "https://aqlpeduli.or.id/profil");
//         result = data.replace(/__IMAGE__/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
//         response.send(result);
//     });
// })

// app.get("/kepedulian", (req, response) => {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         data = data.replace(/\$TITLE/g, 'AQL Peduli | Kepedulian');
//         data = data.replace(/__DESC__/g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
//         data = data.replace(/__URL__/g, "https://aqlpeduli.or.id/kepedulian");
//         result = data.replace(/__IMAGE__/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
//         response.send(result);
//     });
// })

// app.get("/kepedulian/:judul", (req, response) => {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         data = data.replace(/\$TITLE/g, `AQL Kepedulian | ${req.params.judul}`);
//         data = data.replace(/__DESC__/g, `${req.params.judul}`);
//         data = data.replace(/__URL__/g, `https://aqlpeduli.or.id/kepedulian/${req.params.judul}`);
//         result = data.replace(/__IMAGE__/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1614899445/Masjid_Taan_48d95459aa.jpg');
//         response.send(result);
//     });
// })

// app.get("/berita", (req, response) => {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         data = data.replace(/\$TITLE/g, 'AQL Peduli | Berita');
//         data = data.replace(/__DESC__/g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
//         data = data.replace(/__URL__/g, "https://aqlpeduli.or.id/berita");
//         result = data.replace(/__IMAGE__/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
//         response.send(result);
//     });
// })

// app.get("/berita/:judul", (req, response) => {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         data = data.replace(/\$TITLE/g, `AQL Berita | ${req.params.judul}`);
//         data = data.replace(/__DESC__/g, `${req.params.judul}`);
//         data = data.replace(/__URL__/g, `https://aqlpeduli.or.id/berita/${req.params.judul}`);
//         result = data.replace(/__IMAGE__/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623053602/hijaukan_jember_2_8e2afa7fc3.jpg');
//         response.send(result);
//     });
// })

// app.get("/khazanah", (req, response) => {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         data = data.replace(/\$TITLE/g, 'AQL Peduli | Khazanah');
//         data = data.replace(/__DESC__/g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
//         data = data.replace(/__URL__/g, "https://aqlpeduli.or.id/khazanah");
//         result = data.replace(/__IMAGE__/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
//         response.send(result);
//     });
// })

// app.get("/khazanah/:judul", (req, response) => {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         data = data.replace(/\$TITLE/g, `AQL Khazanah | ${req.params.judul}`);
//         data = data.replace(/__DESC__/g, `${req.params.judul}`);
//         data = data.replace(/__URL__/g, `https://aqlpeduli.or.id/khazanah/${req.params.judul}`);
//         result = data.replace(/__IMAGE__/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
//         response.send(result);
//     });
// })

// app.get("/relawan", (req, response) => {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         data = data.replace(/\$TITLE/g, 'AQL Peduli | Relawan');
//         data = data.replace(/__DESC__/g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
//         data = data.replace(/__URL__/g, "https://aqlpeduli.or.id/relawan");
//         result = data.replace(/__IMAGE__/g, 'https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png');
//         response.send(result);
//     });
// })

app.listen(port, () => console.log(`Listening on port ${port}`));