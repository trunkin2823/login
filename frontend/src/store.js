import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        clearUser(state) {
            state.user = null;
        }
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
            localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập vào localStorage
        },
        logout({ commit }) {
            commit('clearUser');
            localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập khỏi localStorage
        }
    },
    // getters: {
    //     isAuthenticated: state => !!state.user,
    //     getUser: state => state.user
    // }
});

export default store;
