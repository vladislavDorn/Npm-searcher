export default {
  handleSearchValue(state, value) {
    state.searchValue = value;
    state.paginationValue = value;
  },

  getPackages(state, data) {
    state.packagesData = data.objects;
    state.total = data.total;
    state.isLoad = true;
    state.searchValue = "";
  },

  toggleLoad(state) {
    state.isLoad = !state.isLoad;
  },

  changeOffset(state, offset) {
    state.offset = offset
  },

  setModalData(state, index) {
    state.modal = {
      ...state.modal,
      data: state.packagesData[index].package,
      view: !state.modal.view,
      index
    };
  },

  closeModal(state) {
    state.modal = {
        ...state.modal,
        view: false,
        data: null
      }; 
  }
};
