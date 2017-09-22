export const loadSiteContent = ({commit}) => {
  setTimeout(() => {
    commit('setSiteContentLoaded')
  }, 1)
}
