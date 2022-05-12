<!-- 이메일 로그인 -->
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="display-1 my-1">로그인하기</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="8" offset="2"
            sm="6" offset-sm="3">
                <form @submit.prevent="fnDoLogin">
                    <div class="my-4">
                        <v-btn block @click="fnDoGoogleLogin_Popup"
                        rounded outlined>
                            <v-icon class="mx-2">mdi-google</v-icon>
                            Google로 로그인
                        </v-btn>
                    </div>
                    <div class="my-4">
                        <v-btn block @click="fnDoGoogleLogin_Popup"
                        rounded outlined>
                            <v-icon class="mx-2">mdi-github</v-icon>
                            GitHub로 로그인
                        </v-btn>               
                    </div>
                    
                    <v-text-field name="email" label="이메일 주소" required 
                    type="email" v-model="sEmail"></v-text-field>

                    <v-text-field name="password" label="비밀번호" required 
                    type="password"
                    v-model="sPassword"></v-text-field>

                    <v-btn type="submit" text>로그인 하기</v-btn>
                    <v-btn text>비밀번호를 잊으셨나요?</v-btn>
                </form>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <span>계정이 없으신가요?</span>
                <a href="/register">가입하기</a>
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
        },
        fnDoGoogleLogin_Popup() {
            this.$store.dispatch('fnDoGoogleLogin_Popup', {
            pEmail: this.sEmail,
            pPassword: this.sPassword
            })
        }
    }
}
</script>