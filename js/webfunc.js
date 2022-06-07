function showtext() {

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var productType = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;

    document.getElementById("show").innerHTML = "Successfully Submitted Inquiry<br>-----------------------<br>" + name + "<br>" + phone + "<br>" + email + "<br>" + productType + "<br>" + quantity;


}