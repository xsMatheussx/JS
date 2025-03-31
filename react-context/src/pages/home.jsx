import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Github, Instagram, Youtube, Linkedin } from "lucide-react";
import { api } from "../services/api";
import { useEffect, useState } from "react";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  /* const [profileIMG, setProfileIMG] = useState([]);
  const [userName, setUserName] = useState([]); */

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/xsMatheussx");
        setUser(response.data);
        console.log(response);
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário", error);
      }
    }
    getUserData();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <img
        src={user.avatar_url}
        alt={`Imagem do ${user.name}`}
        title={`Imagem do ${user.name}`}
        className="imgPerfil"
      />
      <p>@{user.login}</p>

      <div className="toggle-container" onClick={toggleTheme}>
        <div className="toggle-switch">
          {theme === "dark" ? (
            <Moon size={20} color="black" />
          ) : (
            <Sun size={20} color="black" />
          )}
        </div>
      </div>

      <div className={`buttons ${theme}`}>
        <button className="inscreva">Inscreva-se no NLW</button>
        <button className="ebook">Baixe meu e-book</button>
        <button className="portifolio">Veja meu portifólio</button>
        <button className="explorer">Conheça o Explorer</button>
      </div>

      <div className="icons">
        <Github className="iconGit" />
        <Instagram className="iconInsta" />
        <Youtube className="iconYou" />
        <Linkedin className="iconIn" />
      </div>
    </div>
  );
}
