// ##############################
// // // StatsCard styles
// #############################

import {
  card,
  cardHeaderSM,
  defaultFont,
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  roseCardHeader,
  skyBlueCardHeader,
  cardActions,
  grayColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  primaryColor,
  roseColor,
  skyBlueColor
} from '../main';

const statsCardStyle = {
  card,
  cardHeader: {
    ...cardHeaderSM,
    float: 'left',
    textAlign: 'center'
  },
  cardHeaderRTL: {
    ...cardHeaderSM,
    float: 'right',
    textAlign: 'center'
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  roseCardHeader,
  skyBlueCardHeader,
  cardContent: {
    textAlign: 'right',
    paddingTop: '10px',
    padding: '15px 20px',
    paddingBottom: '5px!important'
  },
  cardContentRTL: {
    textAlign: 'left',
    paddingTop: '10px',
    padding: '15px 20px',
    paddingBottom: '5px!important'
  },
  cardIcon: {
    width: '40px',
    height: '36px',
    fill: '#fff'
  },
  cardAvatar: {
    margin: '10px 8px 10px',
    display: 'flex'
  },
  cardCategory: {
    marginBottom: '0',
    color: '#000',
    margin: '0 0 10px',
    ...defaultFont
  },
  cardTitle: {
    margin: '0',
    ...defaultFont,
    fontSize: '1.825em'
  },
  cardTitleSmall: {
    fontSize: '65%',
    fontWeight: '400',
    lineHeight: '1',
    color: '#777'
  },
  cardActions: {
    ...cardActions,
    padding: '10px 0 0 0!important'
  },
  cardStats: {
    lineHeight: '22px',
    color: grayColor,
    fontSize: '12px',
    display: 'inline-block',
    margin: '0!important'
  },
  cardStatsIcon: {
    position: 'relative',
    top: '4px',
    width: '16px',
    height: '16px'
  },
  warningCardStatsIcon: {
    color: warningColor
  },
  primaryCardStatsIcon: {
    color: primaryColor
  },
  dangerCardStatsIcon: {
    color: dangerColor
  },
  successCardStatsIcon: {
    color: successColor
  },
  infoCardStatsIcon: {
    color: infoColor
  },
  roseCardStatsIcon: {
    color: roseColor
  },
  grayCardStatsIcon: {
    color: grayColor
  },
  skyBlueCardStatsIcon: {
    color: skyBlueColor
  },
  cardStatsLink: {
    color: primaryColor,
    textDecoration: 'none',
    ...defaultFont
  }
};

export default statsCardStyle;
