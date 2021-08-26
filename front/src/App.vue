<template>
	<div id="app">
		<Header/>
		<router-view path="$router.key" />
		<Footer/>
	</div>
</template>

<script>

import './styles/glogal.css';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		Header, 
		Footer,
	}
}
</script>