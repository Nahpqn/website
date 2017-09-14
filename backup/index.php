<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="css/style.css">
  <title>Home | Ryan Witham</title>
  <meta name="viewport" content="initial-scale=1, width=device-width">
</head>
<body>
  <nav>
  <a href="/"><img src="images/blacklogo.png" alt="black logo"></a>
	<div>
  	<a href="belgencycles" title="Belgen Cycles">Belgen Cycles</a>
    <a href="joyces" title="Joyce's Noodle House">Joyce's Noodle House</a>
    <a href="bedroom" title="Bedroom">Bedroom</a>
    <a href="skills" title="SkillsUSA Web">SkillsUSA</a>
    <a href="twenty" title="20% Project">Twenty</a>
    <a href="resume" title="Resume">Resume</a>
		<a href="http://cawdvt.org/students/rwitham/contact" title="Contact">Contact Me</a>
	</div>
</nav>
  <header class="center font">
    <img src="images/logo.png" alt="logo">
    <h1>Ryan Witham</h1>
    <h2>Web Developer/Graphic Designer</h2>
    <div class="button">
      <p><a href="http://www.cawdvt.org/students/rwitham/contact">Contact Me</a></p>
    </div>
  </header>
  <div class="aboutme font">
    <h1>About Me</h1>
    <p>Hi! I'm Ryan Witham. I am currently focusing on HTML/CSS, JavaScript, Python, and other programming languages as well, here and there. I reside in Vermont and am taking part in the Computer Animation and Web Design Program in Essex. This portfolio composes of some of my best work which is accessible through the navbar, so I hope you stick around!</p>
  </div>
  <div class="contact">
    <div class="wrap">
      <?php
    $statusMsg = '';
    $msgClass = '';
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        if(!empty($email) && !empty($name) && !empty($subject) && !empty($message)){
            if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
                $statusMsg = 'Please enter your valid email.';
                $msgClass = 'errordiv';
            }else{
                $toEmail = 'rwitham@ccsuvt.org';
                $emailSubject = 'Contact Submitted by '.$name;
                $htmlContent = '<h2>Contact Request</h2>
                    <h4>Name</h4><p>'.$name.'</p>
                    <h4>Email</h4><p>'.$email.'</p>
                    <h4>Subject</h4><p>'.$subject.'</p>
                    <h4>Message</h4><p>'.$message.'</p>';
                $headers = "MIME-Version: 1.0" . "\r\n";
                $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                $headers .= 'From: '.$name.'<'.$email.'>'. "\r\n";
                if(mail($toEmail,$emailSubject,$htmlContent,$headers)){
                    $statusMsg = 'Your contact request has been submitted successfully !';
                    $msgClass = 'succdiv';
                }else{
                    $statusMsg = 'Your contact request submission failed, please try again.';
                    $msgClass = 'errordiv';
                }
            }
        }else{
            $statusMsg = 'Please fill all the fields.';
            $msgClass = 'errordiv';
        }
    }
    ?>
<div class="contactFrm">
  <?php if(!empty($statusMsg)){ ?>
      <p class="statusMsg <?php echo !empty($msgClass)?$msgClass:''; ?>"><?php echo $statusMsg; ?></p>
  <?php } ?>
      <form method="post">
      <h4>Name</h4>
      <input type="text" name="name" placeholder="John Doe" required="">
      <h4>Email </h4>
      <input type="email" name="email" placeholder="email@example.com" required="">
      <h4>Subject</h4>
      <input type="text" name="subject" placeholder="What's the beef, Stranger?" required="">
      <h4>Message</h4>
      <textarea name="message" placeholder="The Deets." required=""> </textarea>
      <input type="submit" name="submit" value="Submit">
      <div class="clear"> </div>
  </form>
</div>
</div>
  </div>
</body>
</html>
