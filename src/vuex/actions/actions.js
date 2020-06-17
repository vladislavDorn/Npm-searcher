import ApiService from "../../services/apiService";

const apiService = new ApiService();

export default {
  handleSearchValue({ commit }, value) {
    commit("handleSearchValue", value);
  },

  getPackages({ commit }, {packageName, offset}) {
    commit("toggleLoad")
    commit("changeOffset", offset)
    apiService.getData(packageName, offset).then((data) => commit("getPackages", data));
  },

  setModalData({commit}, index) {
      commit("setModalData", index)
  },

  closeModal({commit}) {
      commit("closeModal")
  }
};
