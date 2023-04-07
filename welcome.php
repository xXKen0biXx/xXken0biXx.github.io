<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf_8" />
        <title> welcome</title>
    </head>
<body>
  <?php
  if(empty($_POST['Username'])==false)
  {
    echo "".$_POST['Username']. "<br>";
    
  }

  else
  {
    echo " please provide a username ". "<br>";
  }
  if(empty($_POST['Password'])==false)
  {
    echo "".$_POST['Password']. "<br>";
    
  }

  else
  {
    echo " please provide a password ". "<br>";
  }

  if(empty($_POST['Address'])==false)
  {
    echo "".$_POST['Address']. "<br>";
    
  }
  else
  {
    echo " please provide a Address ". "<br>";
  }

  if(empty($_POST['country'])==false)
  {
    echo "".$_POST['country']. "<br>";
    
  }
  else
  {
    echo " please provide a country ". "<br>";
  }

  if(empty($_POST['ZIPCODE'])==false)
  {
    echo "".$_POST['ZIPCODE']. "<br>";
    
  }
  else
  {
    echo " please provide a ZIPCODE ". "<br>";
  }

  if(empty($_POST['Email'])==false)
  {
    echo "".$_POST['Email']. "<br>";
    
  }
  else
  {
    echo " please provide a Email ". "<br>";
  }

  if(empty($_POST['gender'])==false)
  {
    echo " ".$_POST['gender']. "<br>";
    
  }
  else
  {
    echo " please provide a Gender ". "<br>";
  }

  if(empty($_POST['lang'])==false)
  {
    echo "".$_POST['lang']. "<br>";
  }
  else
  {
    echo " please provide a Language ". "<br>";
  }

if(empty($_POST['comment'])==false)
  {
    echo "".$_POST['comment']. "<br>";
    
  }
  else
  {
    echo " please provide a comment ". "<br>";
  }


  ?>
</body>
</html>