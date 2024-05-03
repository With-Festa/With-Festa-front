import { Theme } from '@emotion/react';

const colors = {
    key: '#FA6030',
    white: '#FFFFFF',
    background: '#F5F5F5',
    LG: '#DDDDDD',
    LG_2: '#E7E7E7',
    WG: '#BCBCBC',
    MG: '#9E9E9E',
    DG: '#494949',
    BG: '#191919',
    black: '#000000',
    sub_pink: '#EFB6B6',
    sub_ivory: '#E5E2CE',
    sub_yellow: '#F8E99A',
    sub_green: '#85CEAF',
    sub_blue: '#B3CBE8',
    sub_purple: '#929DD9',
    white90: '#FFFFFFE5',
    white80: '#FFFFFFCC',
    white70: '#FFFFFFB2',
    white60: '#FFFFFF99',
    white50: '#FFFFFF80',
    white40: '#FFFFFF66',
    white30: '#FFFFFF4D',
    white20: '#FFFFFF33',
    white10: '#FFFFFF1A',
    DG50: '#49494980',
    Modal: '#000000BF',
    red: '#FF1D1D',
};

const fonts = {
    Head1_B_20: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: '140%',
        letterSpacing: '-0.02rem',
    },
    Head2_SB_18: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '1.8rem',
        lineHeight: '140%',
        letterSpacing: '-0.018rem',
    },
    Head3_B_18: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1.8rem',
        lineHeight: '140%',
        letterSpacing: '-0.018rem',
    },
    Title1_SB_16: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '1.6rem',
        lineHeight: 'auto',
        letterSpacing: '-0.016rem',
    },
    Title2_M_16: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '1.6rem',
        lineHeight: '145%',
        letterSpacing: '-0.016rem',
    },
    Body1_R_16: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1.6rem',
        lineHeight: '150%',
        letterSpacing: '-0.04rem',
    },
    Body1_M_16: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '1.6rem',
        lineHeight: '150%',
        letterSpacing: '-0.04rem',
    },
    Body2_M_14: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '1.4rem',
        lineHeight: '145%',
        letterSpacing: '-0.035rem',
    },
    Body3_R_14: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1.4rem',
        lineHeight: '150%',
        letterSpacing: '-0.035rem',
    },
    Body4_SB_14: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '1.4rem',
        lineHeight: '145%',
        letterSpacing: '-0.035rem',
    },
    Caption1_R_12: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1.2rem',
        lineHeight: '140%',
        letterSpacing: '-0.03rem',
    },
    Caption2_SB_12: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '1.2rem',
        lineHeight: 'auto',
        letterSpacing: '-0.03rem',
    },
    E_Title1_SB_18: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '1.8rem',
        lineHeight: 'auto',
        letterSpacing: '0',
    },
    E_Title2_SB_16: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '1.6rem',
        lineHeight: 'auto',
        letterSpacing: '0',
    },
    E_Body1_SB_14: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '1.4rem',
        lineHeight: '120%',
        letterSpacing: '0',
    },
    E_Body2_R_14: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1.4rem',
        lineHeight: 'auto',
        letterSpacing: '0',
    },
    E_Caption_R_12: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1.2rem',
        lineHeight: 'auto',
        letterSpacing: '0',
    },
    Orange: {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '2.2rem',
        lineHeight: 'auto',
        letterSpacing: '0',
    },
};

const theme: Theme = {
    colors,
    fonts,
};

export default theme;