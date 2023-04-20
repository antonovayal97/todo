<script>

</script>

<template>
    <header class="header"> 
        <div class="header__logo">
            <span>TODO</span>
        </div>
        <div class="header__links">
            <nav>
                <RouterLink to="/">Главная</RouterLink>
                <RouterLink to="/note">Создать заметку</RouterLink> 
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header
{
    width: 100%;
    padding: 15px;
    background-color: #42b883;
    color: #fff;
    display: flex;
    font-size: 18px;
}
.header__logo
{
    font-weight: bold;
}
.header__links
{
margin-left: 15px;
}
.header__links a
{
    margin-right: 15px;
    text-decoration: none;
    color: #fff;
}
.header__links a:last-child
{
    margin-right: 0;
}
</style>
