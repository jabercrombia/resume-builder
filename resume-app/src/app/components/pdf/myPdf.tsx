import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link, Rect, Svg } from '@react-pdf/renderer';
import Experience from "../../components/form/experience";
import {Roboto} from "../../components/fonts/roboto";

Roboto();

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontSize: 12,
    padding: 20, 
    color: "#222"
  },
  main: {
    width: "70%",
    padding: 10,
    fontSize: 12,
  },
  aboutMe: {
    marginBottom: 10
  },
  wrapContainer: {
    width: "100%",
    alignContent: "center",
    flexDirection: "row",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
  },
  header: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "uppercase",
    paddingBottom: 5,
    paddingTop: 10,
    color: "#000"
  },
  sidebar: {
    margin: 0,
    width: "40%",
    padding: 10,
    fontSize: 10,
    backgroundColor: "#eee",
    minHeight: "100%"
  },
  companyName: {
    fontSize: 14,
    fontWeight: 600,
  },
  title: {
    fontSize: 12,
    width: "50%",
  },
  jobDescription: {
    fontSize: 12,
    paddingBottom: 10
  },
  date: {
    fontSize: 10,
    marginBottom: 10,
    width: "50%",
    textAlign: "right"
  },
  name: {
    padding: 10,
    width: "60%",
  },
  contact: {
    fontSize: 10,
    fontWeight: 300,
  },
  link: {
    color: "black",
    textDecoration: "none"
  },
  skillName: {
    width: "100%"
  },
  bold: {
    fontWeight: 400
  }
});
export default function myPdf({formData} : {formData:any}) {
  const firstName = formData?.firstName;
  const lastName = formData?.lastName;
  const title = formData?.title;
  const phoneNumber = formData?.phoneNumber;
  const linkedIn = formData?.linkedIn;
  const email = formData?.email;
  const aboutMe = formData?.aboutMe;
  const companyList = formData?.companyList;
  const portfolio = formData?.portfolio;
  const skills = formData?.skills;
  const schoolName = formData?.schoolName;
  const degree = formData?.degree;

  function dateFormat(date : any) {

    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    const dateSplit = date.split("-");
    const monthInput = dateSplit[1];
    const yearInput = dateSplit[0];
    const getMonth = month[parseInt(monthInput,10)-1];

    const dateFormat = getMonth + " " + yearInput;

    return dateFormat;
  }

  function skillValueSquare(num : any){
    const square = (Math.round(num / 20)*20) / 20;
    var sqArr = [];
    for (var x = 0; x < square; x++) {
      sqArr.push(x);
    }

    return sqArr.length == 0 ? sqArr = [''] : sqArr ;
  }

// Create Document Component
return (
    <Document creator="https://resume-app-flame.vercel.app/" author={firstName} title={firstName + " " + lastName + " Resume"}>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.headerContainer}>
          <View style={styles.name}>
            <Text style={{ letterSpacing: "-2", lineHeight: "20%", fontSize: 46, fontWeight: 400}}>{firstName} </Text>
            <Text style={{ letterSpacing: "-2", lineHeight: "-20%", fontSize: 46, fontWeight: 200}}>{lastName}</Text>
            <Text style={{ fontSize: 12, letterSpacing: 2, fontWeight: 400, textTransform: "uppercase" }}>{title}</Text>
          </View>
        </View>
        
        <View style={styles.wrapContainer}>
        <View style={styles.sidebar}>
          <View>
            <Text style={styles.header}>Contact</Text>  
            <Text>{phoneNumber}</Text>
            <Text>
              <Link src={"mailto:"+email} style={styles.link}>{email}</Link>
            </Text>
            <Text>
              <Link src={linkedIn} style={styles.link}>{linkedIn?.replace("https://www.","")}</Link>
            </Text>
            {portfolio?.length > 0 &&
            <Text style={styles.header}>Portfolio</Text>
            }
            
            {portfolio?.map((index : any) => (
              <View key={index}>
                <Text style={styles.bold}>{index.portfolioName}</Text>
                <Link src={index.portfolioLink} style={styles.link}>{index?.portfolioLink?.replace("https://www.","")}</Link>
              </View>
            ))} 
          </View>
          <Text style={styles.header}>About Me</Text>  
          <Text>{aboutMe}</Text> 
          <Text style={styles.header}>Education</Text>
          <Text style={{fontWeight: 400}}>{schoolName}</Text>
          <Text>{degree}</Text>
          {skills?.length > 0 &&
            <Text style={styles.header}>Skills</Text>
          }
      
            {skills?.map((index : any) => (
                <View key={index} style={{flexDirection: "row", width: "100%", marginBottom: 5}}>
                  <View style={{flex: 1, width: "50%", marginRight: 2}}>
                    <Text style={styles.skillName}>{index.skillName}</Text>
                  </View>
                  <View style={{width: "50%", flexDirection: "row", alignItems: "center", paddingLeft: 2}}>
                    {skillValueSquare(index.skillValue)?.map((index : any) => (
                      <View key={index} style={{width:10, alignItems: "center", marginRight: 2}}>
                      <Svg viewBox="0 0 10 10">

                      <Rect
                        width="10"
                        height="10"
                        fill="#ccc"
                      />
            
                    </Svg>
                    </View>
                    ))}
                  
                  </View>
                </View>
              ))} 
          
        </View>
        <View style={styles.main}>
          <Text style={styles.header}>Experience</Text> 
          <View style={{flexDirection: "column", width: "100%"}}>

            {companyList?.map((index : any) => (
              <View key={index}>
                <Text style={styles.companyName}>{index.companyName}</Text>
                <View style={{width: "100%",flexDirection: "row",}}>
                  <Text style={styles.title} wrap={false}>{index.title}</Text> 
                  <Text style={styles.date}>{dateFormat(index.startDate)} - {index.currentJob ? "Present" : dateFormat(index.endDate)}</Text>
                </View>
                <Experience bulletPoint={index.jobDescription}/>
              </View>
            ))} 
            
          </View>

        </View>
        </View>
      </Page>
    </Document>
  );

}
