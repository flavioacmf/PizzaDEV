const express = require('express');
const router = express.Router();
const { verificarAutenticacao } = require('../middlewares/authMiddleware');
const { listarCategorias, criarCategoria, atualizarCategoria, excluirCategoria } = require('../controllers/categoriaController');

// Rota para listar categorias
router.get('/', verificarAutenticacao, listarCategorias);

// Rota para criar uma nova categoria
router.post('/', verificarAutenticacao, criarCategoria);

// Rota para atualizar uma categoria
router.put('/:id', verificarAutenticacao, atualizarCategoria);

// Rota para excluir uma categoria
router.delete('/:id', verificarAutenticacao, excluirCategoria);

module.exports = router;
