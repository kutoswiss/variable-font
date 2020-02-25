import GithubButton from 'vue-github-button'
export default {
    name: 'TopMenu',
    components: {
        GithubButton
    },
    props: {
        projectName: String,
        version: String
    }
}