{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 .SFNSMono-Light_YAXS144F062_wght2260000;}
{\colortbl;\red255\green255\blue255;\red16\green39\blue45;\red240\green240\blue234;}
{\*\expandedcolortbl;;\cssrgb\c7451\c20392\c23137;\cssrgb\c95294\c95294\c93333;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh17520\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const express = require('express');\
const cors = require('cors');\
const app = express();\
\
// Autorise ton frontend \'e0 communiquer avec ce backend\
app.use(cors());\
app.use(express.json());\
\
// Route de test - v\'e9rifie que le backend fonctionne\
app.get('/', (req, res) => \{\
    res.json(\{ message: "\uc0\u9989  Backend How Much op\'e9rationnel" \});\
\});\
\
// Route principale - re\'e7oit les recherches de ton frontend\
app.post('/api/search', (req, res) => \{\
    const \{ produit, pays \} = req.body;\
    \
    // Donn\'e9es simul\'e9es selon le pays choisi\
    const results = pays === 'ma' ? [\
        \{ store: "Jumia.ma", price: "3,200 MAD", availability: "En stock", delivery: "24h" \},\
        \{ store: "Electroplanet.ma", price: "3,150 MAD", availability: "En stock", delivery: "48h" \}\
    ] : [\
        \{ store: "Amazon.fr", price: "1,299\'80", availability: "En stock", delivery: "24h" \},\
        \{ store: "Fnac.com", price: "1,329\'80", availability: "En stock", delivery: "48h" \}\
    ];\
    \
    res.json(\{ success: true, query: \{ produit, pays \}, results \});\
\});\
\
// Configuration port pour Render\
const PORT = process.env.PORT || 3000;\
app.listen(PORT, '0.0.0.0', () => console.log(`\uc0\u55357 \u56960  Backend port $\{PORT\}`));\
..}