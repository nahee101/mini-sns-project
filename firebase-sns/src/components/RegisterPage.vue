<!-- 회원가입 -->
<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center mt-5">
                <h1 class="display-1 my-1">계정을 생성하세요</h1>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col class="text-center" cols="8" offset="2"
            sm="6" offset-sm="3">
                <form @submit.prevent="fnRegisterUser">
                    <v-text-field name="name" label="이름" required
                    single-line outlined 
                    :rules="[rules.max]" counter="25" 
                    v-model="sName"></v-text-field>
                    
                    <v-text-field name="email" label="이메일 주소" required 
                    single-line outlined
                    type="email" v-model="sEmail"></v-text-field>

                    <v-text-field name="password" label="비밀번호" required 
                    :append-icon="visible? 'mdi-eye' : 'mdi-eye-off' "
                    :rules="[rules.min]" counter="25"
                    type="visible ? 'text' : 'password'"
                    hint="6자 이상이어야 합니다."
                    class="input-group--focused"
                    @click:append="visible = !visible"
                    single-line outlined
                    v-model="sPassword"></v-text-field>

                    <v-btn type="submit" text>다음</v-btn>
                </form>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <span>이미 계정이 있으신가요?</span>
                <a href="/login">로그인</a>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            sName: '',
            sEmail: '',
            sPassword: '',
            visible: false,
            rules: {
                max: v => v.length <= 25,
                min: v => v.length >= 6 || '6자 이상이어야 합니다.'
            }
        }
    },
    methods: {
        fnRegisterUser() {
            this.$store.dispatch('fnRegisterUser', {
                pName: this.sName,
                pEmail: this.sEmail,
                pPassword: this.sPassword,
            })
        }
    }
}
</script>