// pages/index.js
import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  // Exemplo de efeito para carregar dados do Supabase
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Pegando dados de exemplo: playlists
        const { data, error } = await supabase
          .from('playlists')
          .select('*');

        if (error) throw error;

        setPlaylists(data);
      } catch (err) {
        console.error('Erro ao carregar playlists:', err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Bem-vindo ao Sonar 🎵</h1>
        {user ? <p>Olá, {user.email}</p> : <p>Faça login para começar</p>}
      </header>

      <main>
        {loading ? (
          <p>Carregando playlists...</p>
        ) : (
          <div className="playlists">
            {playlists.length === 0 ? (
              <p>Nenhuma playlist encontrada.</p>
            ) : (
              playlists.map((playlist) => (
                <div key={playlist.id} className="playlist-card">
                  <h3>{playlist.name}</h3>
                  <p>{playlist.description}</p>
                </div>
              ))
            )}
          </div>
        )}
      </main>

      <footer>
        <p>Desenvolvido por Graciano Kavita</p>
      </footer>
    </div>
  );
          }
