<template>
    <div>
        <header>
            I am header
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            I am footer
        </footer>
    </div>
</template>
<style scoped>
header {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
}

main {
    padding: 20px;
    /* box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center; */
    height: calc(100vh - 104px)
}

footer {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
}
</style>