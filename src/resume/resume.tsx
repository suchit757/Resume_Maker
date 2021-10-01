import React from 'react';
import "../App.scss";
import { MultiSelect } from "react-multi-select-component";
import { IObejctVlaue } from "../interface"
import {toast, ToastContainer} from "react-toastify";
import { NavLink } from "react-router-dom";

export interface IResume {
  name: string;
  age: string;
  marks: string;
  ObejctVlaueArray: Array<IObejctVlaue>;
  selected: any;
  selectedLang: any;
  checkedIn: boolean;
  selectedvalue: any;
  languagevalue: any;
}

export default class Resume extends React.Component {
  state: IResume = {
    name: " ",
    age: " ",
    marks: " ",
    ObejctVlaueArray: [],
    selected: [],
    selectedLang: [],
    checkedIn: false,
    selectedvalue: [],
    languagevalue: [],
  }

  enterText(e: any, num: number){
    if(num === 0){
      this.setState({name: e.target.value})
    }
    else if(num === 1){
      this.setState({age: e.target.value})
    }
    else if(num === 2){
      this.setState({marks: e.target.value})
    }
  }

  isEmpty( element: HTMLInputElement ): boolean {
    const val = element.value;
    return val === "";

}

  validateEmail( email: string ): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test( email );
}

  enterTextDone(){
    const x = [];
    const formElements = document.getElementsByTagName( "input" );
    const discriptionValue = document.getElementsByTagName( "textarea" );

    let lg = formElements.length;
    for ( let i = 0;i < lg;i++ ) {
        if ( this.isEmpty( formElements[i] ) ) {
         if(formElements[i].placeholder === "isCurrent" || formElements[i].placeholder === "Description" ){
           continue;
         }
            toast.warning( `${formElements[i].placeholder} is mandatory` );
            return;
        }
    }

    if ( !this.validateEmail( formElements[2].value ) ) {
      toast.error( "Please enter a valid email address" );
      return;
    }

    const value: IObejctVlaue = {
      name: formElements[0].value,
      birthdate: formElements[1].value,
      emailId: formElements[2].value,
      about: discriptionValue[0].value, /** textArea */
      experience: [{
        companyName: formElements[3].value,
        jobPost: formElements[4].value,
        description: formElements[5].value,
        inCurrent: this.state.checkedIn,
        FormTo: formElements[7].value,
      }],
      education: [{
        name: formElements[8].value,
        location: formElements[9].value,
        about: discriptionValue[1].value, /** textArea */
        formTo: formElements[10].value,
      }],
      skill:[{
        value: this.state.selectedvalue
      }],
      language: [{
        value: this.state.languagevalue
      }],
      project: [{
        name: formElements[11].value,
        description: discriptionValue[2].value, /** textArea */
        projectRol: formElements[12].value,
      }]

    }
    x.push(value);
    localStorage.setItem( "resume-data", JSON.stringify( x ) );
    ( this.props as any ).history.push( "/popup/redirect" );
  }

  Selectertoggel = (e: any, num: number) =>{

    if(num === 0){
      let x: any = [];
      e.map((v: any) => { return x.push(v.value)})
      this.setState({
        selected: e,
        selectedvalue: x
      })
    }
    else if(num === 1){
      let y: any = [];
      e.map((v: any) => { return y.push(v.value)})
      this.setState({
        selectedLang: e,
        languagevalue: y
      })
    }
  }

  isCurrentfunction(e: any){
    this.setState({
      checkedIn: ! this.state.checkedIn
    })
  }


  render() {

    const language = [
      { label: "English", value: "English" },
      { label: "Hindi", value: "Hindi" },
      { label: "Sanskrit", value: "Sanskrit" },
      { label: "Urdu", value: "Urdu" },
      { label: "Maithili", value: "Maithili"},
      { label: "Gujarati", value: "Gujarati" },
      { label: "Kannada", value: "Kannada" },
      { label: "Malayalam", value: "Malayalam" },
      { label: "Punjabi", value: "Punjabi" }
    ];

    const options = [
      { label: "Cricekt", value: "Cricekt" },
      { label: "Chess ", value: "Chess" },
      { label: "ludo ", value: "ludo" },
      { label: "eating ", value: "eating" },
      { label: "reading books", value: "reading books" },
      { label: "Sleeping ", value: "Sleeping" },
      { label: "coding ", value: "coding" },
    ];
    return (
      <div className="row" style={{margin:"0px"}}>
        <ToastContainer hideProgressBar={false} />
        {/* form Input Section */}
          <div className="col-xl-5 offset-xl-3 block">
          <div className="heading">Resume Maker</div>

            <div className="text-heading">Enter Name:-</div>
              <input style={{marginRight:"160px"}} className="input-css" type="text" defaultValue= "" placeholder="Name" onChange={(e) => {this.enterText(e, 0)}} />

              <div className="text-heading">Birthdate:-</div>
                <input type= "date" style={{marginRight:"270px", paddingRight:"0px"}} className="input-css" placeholder="Birthdate" onChange={(e) => {this.enterText(e, 0)}} />

              <div className="text-heading">Email id:-</div>
                <input style={{marginRight:"130px"}} className="input-css" type="text" defaultValue= "" placeholder="Email id" onChange={(e) => {this.enterText(e, 0)}} />

              <div className="text-heading">About:-</div>
                <textarea style={{marginRight:"120px", paddingRight:"80px", resize:"none", height:"80px"}} className="input-css" defaultValue= "" placeholder="About" onChange={(e) => {this.enterText(e, 0)}} />


              <div style={{margin:"10px 0px -5px -57%", fontWeight:"bolder"}}>Experience:-</div>
                <div className="border-box">
                <div className="text-heading">Comapny Name:-</div>
                  <input style={{marginRight:"105px"}} className="input-css" type="text" defaultValue= "" placeholder="Comapny Name" onChange={(e) => {this.enterText(e, 0)}} />

                <div className="text-heading">Job Post:-</div>
                  <input style={{marginRight:"55px"}} className="input-css" type="text" defaultValue= "" placeholder="Job Post" onChange={(e) => {this.enterText(e, 0)}} />

                  <div className="text-heading">Description:-</div>
                <input style={{marginRight:"80px"}} className="input-css" type="text" defaultValue= "" placeholder="Description" onChange={(e) => {this.enterText(e, 0)}} />

                <div className="text-heading">isCurrent:-</div>
                  <input style={{marginRight:"53%", marginTop:"23px"}} onClick={(e) => {this.isCurrentfunction(e)}} className="input-css" type="checkbox" defaultValue= ""  placeholder="isCurrent" onChange={(e) => {this.enterText(e, 0)}} />

                <div className="text-heading">form-to:-</div>
                  <input type= "date" style={{marginRight:"180px", paddingRight:"0px"}} className="input-css" placeholder="form-to" onChange={(e) => {this.enterText(e, 0)}} />

              </div>


              <div style={{margin:"10px 0px -5px -60%", fontWeight:"bolder"}}>Eduction:-</div>
                <div className="border-box">
                <div className="text-heading">Name:-</div>
                  <input style={{marginRight:"105px"}} className="input-css" type="text" defaultValue= "" placeholder="Name" onChange={(e) => {this.enterText(e, 0)}} />

                <div className="text-heading">Location:-</div>
                  <input style={{marginRight:"125px"}} className="input-css" type="text" defaultValue= "" placeholder="Location" onChange={(e) => {this.enterText(e, 0)}} />

                  <div className="text-heading">About:-</div>
                <textarea style={{marginRight:"115px", paddingRight:"80px", resize:"none", height:"80px"}} className="input-css" defaultValue= "" placeholder="About" onChange={(e) => {this.enterText(e, 0)}} />

                <div className="text-heading">form-to:-</div>
                  <input type= "date" style={{marginRight:"250px", paddingRight:"0px"}} className="input-css" placeholder="form-to" onChange={(e) => {this.enterText(e, 0)}} />

              </div>

            <div className="text-heading" style={{marginTop:"25px"}}>Skill:-</div>
            <div style={{padding:"0px 120px 0px 196px"}} className="input-css">
              <MultiSelect
                options={options}
                value={this.state.selected}
                onChange={(e: any) => {this.Selectertoggel(e, 0)}}
                labelledBy={"Select"}
              />
            </div>

            <div className="text-heading" style={{marginTop:"25px"}}>Language:-</div>
            <div style={{padding:"0px 120px 0px 196px"}} className="input-css">
              <MultiSelect
                options={language}
                value={this.state.selectedLang}
                onChange={(e: any) => {this.Selectertoggel(e, 1)}}
                labelledBy={"Select"}
              />
            </div>



            <div style={{margin:"10px 0px -5px -60%", fontWeight:"bolder"}}>project:-</div>
                <div className="border-box">
                <div className="text-heading">Name:-</div>
                  <input style={{marginRight:"74px"}} className="input-css" type="text" defaultValue= "" placeholder="Name" onChange={(e) => {this.enterText(e, 0)}} />

                  <div className="text-heading">Description:-</div>
                <textarea style={{marginRight:"115px", paddingRight:"80px", resize:"none", height:"80px"}} className="input-css" defaultValue= "" placeholder="Description" onChange={(e) => {this.enterText(e, 0)}} />

                <div className="text-heading">Project Role:-</div>
                  <input style={{marginRight:"115px"}} className="input-css" type="text" defaultValue= "" placeholder="Project Role" onChange={(e) => {this.enterText(e, 0)}} />

              </div>


                <div style={{marginTop:"15px"}}>
                  <button onClick={() => {this.enterTextDone()}} style={{marginLeft:"50%"}}>Submit</button>
                  <NavLink className={"checkOutText"} to="/empty/resume/templete" style={{marginLeft:"40px"}} >Check-Out Empty Resume templet</NavLink>
                </div>
          </div>
      </div>
    )
  }
}
