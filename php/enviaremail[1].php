<?php
  //Variáveis
  $nome = $_POST['Nome'];
  $Idade = $_POST['Idade'];
  $email = $_POST['email'];
  $numero = $_POST['numero'];
  $endereco = $_POST['endereco'];
  $data = $_POST['data'];
  $Estadoepaís = $_POST['Estadoepais'];
  $obs = $POST['obs'];
  $numerodepessoas = $_POST['numerodepessoas'];
 

  //Compo E-mail
  $arquivo = "
    <html>
      <p>Nome: </b>$nome</p>
      <p>Idade: </b>$Idade</p>
      <p>email: </b>$email</p>
      <p>endereço: </b>$endereco</p>
      <p>data: </b>$data</p>
      <p>Estado e país: </b>$Estadoepais</p>
      <p>numerodepessoas </b>$numerodepessoas</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "rebekaoliveira0612@gmail.com";
  $assunto = "Formulário MUZOO";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  mail($nome, $Idade, $email, $numero, $endereco, $data, $Estadoepaís, $numerodepessoas);
  
  echo "<meta http-equiv='refresh' content='10;URL=../contato.html'>";
?>