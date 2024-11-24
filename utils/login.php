<?php


include 'database.php';
session_start();
if(isset($_POST['submit'])) {
    $db = connectToDbAndGetPdo();
    $email = $_POST['mail'];
    $password = $_POST['pass'];
    $pswd = hash('sha256', $password);




    $request = $db->prepare("SElECT email, password, pseudo FROM users WHERE email = ? and password= ?");
    $request->execute([$email, $pswd]);
    $data = $request->fetchAll();

    if (!empty($data)){
        session_start();
        echo "Vous etes connecter";
    }
    else{
        echo "Invalid email or password";
    }


}

if (isset($_POST['logout'])) {
    session_destroy();
    echo "Vous vous etes deconnecter";
}


$pseudo = $_SESSION['pseudo'];




?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>gamesites</title>
    <link href="../assets/css/login.css" rel="stylesheet"/>
    <link href="../assets/css/header.css" rel="stylesheet"/>
    <link href="../assets/css/footer.css" rel="stylesheet"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <link href="https://db.onlinewebfonts.com/c/508eeb3849362bb16844cc1d5ac1f88a?family=Robolt+x+Hand+Light" rel="stylesheet">
</head>


<body>

<nav>
    <div id="chiant2">
        <img src="../assets/img/gameboy.png" >
        <p>Noah's Games</p>
        <span><?php echo $pseudo ?></span>




        <div id="chiant3">

            <a href="../index.html" id="home">Home</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <li><p >Game ▼</p>
                <ul class="sous">
                    <li><a href="../games.html">2048</a></li>
                    <li><a href="#">demineur</a></li>
                    <li><a href="#">Snake</a></li>
                </ul>
            </li>

            <a href="../register.html" id="connexion">Connexion</a>



        </div>


    </div>



</nav>




<section>
    <form method="post" action="#">
        <input type="email" placeholder="email"  name="mail">
        <input type="password" placeholder="mot de passe" name="pass">
        <input type="submit" name="submit" >
        <input type="submit" name="logout" value="deconnection">
    </form>




</section>

<footer>
    <div id="info">
        <img src="../assets/img/icon.png">

        <ul style="list-style-type: none">
            <h2>Follow us</h2>
            <ul >
                <li><a href="https://github.com/noasman971" target="_blank"><img src="../assets/img/github.png"    /></a> </li>
                <li><a href="https://www.linkedin.com/in/noah-kichenassamy" target="_blank"><img src="../assets/img/linkledin.png" /></a></li>
                <li><a href="https://profile.indeed.com/p/noahk-zxb019d" target="_blank"><img src="../assets/img/indeed.png" /></a></li>
            </ul>

        </ul>

        <ul><h2>Useful Links</h2>
            <li><a href="#">Our Projects</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">News and Updates</a></li>
        </ul>
        <ul style="list-style-type: none"> <h2>Contacts</h2>
            <li>Address : private</li>
            <li>Email : private</li>
            <li>Phone Number: private</li>
        </ul>


    </div>





    <p>Copyrinth © 2024. Tous droits révervés </p>

</footer>

</body>
</html>

