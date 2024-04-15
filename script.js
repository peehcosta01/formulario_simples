// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
  // Obtém o formulário pelo ID
  const form = document.getElementById("contactForm");

  // Adiciona um ouvinte de eventos para o envio do formulário
  form.addEventListener("submit", function(event) {
      // Previne o envio padrão do formulário
      event.preventDefault();
      
      // Obtém os valores dos campos do formulário
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Validação dos campos do formulário
      if (name.trim() === "") {
          alert("Por favor, insira seu nome.");
          return;
      }

      if (email.trim() === "" || !isValidEmail(email)) {
          alert("Por favor, insira um email válido.");
          return;
      }

      if (message.trim() === "") {
          alert("Por favor, insira sua mensagem.");
          return;
      }

      // Aqui você pode enviar os dados do formulário para o backend ou fazer outra coisa com eles
      console.log("Nome:", name);
      console.log("Email:", email);
      console.log("Mensagem:", message);

      // Limpa o formulário após o envio bem-sucedido
      form.reset();
  });

  // Função para validar o formato do email usando uma expressão regular
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
