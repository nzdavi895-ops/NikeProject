// Função principal que gerencia o tema
function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

  // Aplica ou remove a classe 'dark' diretamente no elemento HTML raiz
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Atualiza o ícone do botão se ele estiver presente na página atual
  const themeToggleBtn = document.getElementById("themeToggle");
  if (themeToggleBtn) {
    themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
  }
}

// Configura o ouvinte de clique para o botão de alternância de tema
function setupThemeButton() {
  const themeToggleBtn = document.getElementById("themeToggle");
  
  if (themeToggleBtn) {
    // Remove ouvintes antigos para evitar duplicações de eventos na memória
    themeToggleBtn.replaceWith(themeToggleBtn.cloneNode(true));
    
    // Pega a nova referência do botão clonado
    const activeBtn = document.getElementById("themeToggle");
    
    activeBtn.addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      
      if (isCurrentlyDark) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        activeBtn.textContent = "🌙";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        activeBtn.textContent = "☀️";
      }
    });
  }
}

// Executa imediatamente para evitar o efeito de "piscada branca" ao carregar a página
applyTheme();

// Garante a execução correta assim que toda a estrutura da página HTML estiver pronta
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  setupThemeButton();
});
