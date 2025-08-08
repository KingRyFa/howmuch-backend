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
// Configuration middleware - permet la communication avec ton frontend\
app.use(cors(\{\
    origin: ['https://ton-site.static.app', 'http://localhost:3000'],\
    methods: ['GET', 'POST']\
\}));\
app.use(express.json());\
\
// Route de sant\'e9 - teste que ton backend fonctionne\
app.get('/', (req, res) => \{\
    res.json(\{ \
        message: "\uc0\u9989  Backend How Much op\'e9rationnel !",\
        status: "OK",\
        timestamp: new Date().toISOString()\
    \});\
\});\
\
// Route API principale - re\'e7oit les recherches de produits\
app.post('/api/search', (req, res) => \{\
    try \{\
        const \{ produit, pays \} = req.body;\
        \
        // Validation des donn\'e9es re\'e7ues\
        if (!produit || !pays) \{\
            return res.status(400).json(\{\
                success: false,\
                error: "Produit et pays requis"\
            \});\
        \}\
\
        // Donn\'e9es simul\'e9es selon le pays\
        let resultats = [];\
        \
        if (pays === 'fr') \{\
            resultats = [\
                \{ store: "Amazon.fr", price: "1,299\'80", availability: "En stock", delivery: "24h" \},\
                \{ store: "Fnac.com", price: "1,329\'80", availability: "En stock", delivery: "48h" \},\
                \{ store: "Cdiscount", price: "1,249\'80", availability: "En stock", delivery: "72h" \}\
            ];\
        \} else if (pays === 'ma') \{\
            resultats = [\
                \{ store: "Jumia.ma", price: "14,999 MAD", availability: "En stock", delivery: "24-48h" \},\
                \{ store: "Micromagma.ma", price: "15,200 MAD", availability: "En stock", delivery: "48h" \},\
                \{ store: "Electroplanet.ma", price: "14,750 MAD", availability: "Rupture", delivery: "N/A" \}\
            ];\
        \}\
        \
        res.json(\{ \
            success: true,\
            query: \{ produit, pays \},\
            results: resultats,\
            timestamp: new Date().toISOString()\
        \});\
        \
    \} catch (error) \{\
        res.status(500).json(\{\
            success: false,\
            error: "Erreur serveur"\
        \});\
    \}\
\});\
\
// Configuration port pour Render\
const PORT = process.env.PORT || 3000;\
app.listen(PORT, '0.0.0.0', () => \{\
    console.log(`\uc0\u55357 \u56960  Backend How Much d\'e9marr\'e9 sur le port $\{PORT\}`);\
\});\
}