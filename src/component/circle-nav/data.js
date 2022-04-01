import $ from 'jquery'


const icons=[
    {
        className:'home-outline',
        name:'home',
        onClick:(e)=>e
    },
    {
        className:'color-palette-outline',
        name:'theme',
        onClick:()=>$('.color').toggleClass('active')
    },
    {
        className:'information-outline',
        name:'information',
        onClick:e=>e
    },
    {
        className:'book-outline',
        name:'education',
        onClick:(e)=>e
    },
    {
        className:'share-social-outline',
        name:'social',
        onClick:(e)=>e
    },
    {
        className:'heart-outline',
        name:'interest',
        onClick:(e)=>e
    },
    {
        className:'terminal-outline',
        name:'Project',
        onClick:(e)=>e
    },
    {
        className:'mail-outline',
        name:'contact',
        onClick:(e)=>e
    }
]


const circleData={
    icons
}
export default circleData;