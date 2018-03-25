import { StyleSheet, Platform, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
export default StyleSheet.create({
      activityIndicatorContainer: {
            backgroundColor: "#BDC3C7",
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
      },
      indicatorPosition: {
            height: height
      },
      container: {
            flex: 1,
            backgroundColor: "#FFFFFF",
            padding: Platform.OS == 'ios' ? 20 : 0,
      },
      navBar: {
            backgroundColor: '#1b1b21',
      },
      navBarTitle: {
            color: '#FFFFFF'
      },
      barButtonTextStyle: {
            color: '#FFFFFF'
      },
      barButtonIconStyle: {
            tintColor: 'rgb(255,255,255)'
      }, sidemenumaindiv: {
            flex: 1,
            flexDirection: 'column'
      },
      sidemenuitems: {
            padding: 10,
            paddingBottom: 0,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center'
      },
      sidemenuText: {
            fontSize: 16,
            textAlign: 'left',
            color: '#666',
            fontWeight: 'normal',
            marginLeft: 10
      },
      breakitems: {
            padding: 10,
            borderBottomColor: '#dadada',
            borderBottomWidth: 2,
            height: height * 0.1,
            flexDirection: 'row',
            alignItems: 'center'
      },
      infoText: {
            color: '#BDC3C7',
            textAlign: 'justify'
      },
      infoHeads: {
            color: '#000',
            textAlign: 'justify',
            fontWeight: 'bold'
      },
      infoTouchTab: {
            flexDirection: 'column',
            flex: 0.2,
            alignItems: 'center'
      },
      infoTouchTabText: {
            color: '#000',
            fontSize: 12
      },
      detailsTopContentTopConWrap: {
            flex: 0.4,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            marginTop: height * .03,
            backgroundColor: '#333435'
      },
      detailsTopContent: {
            flex: 0.7,
            flexDirection: 'column',
            marginTop: height * 0.01
      },
      detailsContent: {
            textAlign: 'center',
            color: '#6C7A89'
      },
      adultIndicator: {
            borderWidth: 2,
            borderColor: '#6C7A89',
            textAlign: 'center',
            color: '#6C7A89'
      },
      detailsparentView: {
            flexDirection: 'row',
            position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: 99999
      },
      caraosulContainer: {
            backgroundColor: '#333435',
            flex: 0.8
      },
      detailsTopNav: {
            flex: 0.2,
            marginLeft: 0,
            marginRight: 5,
            marginBottom: 10,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            flexDirection: 'row',
      },
      listMainContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
      },
      listFlatContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
      },
      flatMultiMain: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 0.2,
            alignContent: 'center',
            alignItems: 'center'
      },
      flatMultiTitleContainer: {
            flex: 0.8,
            flexWrap: 'wrap'
      },
      flatMultiTitle: {
            fontFamily: "Times New Roman",
            fontSize: 12,
            textAlign: 'left',
            textAlignVertical: 'top',
            color: '#000'
      },
      flatMultiBtnContainer: {
            flex: 0.2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginRight: 5
      },
      flatSingleMain: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 0.8,
            marginBottom: height * 0.0015,
            marginLeft: width * 0.02
      },
      flatSingleTitleContainer: {
            flex: 0.8,
            flexWrap: 'wrap',
            flexDirection: 'column'
      },
      flatDate: {
            fontFamily: "Times New Roman",
            fontSize: 12,
            textAlign: 'left',
            color: '#6C7A89'
      },
      flatSTitle: {
            fontFamily: "Times New Roman",
            fontSize: 18,
            textAlign: 'left',
            fontWeight: 'bold',
            color: '#000'
      },
      flatSingleTT: {
            fontFamily: "Times New Roman",
            fontSize: 12,
            textAlign: 'left',
            fontWeight: 'bold',
            color: '#6C7A89'
      },
      flatSingleRateContainer: {
            flex: 0.2,
            flexDirection: 'row',
            marginBottom: height * 0.015
      },
      rateImage: {
            height: 30,
            width: 30
      },
      rateText: {
            textAlign: 'center',
            textAlignVertical: 'center',
            color: '#000'
      },
      infoRateBar: {
            flex: 0.2,
            marginLeft: 0,
            marginRight: 5,
            marginBottom: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center'
      },
      infoOverView: {
            marginLeft: width * 0.015,
            marginRight: width * 0.015
      },
      infoOverViewText: {
            color: '#000',
            textAlign: 'justify',
            marginBottom: height * 0.012
      }
});
