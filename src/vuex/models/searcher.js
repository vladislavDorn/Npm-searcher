import getters from '../getters/getters'

export default {
  state: {
    isLoad: true,
    packagesData: [
      {
        name: 'First name',
        description: "first description"
      },
      {
        name: 'Second name',
        description: "Second description"
      },
    ],
    modal: {
      view: false,
      data: {
        title: "Title",
        description: "Description"
      }
    }
  },
  getters
};
