const form = () => {

    const form = document.getElementById("contact-form");
    const txtEnviar = document.querySelector('.txtEnviar');
    const txtEnviando = document.querySelectorAll('.txtEnviando');
    const alertForm = document.querySelector('.alertForm');
    const alertStatus = document.getElementById('alertCodigo');
    const alertMessage = document.getElementById('alertMessage');
    let base_url = window.location.origin;

    const lodingActive = (enviar,enviando) =>{
        txtEnviar.style.display = enviar;
        txtEnviando.forEach(element => {
            element.style.display = enviando;
        });
    }
    const loadingAlert = (classAdd, code, message) =>{
        alertForm.style.display = "block";
        alertForm.classList.add(classAdd);
        alertStatus.textContent = alertStatus.textContent.replace("code", code);
        alertMessage.textContent = alertMessage.textContent.replace("message", message);
    }

    const formEvent = form.addEventListener("submit", (event) => {
        event.preventDefault();
        lodingActive("none","block");
        let mail = new FormData(form);
        sendMail(mail);
    });

    const sendMail = (mail) => {
        fetch(`${base_url}/send`, {
            method: "post",
            body: mail,
        }).then((response) => {
            console.log(response);
            if(response.status == 200){
                lodingActive("block","none");
                loadingAlert("alert-success","Obrigado, em breve vamos entrar em contato.");
            }
            if(response.status == 404 || response.status == 304 || response.status == 405){
                lodingActive("block","none");
                loadingAlert("alert-danger", response.status, "ocorreu um erro por favor tente em outro momento.");
            }
            return response.json();
        }).catch((error) =>{
            lodingActive("block","none");
            console.log("error teste")
            console.log(error);
        });
    };
}

export { form }
