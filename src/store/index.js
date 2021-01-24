import Vue from 'vue'
import Vuex from 'vuex'
// import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem("token")||"",
  },
  getters:{
    getToken:state=>{
      return state.token;
    }
  },
  mutations: {
    token(state,payload){
      let {token} = payload;
      state.token = token;
      localStorage.setItem("token",token);
    },
  },
  actions: {
    token({commit},payload){//保存token
      let {token} = payload
      commit("token",{token:token});
    },
  },
  modules: {
  }
})
