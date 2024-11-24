<?php

include 'database.php';

if(isset($_POST['submit'])){
    $db = connectToDbAndGetPdo();
    $email = $_POST['mail'];
    $password = $_POST['pass'];
    $pswd = hash('sha256', $password);
    $pseudo = $_POST['pseudo'];
    $time_registration = date("Y-m-d H:i:s");



    $request = $db->prepare("INSERT INTO users (id, pseudo, email, password, time_registration, time_login) VALUES (null, ?, ?, ?, ?, null)");




    $request2 = $db->prepare("SElECT pseudo, email FROM users WHERE pseudo = ? or email= ?");
    $request2->execute([$pseudo, $email]);
    $data = $request2->fetchAll();

    if (empty($data)){
        $request->execute([$pseudo, $email, $pswd, $time_registration]);
        echo "meessage envoyé";

    }
    else{
        echo "pseudo déjà utilisés ou mot de passe déjà utilisés ";


    }



}

