<template>
    <div id="signup-page">
        <div class="container">
            <form method="post">
                <div class="subtitle f-margin">Kaydolmak için GİB bilgilerini giriniz.</div>
                <div class="field">
                    <label class="label">Ad Soyad</label>
                    <div class="control">
                        <input v-model="nameSurname" class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen adınızı ve soyadınızı giriniz.')" oninput="setCustomValidity('')">
                    </div>
                </div>
                <div class="field">
                    <label class="label">GİB Kullanıcı Adı</label>
                    <div class="control">
                        <input v-model="gibUsername" class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen GİB kullanıcı adınızı giriniz.')" oninput="setCustomValidity('')">
                    </div>
                </div>
                <div class="field">
                    <label class="label">GİB Parolası</label>
                    <div class="control">
                        <input v-model="gibPassword" class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen GİB parolanızı giriniz.')" oninput="setCustomValidity('')">
                    </div>
                </div>
                <div class="field">
                    <label class="label">GİB Anahtarı</label>
                    <div class="control">
                        <input v-model="gibKey" class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen GİB anahtarınızı giriniz.')" oninput="setCustomValidity('')">
                    </div>
                </div>
                <div class="control">
                    <input class="button is-link button-size" type="submit" value="Gönder">
                </div>
            </form>
            <article class="message is-info m-margin">
                <div class="message-body m-size">
                    <p>GİB bilgilerinizi girdikten sonra, hesabınızın aktif olması için GİB hesabınıza giriş yapmanız gerekmektedir.</p>
                </div>
            </article>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SignUpPage',
    data() {
        return {
            nameSurname: '',
            gibUsername: '',
            gibPassword: '',
            gibKey: ''
        }
    }
}

</script>

<style>

#signup-page {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.subtitle-margin {
    margin-top: 1rem;
}

.m-margin {
    margin-top: 1rem;
}

@media screen and (max-width: 768px) {
    #signup-page {
        margin: 20px;
    }

    .button-size {
        margin-top: 6px;
        width: 100%;
    }   

    .mb-font {
        font-size: 0.8rem;
    }

    .m-size {
        font-size: 0.8rem;
    }
}

@media screen and (min-width: 769px) {
    #signup-page {
        width: 50%;
        min-height: 100vh;
    }

    .button-size {
        margin-top: 6px;
        width: 18%;
    }

    .mb-font {
        font-size: 1rem;
    }
}

</style>
