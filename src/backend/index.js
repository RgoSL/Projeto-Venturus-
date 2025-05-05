require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const USERS_PATH = path.join(__dirname, 'data', 'users.json');
const key = Buffer.from(process.env.SECRET_KEY);

// Criptografar
function encryptData(data) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return {
    iv: iv.toString('hex'),
    data: encrypted
  };
}

app.post('/criar-usuario', (req, res) => {
  const dados = req.body;
  const encrypted = encryptData(dados);

  let all = [];
  if (fs.existsSync(USERS_PATH)) {
    all = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8') || '[]');
  }

  all.push(encrypted);
  fs.writeFileSync(USERS_PATH, JSON.stringify(all, null, 2));
  res.json({ mensagem: "Usuário criptografado e salvo com sucesso." });
});


app.get('/usuarios', (req, res) => {
    if (!fs.existsSync(USERS_PATH)) {
      return res.json([]);
    }

    const encryptedData = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8') || '[]');

    const decryptData = (entry) => {
      try {
        const iv = Buffer.from(entry.iv, 'hex');
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        let decrypted = decipher.update(entry.data, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return JSON.parse(decrypted);
      } catch (error) {
        console.error("Erro ao descriptografar:", error.message);
        return null;
      }
    };

    const descriptografados = encryptedData
      .map(decryptData)
      .filter(Boolean);

    res.json(descriptografados);
  });

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
