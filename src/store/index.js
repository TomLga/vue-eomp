import { createStore } from 'vuex';
let dataServer = "https://tomlga.github.io/EompServerVue/data.json";
export default createStore({
  state: {
    testimonials: null,
    projects: null,
    education: null,
    work: null


  },
  mutations: {
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    setProjects(state, projects){
      state.projects =projects
    },
    setEducation(state, education){
      state.education = education
    },
    setWork(state, work){
      state.work = work
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
//projects
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
    },

    //education 
    async fetchEducation (context){
      try{
        let edu = await fetch(dataServer)
        let {education} = await edu.json()
        if (education){
          context.commit ('setEducation', education)
        }
      } catch (e){
        console.log(e.message)
      }
    },
    async fetchWork (context){
      try{
        let jobs = await fetch (dataServer)
        let {work} = await jobs.json();
        if(work){
          context.commit ('setWork', work)
        }
      } catch(e){
        console.log(e.message);
      }
    }








  },







  modules: {}
});





















