window.onload = function () {
    emailjs.init("0t-Ri7FhCQJGNHNyL");
  
    const form = document.querySelector(".contact-form");
    const btn = document.querySelector(".send-button");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      btn.disabled = true;
      let loader = document.querySelector(".loader")
      loader.style.display = "flex"
      btn.innerHTML = "Enviando..."
  
      console.log("► Tentando enviar formulário", {
        service: "service_9wwgq9p",
        template: "template_swza1g7",
        formElement: form
      });
  
      emailjs.sendForm("service_9wwgq9p", "template_swza1g7", form)
        .then((result) => {
          console.log("✅ EmailJS result:", result);
          let msg = document.querySelector(".mensagem-text")
          msg.style.display = "flex"     
          msg.innerText = "Mensagem enviada com Sucesso!"
          setTimeout(() => {
            msg.style.display = "none";
          }, 3000);
          console.log(msg)
          form.reset();
        })
        .catch((error) => {
          console.error("🚨 EmailJS error:", error);
          let msg = document.querySelector(".mensagem-text")
          msg.style.display = "flex";     
          msg.innerText = "Erro ao enviar Mensagem! Tente Novamente" 
        })
        .finally(() => {
          btn.disabled = false;
          btn.innerText = "Enviar";
          loader.style.display = "none"
        });
    });
  };