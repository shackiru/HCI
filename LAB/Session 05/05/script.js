const inputText = document.getElementById("inputText")
const inputPassword = document.getElementById("inputPassword")
const inputNumber = document.getElementById("inputNumber")
const inputEmail = document.getElementById("inputEmail")
const inputGenderMale = document.getElementById("inputRadioMale")
const inputGenderFemale = document.getElementById("inputRadioFemale")
const buttonSubmit = document.getElementById("buttonSubmit")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")

buttonSubmit.addEventListener('click', (event)=>
{
    event.preventDefault()
    console.log("Test")

    var errorText = ""
    const text = inputText.value
    if(text == "")
    {
        console.log("Nama harus diisi!")
        errorText = errorText + "Nama harus diisi!<br>"
    }
    const password = inputPassword.value
    if(password.length < 8)
    {
        errorText = errorText + "Password minimal 8 character<br>"
    }

    const number = inputNumber.value
    if(number < 17)
    {
        errorText = errorText + "Minimal 17 tahun<br>"
    }

    const email = inputEmail.value
    if(email.includes("gmail.com") == false)
    {
        errorText = errorText + "Akun harus gmail<br>"
    }

    const genderMale = inputGenderMale.checked
    const genderFemale = inputGenderFemale.checked
    if(genderMale == false && genderFemale == false)
    {
        errorText = errorText + "Gender harus diisi"
    }

    if(errorText == "")
    {
        alert("Registrasi berhasil")
    }

    divError.innerHTML = errorText
})

const object = 
{
    name: "a",
    age: "10",
}

object.name = "b" // OK
object = {} //Error
delete object.age