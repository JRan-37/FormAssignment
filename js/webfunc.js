function showtext() {

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var productType = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;

    var phoneno = /^\d{10}$/;
    var valid = true;
    var alertString = "";
    if(name == "") {
        alertString += "Name must be filled out.\n";
        valid = false;
    }
    if(!validatephone(phone)) {
        if(phone == "")
            alertString += "Phone number must be filled out.\n";
        else
            alertString += "Invalid phone number format. Valid formats:\n" +
                "(123) 456-7890\n"+
                "(123)456-7890\n"+
                "123-456-7890\n"+
                "123.456.7890\n"+
                "1234567890\n"+
                "+31636363634\n"+
                "075-63546725\n";
        valid = false;
    }
    if(!validateemail(email)) {
        if(email == "")
            alertString += "E-mail must be filled out.\n";
        else
            alertString += "Invalid E-mail format. Valid format: username@email.com\n"
        valid = false;
    }
    if(!validatequantity(quantity)) {
        if(quantity == "")
            alertString += "Quantity must be filled out.\n";
        else
        alertString += "Invalid quantity format, only digits are permitted. (0-9)\n";
        valid = false;
    }
    

    if(valid) {
        location = 'submission.html';

        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
        localStorage.setItem("product", productType);
        localStorage.setItem("quantity", quantity);
    }
    else
        alert(alertString);
}

function gettext() {
    document.getElementById('name').innerHTML += localStorage.getItem("name");
    document.getElementById('phone').innerHTML += localStorage.getItem("phone");
    document.getElementById('email').innerHTML += localStorage.getItem("email");
    document.getElementById('product').innerHTML += localStorage.getItem("product");
    document.getElementById('quantity').innerHTML += localStorage.getItem("quantity");
}

function validatephone(input)
{
    var phoneregex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(input.match(phoneregex))
        {
            return true;
        }
    else
        {
            return false;
        }
}

function validateemail(input)
{
    var emailregex = /^\S+@\S+\.\S+$/;
    if(input.match(emailregex))
        {
            return true;
        }
    else
        {
            return false;
        }
}

function validatequantity(input)
{
    var quantityregex = /^[0-9]+$/;
    if(input.match(quantityregex))
        {
            return true;
        }
    else
        {
            return false;
        }
}