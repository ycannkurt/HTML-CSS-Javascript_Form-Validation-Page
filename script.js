const form = document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('mobile')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    validate();
})


function validate() {
    const firstNameVal = firstname.value
    const lastNameVal = lastname.value
    const usernameVal = username.value
    const emailVal = email.value
    const phoneVal = phone.value
    const passwordVal = password.value
    const password2Val = password2.value
    const dateString = birthday.value

    //first name
    if (firstNameVal === '') {
        setErrorMsg(firstname, 'İsim gerekli')
    } else if (firstNameVal.length < 2) {
        setErrorMsg(firstname, 'İsim en az iki karakter olmalı')
    } else {
        setSuccessMsg(firstname)
    }
    // //last name
    // if (lastNameVal === '') {
    //     setErrorMsg(lastname, 'Soyisim gerekli')
    // } else if (lastNameVal.length < 2) {
    //     setErrorMsg(lastname, 'Soyisim en az iki karakter olmalı')
    // } else {
    //     setSuccessMsg(lastname)
    // }
    // username
    if (usernameVal === '') {
        setErrorMsg(username, 'Kullanıcı adı gerekli')
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Kullanıcı adı en az 3 karakter olmalı')
    } else {
        setSuccessMsg(username)
    }

    // email validate
    let regEx= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (emailVal === '') {
        setErrorMsg(email, 'Email gerekli')
    } else if(!regEx.test(String(emailVal))){
        setErrorMsg(email, 'Geçerli bir email adresi değil')
    } else {
        setSuccessMsg(email)
    }
    //phone validate
    if (phoneVal === '') {
        setErrorMsg(phone, 'Telefon numarası boş geçilemez')
    } else if (phoneVal.length != 11) {
        setErrorMsg(phone, 'Numara, 11 sayıdan oluşmalı')
    } else {
        setSuccessMsg(phone)
        
    }

    // function validatedate(dateString){      
    //     let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;      
              
              
    //     if(dateString.match(dateformat)){      
    //         let operator = dateString.split('/');      
          
                 
    //         let datepart = [];      
    //         if (operator.length>1){      
    //             pdatepart = dateString.split('/');      
    //         }      
    //         let month= parseInt(datepart[0]);      
    //         let day = parseInt(datepart[1]);      
    //         let year = parseInt(datepart[2]);      
                  
                 
    //         let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
    //         if (month==1 || month>2){      
    //             if (day>ListofDays[month-1]){      
                        
    //                 return false;      
    //             }      
    //         }else if (month==2){      
    //             let leapYear = false;      
    //             if ( (!(year % 4) && year % 100) || !(year % 400)) {      
    //                 leapYear = true;      
    //             }      
    //             if ((leapYear == false) && (day>=29)){      
    //                 return false;      
    //             }else      
    //             if ((leapYear==true) && (day>29)){      
    //                 console.log('Invalid date format!');      
    //                 return false;      
    //             }      
    //         }      
    //     }else{      
    //         console.log("Invalid date format!");      
    //         return false;      
    //     }      
    //     return true;      
    // }   

    //password validate
    if (passwordVal === '') {
        setErrorMsg(password, 'Şifre gir')
    } else if (passwordVal.length <= 5) {
        setErrorMsg(password, 'En az 6 karakter gir')
    } else {
        setSuccessMsg(password)
    }
    //confirm password validate
    if (passwordVal === '') {
        setErrorMsg(password2, 'Şifreyi onayla boş geçilemez')
    } else if (passwordVal != password2Val) {
        setErrorMsg(password2, 'Şifre eşleşmedi')
    } else {
        setSuccessMsg(password2)
    }

    successMsgAlert(usernameVal)

}

function setErrorMsg(input, errMsg) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = errMsg;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


function successMsgAlert(usernameVal) {
    let formControll = document.getElementsByClassName('form-control')
    let count = formControll.length - 1
    for (let i = 0; i <= formControll.length; i++) {
        if (formControll[i].className === 'form-control success') {
            let sRate = 0 + i
            sendData(usernameVal, sRate, count)
        } else {
            return false;
        }
    }
}

function sendData(usernameVal, sRate, count) {
    if (sRate === count) {

        Swal.fire(
            'Hoşgeldin ' + usernameVal,
            'Kayıt başarıyla tamamlandı.',
        
        )
        form.reset()

        let formCon = document.getElementsByClassName('form-control success');
        [...formCon].forEach((element) => {
            element.className = 'form-control'
        })
    }
}