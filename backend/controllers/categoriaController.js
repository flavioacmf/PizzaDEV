const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Listar categorias
exports.listarCategorias = async (req, res) => {
    try {
        const { data, error } = await supabase.from('categoria').select('*');
        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Criar uma nova categoria
exports.criarCategoria = async (req, res) => {
    const { nome, descricao } = req.body;

    try {
        const { data, error } = await supabase.from('categoria').insert([{ nome, descricao }]);
        if (error) throw error;
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar categoria
exports.atualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
        const { data, error } = await supabase
            .from('categoria')
            .update({ nome, descricao })
            .eq('codigo', id);
        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir categoria
exports.excluirCategoria = async (req, res) => {
    const { id } = req.params;

    try {
        const { data, error } = await supabase.from('categoria').delete().eq('codigo', id);
        if (error) throw error;
        res.status(200).json({ message: "Categoria excluída com sucesso!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
