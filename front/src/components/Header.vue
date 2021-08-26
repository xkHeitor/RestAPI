<template>
    <header>

        <nav class="container">
			<h3 class="text-white">Pontential Crud</h3>
        </nav>

    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>

header {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
}

#logo {
    width: 130px;
}

#menu-button {
    width: 30px;
}

#menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
}

#menu-logo {
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
}

#menu-items {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#menu-items.open {
    display: flex;
}

ul {
    list-style: none;
    text-align: center;
    height: 60px;
    align-items: center;
}

ul li {
    margin: 20px 0px;
}

ul li a {
    color: var(--color-text-light);
}

@media (min-width:700px) {
    #menu-button,
    #menu-logo,
    #menu-overlay {
        display: none;
    }

    #menu-items {
        display: flex;
        position: static;
        height: 60px;
        width: auto;
    }

    ul {
        display: flex;
    }

    ul li {
        margin: 0;
        margin-left: 20px;
    }
}

</style>