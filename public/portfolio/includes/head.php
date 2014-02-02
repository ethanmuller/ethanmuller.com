<?php function printHead($title, $description, $tags, $includeJquery = false){
$jquery = ($includeJquery) ? "\n\t\t<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js\" type=\"text/javascript\"></script>" : '';
$tagList = implode(", ", $tags);
print <<<EOF
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="$description">
		<meta name="keywords" content="$tagList">

		<title>{$title}</title>

		<link rel="stylesheet" href="css/html5reset-1.6.1.css" type="text/css" media="screen">
		<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
		<link rel="stylesheet" href="css/transitions.css" type="text/css" media="screen">
		$jquery

		<link href='http://fonts.googleapis.com/css?family=Ubuntu:300,300italic' rel='stylesheet' type='text/css'><!-- Ubuntu font -->
		<link href='fonts/mensch.css' rel='stylesheet' type='text/css'><!-- Mensch font -->

		<link href="favicon.ico" rel="Shortcut Icon" type="image/ico" />

		<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<script type="text/javascript">

			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-26538091-1']);
			_gaq.push(['_trackPageview']);

			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();

		</script>

	</head>

	<body>

		<div class="wrapper">

EOF;
} ?>
