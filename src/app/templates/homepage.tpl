{{ #include header }}

<main class="team-members">
	{{ #each card in cards }}
		<article class="card {{ card }}">
			<a class="card__profile-link" href="">
				<div class="card__overlay">
					<h2 class="card__overlay--employee-name"></h2>
					<h3 class="card__overlay--employee-title"></h3>
					<p class="card__overlay--job-description"></p>
				</div>
			</a>
		</article>
	{{ /each }}
</main>

<section class="learn-more">
	<p>Learn more about Techi Technology</p>
	&nbsp;
	<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
</section>

{{ #include footer }}