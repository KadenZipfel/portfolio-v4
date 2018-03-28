<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "kaden.zipfel@hotmail.com";
$subject = "WebDev Contact";

$mail ($to, $subject, $message, "From: " . $name);
echo "Your message has been sent";

?>