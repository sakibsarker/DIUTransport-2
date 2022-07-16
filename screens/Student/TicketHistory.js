import React,{useState} from 'react'
import {
    Button,
    StyleSheet,
    Text,
    View,
    ScrollView,
  } from 'react-native';
const TicketHistory = () => {
    return (
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.ticket}>
              <View style={styles.date}><Text>19 June-2022</Text></View>
              <Text>25.00 TK</Text>
              <View style={styles.timestus}>
                <View style={styles.tilocation}>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocationl1}>Location</Text>
                  <Text style={styles.too}>TO</Text>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocatiol2}>Location</Text>
                  </View>
                <View style={styles.timing}>
                  <Text style={styles.timingt1}>04:00 PM</Text>
                  <Text style={styles.timingt2}>06:00 PM</Text>
                  </View>
              </View>
              <View style={styles.timerm}>
                <View>
                  <Text style={styles.timeremin}>Time Remaing</Text>
                  <Text style={styles.min}>12 Min</Text>
                
                </View>
                <View><Text style={styles.busname}>Surjomukhi 27</Text></View>
              </View>
              <View style={styles.buttn}>
                <Button title='Show Ticket' color={'black'}></Button>
              </View>
          </View>
            <View style={styles.ticket}>
              <View style={styles.date}><Text>19 June-2022</Text></View>
              <Text>25.00 TK</Text>
              <View style={styles.timestus}>
                <View style={styles.tilocation}>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocationl1}>Location</Text>
                  <Text style={styles.too}>TO</Text>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocatiol2}>Location</Text>
                  </View>
                <View style={styles.timing}>
                  <Text style={styles.timingt1}>04:00 PM</Text>
                  <Text style={styles.timingt2}>06:00 PM</Text>
                  </View>
              </View>
              <View style={styles.timerm}>
                <View>
                  <Text style={styles.timeremin}>Time Remaing</Text>
                  <Text style={styles.min}>12 Min</Text>
                
                </View>
                <View><Text style={styles.busname}>Surjomukhi 27</Text></View>
              </View>
              <View style={styles.buttn}>
                <Button title='Show Ticket' color={'black'}></Button>
              </View>
          </View>
            <View style={styles.ticket}>
              <View style={styles.date}><Text>19 June-2022</Text></View>
              <Text>25.00 TK</Text>
              <View style={styles.timestus}>
                <View style={styles.tilocation}>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocationl1}>Location</Text>
                  <Text style={styles.too}>TO</Text>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocatiol2}>Location</Text>
                  </View>
                <View style={styles.timing}>
                  <Text style={styles.timingt1}>04:00 PM</Text>
                  <Text style={styles.timingt2}>06:00 PM</Text>
                  </View>
              </View>
              <View style={styles.timerm}>
                <View>
                  <Text style={styles.timeremin}>Time Remaing</Text>
                  <Text style={styles.min}>12 Min</Text>
                
                </View>
                <View><Text style={styles.busname}>Surjomukhi 27</Text></View>
              </View>
              <View style={styles.buttn}>
                <Button title='Show Ticket' color={'black'}></Button>
              </View>
          </View>
        </View>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      body:{
        flex:1,
        backgroundColor:'#f3f3f3',
        alignItems:'center',
      },
      date:{
        alignItems:'center',
      },
      ticket:{
        backgroundColor:'white',
        height:'35%',
        width:'80%',
        marginTop:20,
        borderTopWidth:10,
        borderLeftWidth:20,
        borderColor:'white',
        borderRadius:20,
      },
      timestus:{
        flexDirection:'row',
        marginBottom:10
      },
      timing:{
        marginLeft:'40%'
      },
      too:{
        fontWeight:'800',
        marginTop:20,
        marginBottom:20,
      },
      timingt2:{
        marginTop:80
      },
      timerm:{
        flexDirection:'row',
        marginBottom:10
      },
      busname:{
        marginLeft:20
      },
      buttn:{
        alignItems:'center'
      },
    
    
    });

export default TicketHistory
