import $ from 'jquery'


const icons=[
    {
        className:'home-outline',
        name:'home',
        to:"home"
    },
    {
        className:'color-palette-outline',
        name:'theme',
        onClick:()=>$('.color').toggleClass('active')
    },
    {
        className:'information-outline',
        name:'information',
        to:"about"
    },
    {
        className:'book-outline',
        name:'education',
        to:"skill"
    },
    {
        className:'terminal-outline',
        name:'Project',
        to:"project"
    },
    {
        className:'mail-outline',
        name:'contact',
        to:"bottom"
    }
]


const circleData={
    icons
}
export default circleData;