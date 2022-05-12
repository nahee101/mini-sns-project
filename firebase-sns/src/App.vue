<template>
  <v-app>
    <!-- 앱바 -->
    <v-app-bar app flat color="primary" dark>
      <v-app-bar-nav-icon @click.stop="nDrawer = !nDrawer"
      v-if="fnGetAuthStatus">
        <v-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-avatar>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="mx-auto" fixed>My SNS</v-toolbar-title>
      <v-btn text>
        <v-icon>mdi-star-four-points-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 네비게이션 서랍 -->
    <v-navigation-drawer
    v-model="nDrawer"
    app absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-title class="text-h6">
            계정 정보
          </v-list-item-title>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Sandra
            </v-list-item-title>
            <v-list-item-subtitle>
              sandra
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense
      v-for="(n_menu, i) in n_menus" :key="i">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{n_menu.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{n_menu.menu}}</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>

    <v-bottom-navigation v-if="fnGetAuthStatus">
      <v-list v-for="(bt_menu, i) in bt_menus" :key="i">
        <v-btn text large
        color="primary" horizontal>
          <span>{{bt_menu.menu}}</span>
          <v-icon>{{bt_menu.icon}}</v-icon>
        </v-btn>
      </v-list>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      /* navigation drawer */
      nDrawer: false,
      n_menus: [
        {menu: '프로필', icon: 'mdi-account-outline'},
        {menu: '야간모드', icon: 'mdi-weather-night'}
      ],
      /* bottom navigation */
      bt_menus: [
        {menu: 'Home', icon: 'mdi-home-outline'},
        {menu: 'Search', icon:' mdi-magnify'},
        {menu: 'Alert', icon: 'mdi-heart-outline'},
        {menu: 'DM', icon: 'mdi-email-outline'}
      ]
    }
  },
  computed: {
    fnGetAuthStatus() {
      return this.$store.getters.fnGetAuthStatus;
    },
    fnGetUser() {
      let oUserInfo = this.$store.getters.fnGetUser;
      return oUserInfo;
    }
  }
};
</script>
