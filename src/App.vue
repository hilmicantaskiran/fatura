<template>
    <div id="app">
        <form method="post">
            <div class="subtitle subtitle-margin">Fatura bilgilerini giriniz.</div>
            <div class="field">
                <label class="label">Alıcı İsmi</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen alıcı ismini giriniz.')" oninput="setCustomValidity('')">
                </div>
            </div>
            <div class="field">
                <label class="label">Alıcı İsmi</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen alıcı ismini giriniz.')" oninput="setCustomValidity('')"> 
                </div>
            </div>
            <div class="field">
                <label class="label">Alıcı İsmi</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen alıcı ismini giriniz.')" oninput="setCustomValidity('')">
                </div>
            </div>
            <div class="field">
                <label class="label">Alıcı İsmi</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen alıcı ismini giriniz.')" oninput="setCustomValidity('')">
                </div>
            </div>
            <div class="control">
                <input class="button is-link button-size" type="submit" value="Gönder">
            </div>
        </form>
        <article class="message is-danger">
            <div class="message-body mb-font">
                Girdiğiniz bilgilerin doğruluğundan emin olunuz!
            </div>
        </article>
    </div>
</template>

<script>

import "@/assets/styles/bulma.css";

export default {
    name: 'App'
}

</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
}

.subtitle-margin {
    margin-top: 1rem;
}

article {
    margin-top: 1rem;
}

@media screen and (max-width: 768px) {
    #app {
        margin: 12px;
    }

    .button-size {
        width: 100%;
    }   

    .mb-font {
        font-size: 0.8rem;
    }
}

@media screen and (min-width: 769px) {
    #app {
        margin: 50px 100px 0px 100px;    
    }

    .button-size {
        width: 18%;
    }

    .mb-font {
        font-size: 1rem;
    }
}

</style>
