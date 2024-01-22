import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';
import Experience from "../../components/form/experience";

Font.register({ 
    family: 'Roboto', 
    fonts: [
        {
          src: 'https://fonts.gstatic.com/s/roboto/v15/7MygqTe2zs9YkP0adA9QQQ.ttf',
          fontWeight: 100,
        },
        {
          src: 'https://fonts.gstatic.com/s/roboto/v15/dtpHsbgPEm2lVWciJZ0P-A.ttf',
          fontWeight: 300,
        },
        {
          src: 'https://fonts.gstatic.com/s/roboto/v15/W5F8_SL0XFawnjxHGsZjJA.ttf',
          fontWeight: 400,
        },
        {
          src: 'https://fonts.gstatic.com/s/roboto/v15/Uxzkqj-MIMWle-XP2pDNAA.ttf',
          fontWeight: 500,
        },
        {
          src: 'https://fonts.gstatic.com/s/roboto/v15/W5F8_SL0XFawnjxHGsZjJA.ttf',
          fontWeight: 600,
        },
        {
          src: 'https://fonts.gstatic.com/s/roboto/v15/bdHGHleUa-ndQCOrdpfxfw.ttf',
          fontWeight: 700,
        },
        {
          src: 'https://fonts.gstatic.com/s/roboto/v15/H1vB34nOKWXqzKotq25pcg.ttf',
          fontWeight: 900,
        },
      ],
});


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
    fontSize: 10
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
    paddingTop: 10,
    paddingRight: 10,
    width: "40%",
    textAlign: "right",
  },
  link: {
    color: "black",
    textDecoration: "none"
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
  const companyList = formData?.list;
  const schoolName = formData?.schoolName;
  const degree = formData?.degree;
  const skills = formData?.skill?.split(",");

  function dateFormat(date : any) {

    const dateString = new Date(date);
    const getShortMonth = dateString.toLocaleString('default', { month: 'short' });
    const dateFormat = getShortMonth.toUpperCase() + " " + dateString.getFullYear();

    return dateFormat;
  }

// Create Document Component
return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.headerContainer}>
          <View style={styles.name}>
            <Text style={{fontSize: 34, fontWeight: 400}}>{firstName} </Text>
            <Text style={{fontSize: 34, fontWeight: 200}}>{lastName}</Text>
            <Text style={{ fontSize: 12, fontWeight: 200 }}>{title}</Text>
          </View>
          <View style={styles.contact}>
            <Text style={{textAlign: "right"}}>{phoneNumber}</Text>
            <Text style={{textAlign: "right"}}>
              <Link src={"mailto:"+email} style={styles.link}>{email}</Link>
            </Text>
            <Text>
              <Link src={linkedIn} style={styles.link}>{linkedIn?.replace("https://www.","")}</Link>
            </Text>
          </View>
        </View>
        
        <View style={styles.wrapContainer}>
        <View style={styles.sidebar}>
          <Text style={styles.header}>About Me</Text>  
          <Text style={{fontSize: 10}}>{aboutMe}</Text> 
          <Text style={styles.header}>Education</Text>
          <Text>{schoolName}</Text>
          <Text style={{fontSize: 10}}>{degree}</Text>

          <Text style={styles.header}>Skills</Text>
          {skills?.map((index : any) => (
              <Text key={index}>
                {index.trim()}
              </Text>
            ))} 
        </View>
        <View style={styles.main}>
          <Text style={styles.header}>Experience</Text> 
          <View style={{flexDirection: "column", width: "100%"}}>

            {companyList?.map((index : any) => (
              <View key={index}>
                <Text style={styles.companyName}>{index.companyName}</Text>
                <View style={{width: "100%",flexDirection: "row",}}>
                  <Text style={styles.title}>{index.title}</Text> 
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
