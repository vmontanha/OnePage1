<?php $name = $_POST['nome'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['tel'];
$job = $_POST['job'];
$formcontent="From: $name \n Message: $message";
$recipient = "viniciusmassis01@hotmail.com";
$subject = "Assunto do portfolio";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Erro ao mandar mensagem!");
echo "Mensagem enviada, obrigado logo entraremos em contato";
?>