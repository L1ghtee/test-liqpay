function createLiqPayPayment(price, order_id, description) {
  const publicKey = "sandbox_i54441337826";

  let paymentData = {
    version: "3",
    public_key: publicKey,
    action: "pay",
    amount: price,
    currency: "UAH",
    description: description,
    order_id: order_id,
    result_url: "https://www.langmeier-software.com.ua/",
  };

  // Перетворення даних в JSON
  const data = JSON.stringify(paymentData);

  // Обчислення підпису
  const privateKey = "sandbox_LMwbu92lTGwpt5dUEgTC0SqaQyaWVebb5125YaK2";
  const signString = privateKey + data + privateKey;
  const sha1Digest = CryptoJS.SHA1(signString);
  const signature = sha1Digest.toString(CryptoJS.enc.Base64);

  // Створення та відправка форми
  const form = document.createElement("form");
  form.method = "post";
  form.action = "https://www.liqpay.ua/api/3/checkout";
  form.target = "_blank";

  const dataInput = document.createElement("input");
  dataInput.type = "hidden";
  dataInput.name = "data";
  dataInput.value = data;

  const signatureInput = document.createElement("input");
  signatureInput.type = "hidden";
  signatureInput.name = "signature";
  signatureInput.value = signature;

  form.appendChild(dataInput);
  form.appendChild(signatureInput);
  document.body.appendChild(form);

  form.submit();
  console.log(paymentData);
}
let name = "";
let email = "";
let description = "";
document.querySelector("#pay_submit").addEventListener("click", function () {
  name = document.querySelector("#pay_name").value;
  email = document.querySelector("#pay_email").value;

  description = name + " : " + email + "  " + order_id;
  createLiqPayPayment(amount, order_id, description);
});

let amount = "";
let order_id = "";
document.querySelector("#payEssential").addEventListener("click", function () {
  amount = "1279";
  order_id = "Essential";
});
document
  .querySelector("#payProfessional")
  .addEventListener("click", function () {
    amount = "1599";
    order_id = "Professional";
  });
document.querySelector("#payBusines").addEventListener("click", function () {
  amount = "3199";
  order_id = "Busines";
});
document
  .querySelector("#payServerEssential")
  .addEventListener("click", function () {
    amount = "3899";
    order_id = "Backup Server essentials";
  });
document
  .querySelector("#payBackupServer")
  .addEventListener("click", function () {
    amount = "4499";
    order_id = "Backup Server";
  });
document.querySelector("#payVFlex").addEventListener("click", function () {
  amount = "8999";
  order_id = "Backup VFlex";
});
