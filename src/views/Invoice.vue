<template>
    <div id="invoice-page">
        <div class="container">
            <form method="post">
                <div class="f-row">
                    <div class="border fatura-width">
                        <div class="subtitle f-margin">Fatura Bilgileri</div>
                        <div class="is-flex-direction-column">
                            <div class="field">
                                <label class="label">Senaryo</label>
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select>
                                            <option>Select dropdown</option>
                                            <option>With options</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Fatura Tipi</label>
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select>
                                            <option>Select dropdown</option>
                                            <option>With options</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label margin-mobile">Fatura Tarihi</label>
                                <div class="control">
                                    <input class="input" type="date">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Fatura Saati</label>
                                <div class="control">
                                    <input class="input" type="time">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border alici-width">
                        <div class="subtitle subtitle-margin">Alıcı Bilgileri</div>
                        <div class="field">
                            <label class="label">TCKN</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="12345678910">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Unvan</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Adı</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Soyadı</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Mahalle / Semt / İlçe</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Şehir</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Ülke</label>
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border iban-width is-flex-direction-column">
                        <div>
                            <div class="subtitle subtitle-margin">Ödemenin Yapılacağı</div>
                            <div class="field">
                                <label class="label">IBAN</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="TR1800062001000000123001">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="subtitle subtitle-margin alici-margin">Ödeme Yapacak Alıcı</div>
                            <div class="field">
                                <div class="field">
                                    <label class="label">Unvan</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Vergi No</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="12345678910">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">İl</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Ülke</label>
                                    <div class="control">
                                        <div class="select is-fullwidth">
                                            <select>
                                                <option>Select dropdown</option>
                                                <option>With options</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="border b-mobile" style="width: 100%; height: 100px; margin-top: 18px">
                    <p class="subtitle">Mal Hizmet Bilgileri</p>
                </div>
                <div class="border b-mobile" style="width: 100%; height: 100px; margin-top: 18px">
                    <p class="subtitle">Toplamlar</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InvoicePage'
}
</script>

<style>
    #invoice-page {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        display: flex;
        align-items: start;
        justify-content: start;
        margin: 20px;
    }

    @media screen and (max-width: 768px) {
        .f-row {
            display: flex;
            flex-direction: column;
        }

        .subtitle-margin {
            margin-top: 3rem;
        }

        .f-margin {
            margin-top: 1rem;
        }

        .b-mobile {
            border: 1px solid #bdbcbc;
            border-radius: 5px;
            padding: 1rem;
        }
    }

    @media screen and (min-width: 768px) {
        .f-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .alici-field {
            margin-right: 40px;
        }

        .iban-width {
            width: 33%;
        }

        .alici-width {
            width: 35%;
        }

        .fatura-width {
            width: 30%;
        }

        .f-margin {
            margin-top: 1rem;
        }

        .alici-margin {
            margin-top: 2rem;
        }

        .border {
            border: 1px solid #a5a4a4;
            border-radius: 5px;
            padding: 1rem;
        }
    }
</style>
