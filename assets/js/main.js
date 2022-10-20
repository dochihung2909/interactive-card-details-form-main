$(document).ready(function() {
    $("#card-number-inp").keyup(function() { 
        let originNum = "0000 0000 0000 0000"
        let a = $(this).val();
        a = a.replaceAll(/\s+/g,"");
        let b  = $(".card-number"); 
        if (a == "") {
            return b.text(originNum);
        } else {
            a = a.replace(/\d{4}(?=.)/g, "$& "); 
            $(this).val(a);
            b.text(a + originNum.substring(a.length));   
        }
    })

    $("#name-input").keyup(function() {
        let originName = "Do Chi Hung";
        let inputVal = $(this).val();
        let nameOut = $(".card-name");  
        if (inputVal == "") {
            return nameOut.text(originName);
        } else {  
            nameOut.text(inputVal); 
        } 
    })

    $("#input-month").keyup(function() {
        let originMonth = "00";
        let inputVal = $(this).val();
        let monthOut = $(".card-month"); 
        if (inputVal == "") {
            return monthOut.text(originMonth);
        } else { 
            if (inputVal.length < 2) {
                inputVal = "0" + inputVal;
            }
            monthOut.text(inputVal); 
        } 
    })

    $("#input-year").keyup(function() {
        let originMonth = "00";
        let inputVal = $(this).val();
        let monthOut = $(".card-year"); 
        if (inputVal == "") {
            return monthOut.text(originMonth);
        } else { 
            if (inputVal.length < 2) {
                inputVal = "0" + inputVal;
            }
            monthOut.text(inputVal); 
        } 
    })

    $("#cvc-input").keyup(function() {
        let originCVC = "000";
        let inputVal = $(this).val();
        let cvcOut = $(".card-sercurity");
        if (inputVal == "") {
            return cvcOut.text(originCVC);
        } else {
            cvcOut.text(inputVal);
        }
    })

    // Validate
    $('#confirm').click(function() {
        const name = $("#name-input");
        const number = $("#card-number-inp");
        const month = $("#input-month");
        const year = $("#input-year");
        const cvc = $("#cvc-input");

        const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/ug;
        
        const nameError = $(".error-name");
        const numberError = $(".error-number");
        const dateError = $(".error-date");
        const cvcError = $(".error-cvc");

        let errorFlag = true;

        checkBlank(name,nameError);
        checkBlank(number,numberError);
        checkBlank(month,dateError);
        checkBlank(year,dateError);
        checkBlank(cvc,cvcError);

        if (!regexName.test(name.val())) {
            name.addClass("error-input");
            nameError.text("Name is incorrect");
            errorFlag = false;
        }

        if (number.val().length < 19) {
            number.addClass("error-input");
            numberError.text("Must have 16 digit");
            errorFlag = false;
        }

        let monthInt = parseInt(month.val());
        if (monthInt < 1 || monthInt > 12) {
            month.addClass("error-input");
            dateError.text("Wrong month");
            errorFlag = false;
        }

        if (cvc.val().length < 3) {
            cvc.addClass("error-input");
            cvcError.text("Must have 3 digit");
            errorFlag = false;
        }
        // If no error then show completed
        if (errorFlag) {
            $(".card-infor-form").html(
            `<div class="completed text-center">
                <div class="row">
                <div class="col-12 mb-5"> 
                    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
                </div>
                <div class="col-12">
                    <h1 class="completed-thanks text-uppercase">Thank you!</h1>
                </div>
                <div class="col-12 mb-5">
                    <span class="text-color">We've added your card details</span>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark submit-btn">Continue</button>
                </div>
                </div>
            </div>`);

            
        }
    })  

    function checkBlank(target,error) {
        if (target.val() == "") {
            target.addClass("error-input");
            error.text("Can't be blank");
        } else {
            target.removeClass("error-input"); 
            error.text("");
        }
    }
})