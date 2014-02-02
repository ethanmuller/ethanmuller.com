<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="css/master.css" media="screen" />
<title>Drawin' With Tables!</title>
</head>

<body>
<div id="main">
<?php

$link = "xxxxaaaaaaxxx xcxabbbbbbaxc xcxbbbbbbbbxc xccbcaccacbcc xccbcbccbcbcc xxccccccccccb xxxaccbbccabb xbbbbbcccaaac bbcbbbbaaaaac bcccbbcbbaabx bbcbbbcabbbax bbcbbbcbbaaax bbbbbbcaaabxx xcccccxxbbbxx xxxxxxxxbbbxx";
$link = str_replace(" ", "", $link); // remove spaces from string
$link = str_split($link); // convert the string to an array

print "<table>\n<tr>\n";
$i = 0;
$t = 0;
foreach($link as $pixel){
	$i++;
	$t++;
	print "<td class=\"$pixel\">&nbsp;</td>\n";
	if ($t == count($link)){
		print "</tr>\n";
		break;
	}
	if ($i == 13){
		print "</tr>\n<tr>";
		$i = 0;
	}
}
print "</table>";

?>
<p>Yeah, this is useless.</p>
</div>
</body>
</html>