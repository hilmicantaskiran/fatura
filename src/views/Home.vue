<template>
    <div id="home-page">
        <div class="container">
            <form  method="post">
                <div class="subtitle subtitle-margin">Giriş kodunu giriniz.</div>
                <div class="field">
                    <label class="label">Giriş Kodu</label>
                    <div class="control">
                        <input id="loginCode" v-model="loginCode" class="input" type="text" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen giriş kodunuzu giriniz.')" oninput="setCustomValidity('')">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Şifre</label>
                    <div class="control">
                        <input id="password" v-model="password" class="input" type="password" placeholder="Text input" required oninvalid="this.setCustomValidity('Lütfen şifre giriniz.')" oninput="setCustomValidity('')">
                    </div>
                </div>
                <p v-if="errorMessage" class="error">Giriş kodunu ve şifreyi doğru girdiğinizden emin olunuz.</p>
                <div class="control">
                    <input class="button is-link button-size" type="submit" value="Giriş" @click.stop.prevent="onLogin">
                </div>
            </form>
            <div class="signup">
                <span>Giriş kodu almak için</span>
                <router-link to="/signup" class="signup-router">tıklayınız.</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomePage',
    data() {
        return {
            loginCode: '',
            password: '',
            errorMessage: false
        }
    },
    methods: {
        onLogin() {
            if (this.loginCode == '12345' && this.password == '12345') {
                this.$router.push('/invoice');
            } else {
                this.loginCode = '';
                this.errorMessage = true;
                setTimeout(() => {
                    this.errorMessage = false;
                }, 3000);
            }
        }
    }
}

</script>

<style>

#home-page {
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

.signup-router {
    margin-left: 5px;
}

.error {
    color: crimson;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 0.8rem;
}

@media screen and (max-width: 768px) {
    #home-page {
        margin: 20px;
    }

    .button-size {
        width: 100%;
    }   

    .mb-font {
        font-size: 0.8rem;
    }

    .signup {
        margin-top: 1rem;
        text-align: center;
    }
}

@media screen and (min-width: 769px) {
    #home-page {
        width: 50%;
        min-height: 100vh;
    }

    .button-size {
        width: 18%;
    }

    .mb-font {
        font-size: 1rem;
    }

    .signup {
        margin-top: 1rem;
    }
}


</style>