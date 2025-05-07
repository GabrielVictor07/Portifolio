window.onload = function () {
    emailjs.init("0t-Ri7FhCQJGNHNyL");
  
    const form = document.querySelector(".contact-form");
    const btn = document.querySelector(".send-button");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      btn.disabled = true;
      btn.innerText = "Enviando…";
  
      console.log("► Tentando enviar formulário", {
        service: "service_9wwgq9p",
        template: "template_swza1g7",
        formElement: form
      });
  
      emailjs.sendForm("service_9wwgq9p", "template_swza1g7", form)
        .then((result) => {
          console.log("✅ EmailJS result:", result);
          alert("Mensagem enviada com sucesso!");
          form.reset();
        })
        .catch((error) => {
          console.error("🚨 EmailJS error:", error);
          alert("Erro ao enviar. Veja console para detalhes.");
        })
        .finally(() => {
          btn.disabled = false;
          btn.innerText = "Enviar";
        });
    });
  };
  