import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/auth';
import { getFichas, createFicha, deleteFicha, type FichaDeTreino, type Exercicio } from '../services/fichas';


export function Dashboard() {
  const navigate = useNavigate();
  const [fichas, setFichas] = useState<FichaDeTreino[]>([]);
  const [nomeFicha, setNomeFicha] = useState('');
  
  // Campos do exercício atual
  const [nomeExercicio, setNomeExercicio] = useState('');
  const [series, setSeries] = useState(3);
  const [repeticoes, setRepeticoes] = useState(10);
  const [carga, setCarga] = useState('');
  const [listaExercicios, setListaExercicios] = useState<Exercicio[]>([]);

  useEffect(() => {
    carregarFichas();
  }, []);

  const carregarFichas = async () => {
    try {
      const data = await getFichas();
      setFichas(data);
    } catch (err) {
      console.error('Erro ao buscar fichas:', err);
    }
  };

  const handleAddExercicio = () => {
    if (!nomeExercicio) return;
    setListaExercicios([
      ...listaExercicios,
      { nome: nomeExercicio, series, repeticoes, carga }
    ]);
    setNomeExercicio('');
    setCarga('');
  };

  const handleSaveFicha = async (e: FormEvent) => {
    e.preventDefault();
    if (!nomeFicha || listaExercicios.length === 0) {
      alert('Informe o nome da ficha e adicione ao menos um exercício.');
      return;
    }

    try {
      await createFicha({ nome: nomeFicha, exercicios: listaExercicios });
      setNomeFicha('');
      setListaExercicios([]);
      carregarFichas();
    } catch (err) {
      alert('Erro ao salvar ficha de treino.');
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    try {
      await deleteFicha(id);
      carregarFichas();
    } catch (err) {
      alert('Erro ao excluir ficha.');
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Painel IronFit 🏋️‍♂️</h1>
        <button onClick={handleLogout} style={{ padding: '8px 16px', cursor: 'pointer' }}>Sair</button>
      </div>

      <hr style={{ margin: '20px 0' }} />

      <h3>Nova Ficha de Treino</h3>
      <form onSubmit={handleSaveFicha} style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nome da Ficha: </label>
          <input 
            type="text" 
            placeholder="Ex: Treino A - Peito e Tríceps"
            value={nomeFicha} 
            onChange={(e) => setNomeFicha(e.target.value)} 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ border: '1px solid #444', padding: '15px', borderRadius: '6px', marginBottom: '10px' }}>
          <h4>Adicionar Exercício</h4>
          <input 
            type="text" 
            placeholder="Nome do exercício (ex: Supino Reto)" 
            value={nomeExercicio} 
            onChange={(e) => setNomeExercicio(e.target.value)}
            style={{ width: '100%', padding: '6px', marginBottom: '8px' }}
          />
          <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
            <input type="number" placeholder="Séries" value={series} onChange={(e) => setSeries(Number(e.target.value))} style={{ padding: '6px', width: '30%' }} />
            <input type="number" placeholder="Reps" value={repeticoes} onChange={(e) => setRepeticoes(Number(e.target.value))} style={{ padding: '6px', width: '30%' }} />
            <input type="text" placeholder="Carga (ex: 20kg)" value={carga} onChange={(e) => setCarga(e.target.value)} style={{ padding: '6px', width: '40%' }} />
          </div>
          <button type="button" onClick={handleAddExercicio} style={{ padding: '6px 12px', cursor: 'pointer' }}>+ Exercício</button>
        </div>

        {listaExercicios.length > 0 && (
          <div style={{ marginBottom: '10px' }}>
            <strong>Exercícios adicionados:</strong>
            <ul>
              {listaExercicios.map((ex, idx) => (
                <li key={idx}>{ex.nome} - {ex.series}x{ex.repeticoes} ({ex.carga || 'sem carga'})</li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Salvar Ficha de Treino
        </button>
      </form>

      <hr style={{ margin: '20px 0' }} />

      <h3>Minhas Fichas</h3>
      {fichas.length === 0 ? (
        <p>Nenhuma ficha cadastrada ainda.</p>
      ) : (
        fichas.map((f) => (
          <div key={f.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4>{f.nome}</h4>
              <button onClick={() => handleDelete(f.id)} style={{ color: '#ff4d4f', cursor: 'pointer' }}>Excluir</button>
            </div>
            <ul>
              {f.exercicios.map((ex, i) => (
                <li key={i}>{ex.nome}: {ex.series}x{ex.repeticoes} - Carga: {ex.carga || 'N/A'}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}