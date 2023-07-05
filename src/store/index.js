import { createStore } from 'vuex';
let dataServer = "https://tomlga.github.io/EompServerVue/data.json";
export default createStore({
  state: {
    testimonials: null,
    projects: null


  },
  mutations: {
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    setProjects(state, projects){
      state.projects =projects
    }
  },
  actions: {
    //Testimonials
    async fetchTestimonials(context) {
      try {
        let statements = await fetch(dataServer);
        let { testimonials } = await statements.json();
        if (testimonials) {
          context.commit('setTestimonials', testimonials);
        } else {
          alert('Fetching data... Please wait.');
        }
      } catch(e) {
        console.log(e.message);
      }
    },

    async fetchProjects (context){
      try{
        let pro =await fetch (dataServer);
        let {projects} = await pro.json()
        if (projects){
          context.commit ('setProjects', projects);

        }
      } catch(e){
        console.log(e.message);
      }
    }








  },







  modules: {}
});





















