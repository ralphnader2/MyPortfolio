function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    };

const serviceId = "service_oplc7yr";
const templateId = "template_dl4c0pq";

emailjs.send(serviceId, templateId, params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
        
    }
)
.catch((err) => console.log(err));

}