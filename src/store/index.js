import { createStore } from 'vuex'

const fromJson = "https://tomlga.github.io/EompServerVue/data.json"

export default createStore({
  state: {
    Testermonals:"",
    education:""

  },

  getters: {
  },


  mutations: {
    setTestermonals(state,Testermonals){
      state.Testermonals = Testermonals
    },
    setEducation(state, education){
      state.education =education
    }
  },
  actions: {
    async fecthTestermonals (context){
      try{
        let statements = await fetch (fromJson)
        let {Testermonals} = await statements.json()
        if (Testermonals){
          context.commit ('setTestermonals', Testermonals)
        } else{
          context.commit ('setSpinner', true)
        }
      } catch(e){
        console.log(e.message)
      }
    },
    
    async fecthEducation (context){
      try{
        let edu = await fetch (fromJson)
        let {education} = await edu.json()
        if (education){
          context.commit ('setEducation', education)
        } else{
          context.commit ('setSpinner', true)
        }
      } catch(e){
        console.log(e.message)
      }
    }
    
  },




  modules: {
  }
})
