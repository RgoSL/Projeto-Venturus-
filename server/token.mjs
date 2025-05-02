import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import express from 'express';
import cors from 'cors';
import fs from 'fs';  // Importando o módulo fs para ler e escrever arquivos JSON
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const chaveSecreta = process.env.JWT_SECRET;

// Função para carregar os usuários do arquivo JSON
const carregarUsuarios = () => {
  try {
    const data = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return []; // Se o arquivo não existir, retorna um array vazio
  }
};

// Função para salvar os usuários no arquivo JSON
const salvarUsuarios = (usuarios) => {
  fs.writeFileSync('users.json', JSON.stringify(usuarios, null, 2), 'utf8');
};

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use((req, res, next) => {
  next();
});
// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  const users = carregarUsuarios();  // Carregar os usuários do arquivo

  const user = users.find(user => user.email === email);
  if (!user || !bcrypt.compareSync(senha, user.senha)) {
    return res.status(401).json({ message: "Credenciais inválidas." });
  }

  const token = jwt.sign(
    { email, nome: user.nome },
    chaveSecreta,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

// Rota de cadastro
// Rota de cadastro
app.post('/cadastro', async (req, res) => {
   console.log("Requisição de cadastro recebida!");
  const { nome, email, senha, dataNascimento } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: "Nome, email e senha são obrigatórios." });
  }

  const users = carregarUsuarios();  // Carregar os usuários do arquivo


  const userExist = users.find(user => user.email === email);
  if (userExist) {
    return res.status(400).json({ message: 'Usuário já existe' });
  }

  const hashedPassword = await bcrypt.hash(senha, 10);
  const newUser = { nome, email, senha: hashedPassword, dataNascimento };  // Incluindo o campo dataNascimento
  users.push(newUser);

  salvarUsuarios(users);  // Salva os usuários no arquivo JSON

  const token = jwt.sign(
    { email: newUser.email, nome: newUser.nome },
    chaveSecreta,
    { expiresIn: '1h' }
  );

  return res.status(201).json({ message: 'Usuário cadastrado com sucesso', token });
});

// middleware para verificar token
function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, chaveSecreta, (err, usuario) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido ou expirado' });
    }

    req.usuario = usuario;
    next();
  });
}


app.get('/usuario-info', autenticarToken, (req, res) => {
  res.json({
    email: req.usuario.email,
    nome: req.usuario.nome,
    mensagem: 'Acesso autorizado à área protegida!'
  });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
