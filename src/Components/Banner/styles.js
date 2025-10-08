import styled from "styled-components";
import bannerImg from '../../Img/banner.webp'

const BannerSection = styled.section`
    width: 100%;
    padding: 60px 0;
    text-align: center;
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 50%;
    display: grid;
    justify-content: space-around;
`

export {
    BannerSection
}