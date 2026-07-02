// Seleciona o botão de alternar o tema
const themeToggleBtn = document.getElementById("themeToggle");

// Função para aplicar o tema correto baseado no localStorage ou no sistema
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Se o usuário já escolheu escuro antes, ou se não escolheu nada mas o sistema dele é escuro
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add("dark");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️"; // Muda o ícone para sol
  } else {
    document.documentElement.classList.remove("dark");
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙"; // Muda o ícone para lua
  }
}

// Executa a função para definir o tema assim que a página carrega
initTheme();

// Adiciona o evento de clique ao botão, se ele existir na página
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    // Se estiver no modo escuro, muda para o claro
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeToggleBtn.textContent = "🌙";
    } else {
      // Se estiver no modo claro, muda para o escuro
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeToggleBtn.textContent = "☀️";
    }
  });
}
