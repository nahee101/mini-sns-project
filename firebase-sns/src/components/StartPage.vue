<!-- 이메일 로그인 -->
<template>

    <v-container>
        <v-row>
            <v-col cols="12" class="text-center mt-5">
                <h1 class="display-1 my-1">시작하려면 먼저 이메일과 비밀번호를 입력하세요</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center" cols="8" offset="2"
            sm="6" offset-sm="3">
                <form @submit.prevent="fnDoLogin">                
                    <v-text-field name="email" label="이메일 주소" required 
                    type="email" v-model="sEmail"></v-text-field>

                    <v-text-field name="password" label="비밀번호" required 
                    :append-icon="show1 ? 'mdi-eye':'mdi-eye-off'"
                    @click:append="show1 = !show1"
                    :type="show1 ? 'text' : 'password'" 
                    v-model="sPassword"></v-text-field>

                    <v-btn type="submit" block large>로그인 하기</v-btn>
                </form>

            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    data() {
        return {
            sEmail: '',
            sPassword: ''
        }
    },
    methods: {
        fnDoLogin() {
            this.$store.dispatch('fnDoLogin', {
            pEmail: this.sEmail,
            pPassword: this.sPassword
            })
        }
    }
}
</script>