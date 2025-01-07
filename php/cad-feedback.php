<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Feedback</title>
</head>
<body>
    <h1>Avaliação: </h1>
    <link rel="stylesheet" href="feedback.css">
    
    <?php
    $nome = $_POST["txtnome"];
    $classes = $_POST["listclasses"];
    $clientegostou = $_POST["txtclientegostou"];
    $muzoo = $_POST["txtmuzoo"];
    $site = $_POST["txtsite"];
    $estrelas = $_POST["rating"];

    // Verificar campos
    $camposOK = true; // Determina se ocorreu erro
    if ($nome == "") {
        echo "Informe o NOME.<br>";
        $camposOK = false;
    }
  
    if ($camposOK) {
        echo "<table border='0' cellpadding='5'>";
        echo "<tr><td>1: Insira seu nome:</td><td><b>$nome</b></td></tr>";
        echo "<tr><td> 2: De qual classe é sua peça favorita?<td><b>$classes</b></td></tr>";
        echo "<tr><td>3: O que você mais gostou no nosso site?</td><td><b>$clientegostou</b></td></tr>";
        echo "<tr><td>4: O que você achou dos jogos/quizzes do site? </td><td><b>$muzoo</b></td></tr>";
        echo "<tr><td>5: Você recomendaria nosso site a outras pessoas? Por quê? </td><td><b>$site</b></td></tr>";
        echo "<tr><td>6: Avalie com estrelas: </td><td><b>$estrelas</b></td></tr>";
        echo "</table>";
    }
    ?>
</body>
</html>