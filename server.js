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

app.get("/sitemap", (req, res) => {
    res.setHeader("Content-Type", "text/xml")
    res.write(`
    <?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
<url>
  <loc>https://aqlpeduli.or.id/</loc>
  <lastmod>2020-12-23T06:53:47+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://aqlpeduli.or.id/kepedulian</loc>
  <lastmod>2020-12-23T06:53:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aqlpeduli.or.id/relawan</loc>
  <lastmod>2020-12-23T06:53:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aqlpeduli.or.id/profil</loc>
  <lastmod>2020-12-23T06:53:47+00:00</lastmod>
  <priority>0.60</priority>
</url>
<url>
  <loc>https://aqlpeduli.or.id/berita</loc>
  <lastmod>2020-12-23T06:53:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aqlpeduli.or.id/informasi</loc>
  <lastmod>2020-12-23T06:53:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aqlpeduli.or.id/khazanah</loc>
  <lastmod>2020-12-23T06:53:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
</urlset>
    `)
    res.end()
})

app.get("/", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli \- Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Home');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        var result = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/");
        // var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
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
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
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
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/kepedulian/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var gambar = req.query.img
    console.log(gambar)
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Kepedulian | ${judul2}`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/kepedulian/${temp}`);
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, `${gambar}`);
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
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/berita/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var gambar = req.query.img
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Berita | ${judul2}`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/berita/${temp}`);
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, `${gambar}`);
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
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/khazanah/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var gambar = req.query.img
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Khazanah | ${judul2}`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/khazanah/${temp}`);
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, `${gambar}`);
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
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/relawan-sukses", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Relawan');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/relawan");
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/kepedulian-kita", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Kepedulian Kita');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/kepedulian-kita");
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/kepedulian-kita/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Kepedulian Kita`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/kepedulian-kita/${temp}`);
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/beritanasional", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Berita | Nasional');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/beritanasional");
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/beritainter", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Berita | Internasional');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/beritainter");
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/events", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Berita | Events');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/events");
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/events/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var gambar = req.query.img
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Events`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/events/${temp}`);
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, `${gambar}`);
        response.send(result);
    });
})

app.get("/informasi", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, 'AQL Peduli | Informasi');
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, "https://aqlpeduli.or.id/informasi");
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, 'https://res.cloudinary.com/aql-peduli/image/upload/v1623139154/large_logo_aql_65cc6815e92_jyywvk.png');
        response.send(result);
    });
})

app.get("/galeri/:judul", (req, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    var temp = req.params.judul
    var gambar = req.query.img
    var judul2 = temp.split("-").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/AQL Peduli - Kemanusiaan, Relawan, dan Kepedulian/g, `AQL Informasi | Galeri`);
        data = data.replace(/AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat./g, "AQL Peduli adalah platform lembaga sosial dan kemanusiaan untuk masyarakat.");
        data = data.replace(/https:\/\/aqlpeduli\.or\.id/g, `https://aqlpeduli.or.id/galeri/${temp}`);
        var result = data.replace(/https:\/\/res.cloudinary.com\/aql\-peduli\/image\/upload\/v1623139154\/large_logo_aql_65cc6815e92_jyywvk\.png/g, `${gambar}`);
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


app.listen(port, () => console.log(`Listening on port ${port}`));