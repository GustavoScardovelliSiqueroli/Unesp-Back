//palavra secreta utilizada para gerar o token de autenticação do JWT
const SECRET = 'combateLeite';

//informações de conexão do banco de dados MySql
const MYSQL_HOST = 'localhost';
const MYSQL_USER = 'root';
const MYSQL_PASSWORD = '';
const MYSQL_DB = 'sili';
const PORT = '3000';

module.exports = {
    SECRET,
    MYSQL_HOST,
    MYSQL_DB,
    MYSQL_USER,
    MYSQL_PASSWORD,
    PORT
};