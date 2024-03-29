/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const RESUME_DATA_URL = 'https://julien.usson.dev/json-resume/resume-fr.json';
export const SET_RESUME = 'SET_RESUME';

// state
const state = {
  loaded: false,
  resume: {},
};

// getters
const getters = {
  loaded: state => state.loaded,
  resume: state => state.resume,
  profil: state => state.resume.profil,
  experiences: state => state.resume.experiences,
  educations: state => state.resume.educations,
  skills: state => state.resume.skills,
  projects: state => state.resume.projects,
  hobbies: state => state.resume.hobbies,
  contact: state => state.resume.contact,
};

// actions
const actions = {
  getResumeData({ commit }) {
    axios.get(RESUME_DATA_URL)
      .then((response) => {
        commit(SET_RESUME, response.data);
      });
    // .catch((error) => {

    // });
  },
};

// mutations
const mutations = {
  [SET_RESUME](state, resume) {
    state.resume = resume;
    state.loaded = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
