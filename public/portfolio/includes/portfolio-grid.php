<?php function printPortfolioGrid($piecesList, $current){ ?>
<ul class="portfolio-grid"><!-- start .portfolio-grid -->
<?php

foreach($piecesList as $piece){
?>

					<li class="item <?php echo($piece['id']); if($piece['id']==$current){ echo(' current'); } ?>"><!-- start .<?php echo $piece['id']; ?> -->
						<a href="<?php echo($piece['id']); ?>.html">
							<img src="img/jpg/<?php echo($piece['id']); ?>-thumb.jpg" alt="<?php echo($piece['name']); ?>">
							<span class="details">
								<strong><?php echo($piece['name']); ?></strong>
								<span><?php echo($piece['description']); ?></span>
							</span>
						</a>
					</li><!-- end .<?php echo $piece['id']; ?> -->

<?php
}

?>
				</ul><!-- end .portfolio-grid -->
<?php } ?>
