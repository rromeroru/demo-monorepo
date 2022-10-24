import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const firstStain = {
    top: '0',
    left: '0',
    width: '412px',
    height: '444px',
    color: '#C333FF',
    oneTop: '15px',
    oneLeft: '20px',
    oneSize: '244px',
    twoTop: '6px',
    twoLeft: '133px',
    twoSize: '278px',
    threeTop: '190px',
    threeLeft: '245px',
    threeSize: '190px',
}

const secondStain = {
    top: '236px',
    left: '83px',
    width: '342px',
    height: '372px',
    color: '#00F4E2',
    oneTop: '13px',
    oneLeft: '0',
    oneSize: '214px',
    twoLeft: '100px',
    twoTop: '0',
    twoSize: '244px',
    threeTop: '176px',
    threeLeft: '206px',
    threeSize: '166px',
}

const Bean = styled.span`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: 
    radial-gradient(farthest-side, ${(props) => props.color} 96%, transparent) ${(props) => props.oneTop} ${(props) => props.oneLeft}/${(props) => props.oneSize} ${(props) => props.oneSize},
    radial-gradient(farthest-side, ${(props) => props.color} 96%, transparent) ${(props) => props.twoTop} ${(props) => props.twoLeft}/${(props) => props.twoSize} ${(props) => props.twoSize},
    radial-gradient(farthest-side, ${(props) => props.color} 96%, transparent) ${(props) => props.threeTop} ${(props) => props.threeLeft}/${(props) => props.threeSize} ${(props) => props.threeSize};
    background-repeat: no-repeat;
    z-index: 2;
`

const Content = styled.div`
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    position: relative;
    -webkit-filter  : blur(75px);
    -moz-filter : blur(75px);
    -ms-filter  : blur(75px);
    -o-filter   : blur(75px);
    filter      : blur(75px);
    -webkit-backdrop-filter: blur(75px);
    backdrop-filter: blur(75px)
    filter: blur(75px);
    transform: rotate(${(props) => props.rotation}deg)
    `

const ContentBean = styled.div`
    overflow: hidden;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`

const LabelStyle = styled.p`
    font-family: monospace;
`

const Beans = ({ top, left, rotation }) => {
    return (
        <Content
            top={top}
            left={left}
            rotation={rotation}
        >
            <Bean {...firstStain} />
            <Bean {...secondStain} />
        </Content>
    )
}

export const BlurAssets = ({  top, left, label, width, height, rotation }) => {
    return (
        <>
            <LabelStyle>{label}</LabelStyle>
            <ContentBean width={width} height={height}>
                <Beans
                    top={top}
                    left={left}
                    rotation={rotation}
                />
            </ContentBean>
        </>
    )
}

BlurAssets.propTypes = {
    top: PropTypes.string,
    left: PropTypes.string,
    rotation: PropTypes.number,
    label: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}

BlurAssets.defaultProps = {
    top: '30%',
    left: '-30%',
    rotation: 0,
    label: 'violet-aqua position 30%',
    width: '580px',
    height: '500px',
};