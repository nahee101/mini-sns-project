import Vue from 'vue';
import VueRouter from 'vue-router';

/* 네비게이션 가드 사용 */
import '@/datasources/firebase';
import {getAuth} from 'firebase/auth';
const auth = getAuth();

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../components/LoginPage.vue')
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: function () {
      return import('../components/RegisterPage.vue')
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: function () {
      return import('../components/HomeView.vue')
    },
    //네비게이션 가드 사용
    meta: {bAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/////* 네비게이션 가드 사용 */////
/* home에 접근하였을 때, 로그인이 되어 있다면 home으로 
로그인이 되어 있지 않다면, login 페이지로 이동할 수 있도록 네비게이션 가드 설정 */
router.beforeEach((to, from, next) => {
  //to: 이동할 URL 정보가 담긴 라우터 객체
  //from: 현재 URL 정보가 담긴 라우터 객체
  //next: to에서 지정한 URL로 이동하기 위해 반드시 호출해야 하는 함수

  const bNeedAuth = to.matched.some((record) => record.meta.bAuth);
  const bCheckAuth = auth.currentUser;

  console.log(bNeedAuth);

  if(bNeedAuth && !bCheckAuth) {
    next('/login');
  } else {
    next();
  }
});

export default router
