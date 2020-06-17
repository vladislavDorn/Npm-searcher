import getters from "../getters/getters";
import actions from "../actions/actions";
import mutations from "../mutations/mutations";

export default {
  state: {
    searchValue: "",
    paginationValue: "",
    isLoad: true,
    packagesData: null,
    total: 0,
    offset: 0,
    modal: {
      view: false,
      data: null,
    },
  },
  getters,
  actions,
  mutations,
};
