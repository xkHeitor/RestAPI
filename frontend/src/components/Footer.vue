<template>
	
	<footer class="justify-content-end">
		<span class="small text-decoration-none"> Heitor Carvalho R.</span>
	</footer>

</template>

<script>

	export default {
		name: 'Footer',
	}

</script>

<style scoped>

	footer {
		width: 100%;
		height: 60px;
		background-color: var(--color-background-nav);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.socialLink {
		border: 1px solid var(--color-text-light);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		margin: 0 10px;
	}

	.socialLink img{
		width: 20px;
	}

</style>