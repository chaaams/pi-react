import React from "react";
import axios from "axios"

class Appli extends React.Component{
    constructor(){
        super();
        this.state=({
            pi: '',
        })
    }

    componentDidMount= (e) =>{
        axios("https://api.pi.delivery/v1/pi?start=0&numberOfDigits=30").then(res =>{
            console.log("resultat: ", res);
            console.log("resultat data: ", res.data.content);
            if(res.data.content[0] == 3){
                var dataSplit= res.data.content.split('')
                dataSplit.splice(1,0,',')
                var arrayJoin = dataSplit.join('')
                console.log("dataSplit: ",dataSplit);
               
                console.log("arrayJoin: ",arrayJoin);
                this.setState({
                    pi: arrayJoin
                })

            }else{
               this.setState({
                pi: res.data.content
            })  
            }

           
        })

    }

    render(){
        if(this.state.pi === null){
            return(
                <>
                    <h2>Aucune Valeur disponible</h2>
                </>
            )
        }else{ return(
                <>
                <h2>la Valeur de pi: {this.state.pi}</h2>
                </>
        )
    }
       
    }
}

export default Appli