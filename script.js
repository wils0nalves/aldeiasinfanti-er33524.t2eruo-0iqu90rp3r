function verificarCredenciais() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const alerta = document.getElementById("alerta");
  
    if (login && senha) {
      alerta.textContent = "Atenção! Suas credenciais poderíam ter sido expostas!";
      conforto.textContent = "Esta página é uma simulação de ataque de phishing. Nenhum dado foi vazado. Tome cuidado ao clicar em links suspeitos e nunca compartilhe suas informações pessoais com fontes não confiáveis.";
      conte.textContent = "Conte sempre a Equipe de TIC. Qualquer dúvida mande um e-mail para helpdesk@aldeiasinfantis.org.br";
    } else {
      alerta.textContent = "Por favor, preencha o login e a senha corretamente.";
    }
  }
  