<?php

function printSidebar($pieces, $currentPage){

?>

			<header class="sidebar">

				<a href="index.html" class="logo"><img src="img/png/logo-graphic.png" alt="logo"></a>

<?php printNav($pieces, $currentPage); ?>

			</header><!-- end .sidebar -->
<?php } ?>
