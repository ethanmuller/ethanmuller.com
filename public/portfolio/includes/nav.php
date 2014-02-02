<?php

function in_array_r($needle, $haystack, $strict = true) {
    foreach ($haystack as $item) {
        if (($strict ? $item === $needle : $item == $needle) || (is_array($item) && in_array_r($needle, $item, $strict))) {
            return true;
        }
    }

    return false;
}

?>
<?php function printNav($pieceList, $current){ ?>
				<nav><!-- start nav -->

					<ul>

						<li<?php
if($current == 'index' || $current == '' || in_array_r($current, $pieceList)){
	echo ' class="current"';
}
?>>
							<a href="index.html">Portfolio</a>
						</li>

						<?php if(in_array_r($current, $pieceList)){ ?>

						<li>
							<ul class="portfolio"><!-- start .portfolio -->

<?php foreach($pieceList as $piece){
									if($current != $piece['id']){
										echo "\n", str_repeat("\t", 8), '<li>', "\n";
									} else {
										echo str_repeat("\t", 8), '<li class="current">', "\n";
									}
									echo str_repeat("\t", 9), '<a href="', $piece['id'], '.html">', $piece['name'], '</a>', "\n";
									echo str_repeat("\t", 8), '</li>', "\n\n";
								}
								?>
							</ul><!-- end .portfolio -->

						</li>
							<?php } ?>

						<li<?php if($current == 'about'){ echo ' class="current"'; } ?>>
							<a href="about.html">About</a>
						</li>

						<li<?php if($current == 'contact'){ echo ' class="current"'; } ?>>
							<a href="contact.html">Contact</a>
						</li>

						<li>
							<ul class="social"><!-- start .social -->

								<li>
									<a href="http://www.twitter.com/ethanmuller" target="_blank">
										<img src="img/gif/trans.gif" class="twitter" alt="Twitter">
									</a>
								</li>

								<li>
									<a href="http://www.facebook.com/ethanmuller" target="_blank">
										<img src="img/gif/trans.gif" class="facebook" alt="Facebook">
									</a>
								</li>

							</ul><!-- end .social -->

						</li>

					</ul>

				</nav><!-- end nav -->
<?php } ?>
