<template>
    
    <main>

        <div class="text-top">Vídeos novos toda <b>quinta</b> às <b>20h</b></div>
        
        <a href="https://youtube.com/channel/UCDyjaG9ursl1AeAM9Xhb2oA" target="_blank">
        <img alt="Inscreva-se" id="subscribe" src="../assets/images/subscribe.svg">
        </a>

        <div class="text-bottom"> Meus Videos</div>

    </main>

</template>

<script>
export default {
    nome: 'Home'
}
</script>

<style scoper>

main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}

.text-top{
    color: var(--color-text-light);
    font-size: 22px;
    margin-bottom: 20px;
}

.text-bottom{
    color: var(--color-text-light);
    font-size: 18px;
    margin-top: 20px;
}

#subscribe{
    width: 330px;
}

@media (min-width: 700px) {
    #subscribe{
    width: 370px;
    }
   
}
</style>