// iimport {state} from "/states";

const state= {
      tabIndex:0
}

const mutations = {
      CHANGETAB(state,currentIndex){
          state.tabIndex= currentIndex;
      }
}

export default new Vuex.Store({
        state,
        mutations
})
