import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({

    //Базовые данные в хранилеще хранятся в объекте state
    state: {
        paymentsList: [],
        categoryList: [],
    },

    //Изменения и действия с хранилищем записываются в мутациях
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.unshift(payload);
        },
        deletePayment(state, playload) {
            state.paymentsList.splice(playload, 1)
        },
        changePayment(state, playload) {
            state.paymentsList[playload.idxPayment] = playload
        },
        addNewCategory(state, playload) {
            state.categoryList.push(playload);
        },
        setCategoryList(state, payload) {
            state.categoryList = payload;
        }
    },

    //Получение данных

    getters: {
        getPaymentList: state => state.paymentsList,
        getFullPrise: state => {
            return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0);
        },
        getCategory: state => state.categoryList
    },

    // Ассинхронные действия с хранилищем, запускающие мутации

    actions: {
        fetchData({
            commit,
        }) {

            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = [];
                    for (let i = 1; i < 50; i++) {
                        items.push({
                            id: i,
                            date: '11/07/2021',
                            category: 'Food',
                            value: 777
                        });
                    }
                    resolve(items.reverse())
                }, 2000)
            }).then(res => {
                commit('setPaymentListData', res);
            })
        },
        fetchCategory({
            commit
        }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Food', 'Sport', 'Education', 'Auto', 'Health', 'Family'])
                }, 1000)
            }).then(res => {
                commit('setCategoryList', res)
            })
        }

    }

});